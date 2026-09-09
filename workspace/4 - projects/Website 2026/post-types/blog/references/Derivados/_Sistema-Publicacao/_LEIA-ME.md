# _Sistema-Publicação — motor da Fase 2 (Derivados)

Absorvido do antigo vault "Artigos - Cristiane Martins" em 2026-06-23. É o **motor de publicação** da Fase 2 (blog/carrossel), subordinado ao canon científico.

## Hierarquia de verdade
1. **Canon científico** — `Método Respira e Cresce/` (núcleo + 5 Linhas + protocolo). É a única verdade.
2. **Protocolo operacional** — `Método Respira e Cresce/Protocolo/Leitura e Confrontação.md` (manda em caso de dúvida).
3. **Este motor** — só gera **rascunhos derivados** a partir de uma nota canónica já sincronizada. Nunca cria verdade nova.

## Taxonomia canónica (importante)
O campo `pilar` dos artigos usa as **5 Linhas RC360**: `respiracao` · `sono` · `crescimento-facial` · `sinais-comportamento` · `postura` (ver `Método Respira e Cresce/Linhas/`).

⚠️ Alguns ficheiros copiados (`prompt-gerador-artigos-RC360.md`, `url-map-schema-org.md`, `instrucoes-projeto.md`) ainda mencionam os **6 slugs técnicos do site ao vivo** (`cavidade-oral`, `crescimento-craniofacial`, `funcao-oral`, `desenvolvimento-integrado`, etc.). Esses são os slugs de **importação no /admin**, NÃO a taxonomia editorial. Mapear na publicação; confirmar com o site (ver tarefa em aberto).

## Ficheiros
- `modelo-artigo-rc360.schema.json` — contrato (enum = 5 Linhas; `faixa`, `frase_ancora`, `cta_funil`).
- `prompt-gerador-artigos-RC360.md`, `instrucoes-projeto.md`, `router-fluxo.md` — prompts/fluxo.
- `camada-conformidade-voz.md`, `regua-voz-autoridade.md` — guarda-corpos de voz.
- `url-map-schema-org.md`, `seo-local.md`, `REDIRECTS-pendentes.md` — publicação/SEO.
- `scripts/validar-artigo.py`, `scripts/gerar-capa.py` — validação e capa. (validar-artigo.py escrito para o schema antigo — atualizar.)

## Saídas
Uma pasta por slug em `Derivados/{slug}/` com `artigo-{slug}.json` (+ carrossel quando existe). Atualizar `Derivados/Índice por Artigo-Fonte.md` ao fechar a Fase 2.
