---
type: Website Skills Index
title: Website 2026 — Skills do Processo
description: Instruções locais para interpretar e executar cada fase de produção do website.
status: active
owner: Pedro Raimundo
tags: [website, skills, workflow]
created: 2026-08-24
updated: 2026-08-24
---

# Skills do Processo

Esta pasta contém instruções específicas do projeto. Não são skills instaladas no Codex: são contratos locais para orientar a criação e a revisão dos documentos do Website 2026 e podem ser incorporadas depois ao plugin Context/Website.

Cada skill ativa vive numa pasta própria e usa `SKILL.md` como documento principal. Versões antigas ou duplicadas ficam em [`archive/`](archive/README.md).

## Skills necessárias

| Documento | Responsabilidade | Fonte principal |
| --- | --- | --- |
| [Site workflow](site-workflow/SKILL.md) | Ordem das quatro fases e regras de passagem | Todas as camadas |
| [Sitemap skill](sitemap/SKILL.md) | Árvore de páginas, templates, secções, briefings e `sectionType` | `../sitemap/` |
| [Wireframe skill](wireframe/SKILL.md) | Expansão de cada página em Markdown, conteúdo e display | `../wireframes/` |
| [Style Guide skill](style-guide/SKILL.md) | Design MD, tokens, classes e regras visuais | `../style-guide/` |
| [Post Types skill](post-types/SKILL.md) | Registos de blog, testemunhos e case studies | `../post-types/` |
| [Implementation skill](implementation/SKILL.md) | Handoff do documento aprovado para WordPress/GenerateBlocks | WordPress |

## Referências operacionais

Estas referências pertencem à skill local porque descrevem contratos reutilizáveis, e não conteúdo específico de uma página:

- [Section types](sitemap/references/section-types.md): função editorial, briefing, unidades obrigatórias e limites de conteúdo;
- [Section Layouts](sitemap/references/section-layouts.md): árvores de blocos, layouts estruturais e propriedades que o Wireframe pode escolher; os prints antigos estão arquivados.

## Regra de separação

- `sitemap/` decide o que existe e a estrutura macro.
- `wireframes/` desenvolve o conteúdo e a direção de display das páginas.
- `style-guide/` registra o Design MD específico da clínica.
- `post-types/` mantém conteúdos repetíveis e tipos de post.
- `references/` guarda exemplos e exports, sem substituir os documentos canónicos.
