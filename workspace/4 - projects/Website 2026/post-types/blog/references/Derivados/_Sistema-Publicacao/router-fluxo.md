# Router de fluxo — Cristiane Martins / Artigos

> Como funciona este projeto: gerar artigos do blog da **Clínica Cristiane Martins Kids & Family** em JSON, prontos a colar no `/admin`.

## Gatilhos

> **Nota:** escrever os gatilhos SEM barra inicial (ex.: `rever:`, não `/rever`). Se a mensagem começar por `/palavra`, a app tenta encontrar uma *habilidade registada*. Estes gatilhos são convenções do projeto — usar o formato `palavra:` ou pedir em linguagem natural.

- `tema: <pergunta>` → proponho ângulo + pilar + keywords de Oliveira de Azeméis (sem gerar ainda).
- `rever: <slug-ou-url>` → busco o artigo (publicado ou um JSON em `Artigos Blog/`), audito-o e devolvo um **relatório** (problemas + sugestões). **Não gero JSON** — é só diagnóstico. A auditoria verifica sempre:
  1. **Fidelidade (anti-alucinação):** crianças/pacientes inventados, estatísticas sem fonte, referências sem PMID/DOI real, promessas de cura.
  2. **Conformidade com o contrato:** campos obrigatórios, `resposta_direta` (200–900, não repetida), corpo a começar em `## H2`, sem H1/CTA/autora/refs no corpo.
  3. **GEO:** H2 em forma de pergunta, FAQ, bloco citável no topo.
  4. **SEO de Oliveira de Azeméis:** âncora natural; sem canibalização; `title`/`resumo`/`slug` corretos; preservar slug se já estiver publicado.
  5. **Voz e método:** pt-PT, Dra. Cristiane = médica dentista, abordagem integrativa/funcional, interdisciplinaridade como colaboração.
  6. **Links internos:** `related` aponta para caminhos que existem.
  Depois do relatório, se aprovares as mudanças → `gerar:`.
- `gerar:` → devolvo **1 objeto JSON** conforme `modelo-artigo.schema.json`, pronto a colar no `/admin`. Valido com `validar-artigo.py` antes de entregar.
- `capa:` → dou o comando do `gerar-capa.py` com o `prompt_geracao` desse artigo.

## Fonte de verdade
- **Contrato:** `modelo-artigo.schema.json` (formato exato do JSON).
- **Regras de conteúdo, voz, SEO local e GEO:** `prompt-gerar-artigo.md`.
- **Pesquisa de evidência:** skill `clinical-research-dra-cris` + MCP do PubMed (e SciELO/Cochrane).
- **Saídas:** os JSON gerados ficam em `Artigos Blog/artigo-<slug>.json`.

## Regras inegociáveis (resumo)
- Português europeu (pt-PT). Dra. Cristiane Martins é **médica dentista** (nunca fisioterapeuta/ORL/médico de outra especialidade).
- Abordagem **integrativa e funcional** (respiração, sono, postura, crescimento); interdisciplinaridade com ORL/miofuncional/fisioterapia é **colaboração**, não a sua função.
- **Nunca inventar** referências/PMID/DOI/números/método com nome próprio. Referência só `verificada-pubmed` com PMID/DOI real; senão `a-verificar`.
- **Nunca inventar casos clínicos / crianças** (nome, idade, resultados). Só padrões gerais da experiência; casos reais apenas com consentimento dos pais e anonimizados.
- Ancorar **Oliveira de Azeméis** quando natural (SEO local), sem forçar.
- GEO: `resposta_direta` citável + H2 em pergunta + FAQ. Não canibalizar artigos existentes.

## Fluxo ponta a ponta
1. `tema: ...` → afinamos ângulo/pilar.
2. `gerar:` → copio o JSON para `Artigos Blog/artigo-<slug>.json` (ou dou no chat).
3. `capa:` → corro/forneço `uv run gerar-capa.py "<prompt>" --slug <slug>`.
4. No site: `/admin` → colar JSON → rever/editar → carregar a capa (com alt + legenda) → **Publicar** (o site reconstrói-se sozinho).

## Migrar/atualizar um artigo já existente (por cima)
Para reeditar artigos existentes no novo formato, **mantém o slug original** no JSON.
- Ao colar no `/admin`, se o slug já existir, o painel pergunta: **«Atualizar o existente»** ou **«Criar novo»**.
- **Atualizar** → migra por cima, **preservando o slug, a capa e o estado publicado** (sem perder SEO). Se estava publicado, o site **republica-se automaticamente**.
- Se o `/admin` NÃO suportar substituição por slug → criar slug novo **+ redirect 301** do antigo para o novo (ver `REDIRECTS-pendentes.md`).
- Valida sempre com `validar-artigo.py` antes de colar (passar `--slug-esperado <slug>` ao migrar).
