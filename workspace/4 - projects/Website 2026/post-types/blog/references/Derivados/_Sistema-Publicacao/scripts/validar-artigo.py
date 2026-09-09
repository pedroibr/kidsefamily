#!/usr/bin/env python3
"""
Validador de artigos — Dra. Cristiane Martins (Clínica Kids & Family).

Verifica um JSON de artigo contra:
  1. O contrato `modelo-artigo.schema.json` (se a lib `jsonschema` existir).
  2. Regras do projeto que o schema não cobre (GEO, fidelidade, slug, voz, etc.).

Uso:
    python3 validar-artigo.py "Artigos Blog/artigo-respiracao-oral-crianca.json"
    python3 validar-artigo.py artigo.json --slug-esperado respiracao-oral-crianca

Saída: relatório com ERROS (bloqueiam) e AVISOS (rever). Código 1 se houver erros.
"""

import argparse
import json
import re
import sys
from pathlib import Path

SCHEMA_PADRAO = "modelo-artigo.schema.json"

PILARES = {
    "cavidade-oral",
    "respiracao",
    "crescimento-craniofacial",
    "funcao-oral",
    "sono",
    "desenvolvimento-integrado",
}

CTAS = {"agendar-consulta", "podcast-familia360", "newsletter"}

ERROS = []
AVISOS = []


def erro(msg):
    ERROS.append(msg)


def aviso(msg):
    AVISOS.append(msg)


def contar_palavras(texto):
    return len(re.findall(r"\b\w+\b", texto or ""))


def validar_schema(artigo, pasta_base):
    """Validação formal contra o JSON Schema, se a lib estiver disponível."""
    caminho = pasta_base / SCHEMA_PADRAO
    if not caminho.exists():
        aviso(f"Schema não encontrado em {caminho} — validação formal saltada.")
        return
    try:
        import jsonschema  # type: ignore
    except ImportError:
        aviso("Lib 'jsonschema' não instalada (pip install jsonschema). "
              "Validação formal do schema saltada — só correm as regras do projeto.")
        return
    schema = json.loads(caminho.read_text(encoding="utf-8"))
    try:
        try:
            import warnings
            warnings.filterwarnings("ignore")
            from jsonschema.validators import validator_for
            cls = validator_for(schema)
            cls.check_schema(schema)
        except Exception:
            from jsonschema import Draft7Validator as cls  # type: ignore
        validator = cls(schema)
        for e in sorted(validator.iter_errors(artigo), key=lambda x: list(x.path)):
            caminho_campo = "/".join(str(p) for p in e.path) or "(raiz)"
            erro(f"[schema] {caminho_campo}: {e.message}")
    except Exception as exc:  # nunca deixar a validação de schema rebentar o script
        aviso(f"Validação formal do schema saltada (lib jsonschema: {exc}). "
              "As regras do projeto correram à mesma.")


def validar_regras(artigo, slug_esperado):
    """Regras do projeto que vão além do schema."""

    # --- Obrigatórios ---
    for campo in ("title", "pilar", "tema_clinico", "autor", "resumo", "corpo_markdown"):
        if not artigo.get(campo):
            erro(f"Campo obrigatório em falta ou vazio: '{campo}'.")

    title = artigo.get("title", "")
    if title and len(title) > 70:
        erro(f"'title' tem {len(title)} ch (máx. 70).")
    if title and len(title) > 60:
        aviso(f"'title' tem {len(title)} ch — ideal <= 60.")

    # --- Slug: preservar o existente (só se passado --slug-esperado) ---
    slug = artigo.get("slug", "")
    if slug_esperado:
        if slug != slug_esperado:
            erro(f"'slug' = '{slug}' mas devia manter-se '{slug_esperado}' "
                 f"(preservar SEO). Se for intencional, garante um redirect 301.")
    if slug and not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug):
        erro(f"'slug' inválido: '{slug}' (minúsculas, hífens, sem acentos).")

    # --- Pilar ---
    pilar = artigo.get("pilar", "")
    if pilar and pilar not in PILARES:
        erro(f"'pilar' inválido: '{pilar}'. Válidos: {', '.join(sorted(PILARES))}.")

    corpo = artigo.get("corpo_markdown", "")
    resposta = artigo.get("resposta_direta", "")
    title = artigo.get("title", "")

    # --- Voz: a Dra. Cristiane é médica dentista, nunca fisioterapeuta ---
    texto_voz = f"{corpo}\n{resposta}\n{title}".lower()
    if re.search(r"\bcristiane\b.{0,40}\bfisioterapeut", texto_voz) or \
       re.search(r"\bfisioterapeut\w*\b.{0,20}\bcristiane\b", texto_voz):
        erro("A Dra. Cristiane parece ser tratada como fisioterapeuta. É médica dentista "
             "(a fisioterapia entra apenas como colaboração interdisciplinar).")

    # --- resumo ---
    resumo = artigo.get("resumo", "")
    if resumo and not (80 <= len(resumo) <= 200):
        erro(f"'resumo' tem {len(resumo)} ch (deve ser 80–200).")

    # --- resposta_direta (GEO) ---
    if resposta:
        if not (200 <= len(resposta) <= 900):
            erro(f"'resposta_direta' tem {len(resposta)} ch (deve ser 200–900).")
        amostra = re.sub(r"\s+", " ", resposta).strip()[:60].lower()
        if amostra and amostra in re.sub(r"\s+", " ", corpo).lower():
            erro("'resposta_direta' parece estar repetida no corpo. O corpo não a deve repetir.")
    else:
        aviso("'resposta_direta' vazia — recomendado para GEO (bloco citável no topo).")

    # --- corpo_markdown ---
    if corpo:
        linhas = corpo.lstrip().splitlines()
        primeira = linhas[0].strip() if linhas else ""
        if not primeira.startswith("## "):
            erro("'corpo_markdown' deve começar num '## H2' (pergunta). "
                 f"Começa por: {primeira[:50]!r}")
        if re.search(r"^#\s+\S", corpo, flags=re.MULTILINE):
            erro("'corpo_markdown' contém um H1 ('# '). O site gera o H1 a partir de 'title'.")
        if len(corpo) < 800:
            erro(f"'corpo_markdown' tem {len(corpo)} ch (mín. 800).")
        palavras = contar_palavras(corpo)
        if palavras < 1000:
            aviso(f"'corpo_markdown' tem ~{palavras} palavras — ideal >= 1000 de substância.")

        # H2 em forma de pergunta
        h2s = re.findall(r"^##\s+(.*)$", corpo, flags=re.MULTILINE)
        if not h2s:
            erro("'corpo_markdown' não tem nenhum H2.")
        for h in h2s:
            if h.strip() == h.strip().upper() and len(h.strip()) > 3:
                aviso(f"H2 em MAIÚSCULAS (normalizar): {h.strip()!r}")
            if not h.strip().endswith("?"):
                aviso(f"H2 não está em forma de pergunta: {h.strip()!r}")

        # Elementos que não devem estar no corpo
        baixo = corpo.lower()
        if re.search(r"agendar.*consulta|wa\.me|whatsapp|clique aqui|marcar consulta", baixo):
            aviso("O corpo parece conter um CTA — o CTA deve vir do campo 'cta', não do corpo.")
        if "sobre a autora" in baixo or "sobre o autor" in baixo:
            erro("O corpo contém 'Sobre a autora/o autor' — remover (o site gera).")
        if re.search(r"^##?\s*refer[êe]ncias", corpo, flags=re.MULTILINE | re.IGNORECASE):
            erro("O corpo contém uma secção 'Referências' — usar o campo 'referencias[]'.")
        if re.search(r"!\[[^\]]*\]\([^)]*\)", corpo):
            aviso("O corpo contém imagens Markdown — a capa vai em 'imagem_capa'.")
        if re.search(r"^Por\s+(?:Dra\.?\s+)?Cristiane\s+Martins", corpo, flags=re.MULTILINE):
            erro("O corpo contém a linha de autora/data — remover.")

        # Possíveis casos clínicos / pacientes inventados (anti-fabricação)
        padroes_caso = [
            (r"(?<!aos )(?<!dos )(?<!os )\b\d{1,2}\s+anos\b"
             r"(?!\s+de\s+(?:experi[êe]ncia|profiss[ãa]o|carreira|pr[áa]tica))",
             "idade específica (ex.: '6 anos')"),
            (r"\b\d{1,2}\s+anos\s+de\s+idade\b", "idade específica"),
            (r"(?:o|a|um|uma)\s+(?:paciente|doente|crian[çc]a|menin[oa]|filh[oa])\s+[A-ZÀ-Ý][a-zà-ÿ]+",
             "criança/paciente nomeado"),
            (r"\bcaso\s+(?:cl[ií]nico|real|d[eo]\s+[A-ZÀ-Ý])", "relato de caso individual"),
            (r"\b(?:recordo|lembro-me d[eo]|tive um[a]?)\s+(?:paciente|doente|crian[çc]a|[A-ZÀ-Ý][a-zà-ÿ]+)",
             "anedota de paciente"),
        ]
        for padrao, desc in padroes_caso:
            if re.search(padrao, corpo):
                aviso(f"Possível caso clínico/criança inventado/a no corpo ({desc}). "
                      "Não inventar histórias de pacientes — usar só padrões gerais da experiência.")

    # --- Referências (anti-alucinação) ---
    for i, ref in enumerate(artigo.get("referencias", []) or []):
        estado = ref.get("estado_verificacao")
        pmid = ref.get("pmid")
        doi = ref.get("doi")
        if estado == "verificada-pubmed":
            if not (pmid or doi):
                erro(f"referencias[{i}] 'verificada-pubmed' sem PMID nem DOI.")
        elif estado != "a-verificar":
            erro(f"referencias[{i}] 'estado_verificacao' inválido: {estado!r}.")
        if pmid and not re.fullmatch(r"[0-9]+", pmid):
            erro(f"referencias[{i}] PMID não numérico: {pmid!r}.")

    # --- related ---
    for r in artigo.get("related", []) or []:
        if not r.startswith("/"):
            erro(f"related '{r}' deve ser um caminho relativo a começar por '/'.")

    # --- cta ---
    cta = artigo.get("cta")
    if cta and cta not in CTAS:
        erro(f"'cta' inválido: {cta!r}. Válidos: {', '.join(sorted(CTAS))}.")
    if not cta:
        aviso("'cta' não definido — recomendado (ex.: 'agendar-consulta').")

    # --- flags ---
    if artigo.get("draft") is not True:
        aviso("'draft' devia ser true (importar sempre como rascunho).")
    if not artigo.get("data_atualizacao"):
        aviso("'data_atualizacao' vazia — preencher dá sinal de frescura ao SEO/GEO.")

    # --- seo ---
    seo = artigo.get("seo") or {}
    mt = seo.get("meta_titulo")
    md = seo.get("meta_descricao")
    if mt and len(mt) > 60:
        erro(f"seo.meta_titulo tem {len(mt)} ch (máx. 60).")
    if md and not (150 <= len(md) <= 160):
        erro(f"seo.meta_descricao tem {len(md)} ch (deve ser 150–160).")


def main():
    ap = argparse.ArgumentParser(description="Valida um JSON de artigo da Dra. Cristiane Martins.")
    ap.add_argument("ficheiro", help="Caminho do JSON do artigo.")
    ap.add_argument("--slug-esperado", default="",
                    help="Slug que deve manter-se (usar ao migrar um artigo existente). "
                         "Por defeito vazio (não verifica).")
    args = ap.parse_args()

    caminho = Path(args.ficheiro)
    if not caminho.exists():
        print(f"ERRO: ficheiro não encontrado: {caminho}")
        sys.exit(2)

    try:
        artigo = json.loads(caminho.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"ERRO: JSON inválido — {e}")
        sys.exit(2)

    pasta_base = caminho.resolve().parent
    if not (pasta_base / SCHEMA_PADRAO).exists() and (pasta_base.parent / SCHEMA_PADRAO).exists():
        pasta_base = pasta_base.parent

    validar_schema(artigo, pasta_base)
    validar_regras(artigo, args.slug_esperado or None)

    print("=" * 60)
    print(f"Validação: {caminho.name}")
    print("=" * 60)
    if ERROS:
        print(f"\n❌ {len(ERROS)} ERRO(S) — corrigir antes de colar no /admin:")
        for m in ERROS:
            print(f"  • {m}")
    if AVISOS:
        print(f"\n⚠️  {len(AVISOS)} AVISO(S) — rever:")
        for m in AVISOS:
            print(f"  • {m}")
    if not ERROS and not AVISOS:
        print("\n✅ Tudo certo. Pronto a colar no /admin.")
    elif not ERROS:
        print("\n✅ Sem erros bloqueantes. Rever os avisos e está pronto.")

    print()
    sys.exit(1 if ERROS else 0)


if __name__ == "__main__":
    main()
