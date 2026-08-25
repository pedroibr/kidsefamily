---
type: Log
title: Website 2026 Sitemap Log
description: Registo das alterações à arquitetura do website.
status: active
owner: Pedro Raimundo
tags: [website, sitemap, log]
created: 2026-08-24
updated: 2026-08-24
---

# Sitemap Log

## 2026-08-24

- Criada a separação local `sitemap/`, com sitemap ativo, templates e planeamento SEO no mesmo nível.
- V1 e V2 foram movidos para `sitemap/archive/`; duplicados também ficam identificados no arquivo.
- Os catálogos de tipos e layouts foram retirados do sitemap e passaram para `skills/references/`, onde funcionam como contratos operacionais.
- O Sitemap V4 foi reduzido à árvore de páginas, templates atribuídos, `sectionType` e briefings de site, página e secção.
- Os layouts foram separados da arquitetura editorial: o Wireframe consulta `skills/sitemap/references/section-layouts.md` e escolhe o `layoutId` adequado.
- Os documentos SEO antigos foram movidos para `sitemap/archive/seo-legacy-20260824/`.
- O catálogo de templates voltou para `sitemap/templates.md`; o template institucional foi simplificado para `pages`, com `header → top → content → footer`.
