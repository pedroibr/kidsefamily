---
type: Project
title: Website Sitemap — Arquitetura V3
description: Mapa canónico de templates, macro-seções, páginas e sequências de seção do Website 2026.
status: active
owner: Pedro Raimundo
tags: [website, sitemap, templates, information-architecture]
created: 2026-08-24
updated: 2026-08-24
---

# Website Sitemap — Arquitetura V3

## Purpose

Este sitemap define a arquitetura do website antes do wireframe: quais páginas existem, que template usam e quais macro-seções devem aparecer em cada uma. Não contém copy final, markup Gutenberg ou detalhes clínicos; esses elementos entram nos wireframes em `../wireframes/`.

Este é um duplicado histórico da versão V3. Consulte o [sitemap ativo](../sitemap.md) e o [arquivo de versões](README.md) para as referências atuais.

## Process Position

```text
01 Sitemap → 02 Wireframe em Markdown → 03 Design MD / Style Guide → 04 Implementação visual
```

| Phase | Source of truth | Output |
| --- | --- | --- |
| Sitemap | `sitemap.md` | Templates, páginas, macro-seções e sequência estrutural. |
| Wireframe | `../wireframes/` | Um Markdown por página canónica, com conteúdo, display e ligações. |
| Style Guide | `../style-guide/design.md` | Cores, tipografia, grids, componentes, tokens e classes do projeto. |
| Implementation | WordPress/GenerateBlocks | Página visual construída a partir do sitemap, wireframe e Design MD aprovados. |

As instruções locais atuais estão em [`../../skills/`](../../skills/). O workbook editorial original está em [`../../references/website-section-types.xlsx`](../../references/website-section-types.xlsx).

## Global Template Shell

Todos os templates são combinações opcionais destas macro-seções:

| Macro section | Uso |
| --- | --- |
| `header` | Logo, navegação principal, links utilitários e CTA global. |
| `top` | Breadcrumb, faixa de contexto, navegação secundária ou contexto de campanha, quando necessário. |
| `content` | Sequência de sections específica da página. |
| `bottom` | CTA de fecho, links relacionados ou recurso de conversão, quando necessário. |
| `footer` | Navegação, morada, contacto, legal e redes sociais. |

O `header` e o `footer` são globais. `top` e `bottom` só entram quando têm uma função clara; não são obrigatórios em todas as páginas.

## Template Types

| `templateId` | Macro sequence | Page types | Rules |
| --- | --- | --- | --- |
| `institutional` | `header → content → footer` | Início, Sobre, Contacto, Equipa | Conteúdo institucional ou de conversão com navegação global. |
| `hub-directory` | `header → top? → content → bottom? → footer` | Especialidades, Blog, hubs futuros | Lista, organiza e encaminha; não substitui páginas-filhas. |
| `service-main` | `header → top? → content → bottom? → footer` | Main services | Explica uma área comercial e distribui para subserviços ou próximo passo. |
| `service-sub` | `header → top? → content → bottom? → footer` | Subservices | Foca uma audiência, problema, modalidade ou percurso distinto. |
| `campaign-landing` | `header? → top? → content → bottom?` | Lead magnets e campanhas | Reduz distrações e conduz a uma ação principal; footer pode ser omitido. |

Blog posts, testemunhos e case studies não são páginas estruturais desta árvore. São recursos/post types com templates próprios quando houver necessidade de URL pública.

## Section Catalog

O sitemap usa `sectionType` para indicar a função da seção e `layoutId` para indicar o arranjo visual. Os dois valores são independentes.

| `sectionType` | O que deve definir no sitemap | Layouts iniciais permitidos |
| --- | --- | --- |
| `hero section` | Promessa principal e primeiro CTA | `full-width-intro`, `centered-intro`, `split-text-media` |
| `main benefits section` | 3–4 benefícios ou mudanças observáveis | `three-card-grid`, `split-text-media` |
| `why choose us section` | Diferenciação ou critérios de escolha | `comparison-columns`, `three-card-grid` |
| `product/service list section` | Serviços, caminhos ou ofertas relacionadas | `list-with-detail`, `three-card-grid`, `four-card-grid` |
| `who is this for section` | Audiências, situações ou sinais reconhecíveis | `three-card-grid`, `four-card-grid` |
| `methodology section` | Etapas ordenadas de avaliação, cuidado ou contacto | `vertical-steps`, `steps-plus-media` |
| `about section` | Identidade, missão, visão ou contexto | `full-width-intro`, `split-text-media` |
| `team section` | Pessoas, função e credenciais aprovadas | `three-card-grid`, `media-gallery` |
| `faq section` | Dúvidas e objeções reais | `accordion-list` |
| `testimonial section` | Prova autorizada e contextualizada | `testimonial-carousel`, `three-card-grid` |
| `case study section` | Contexto, percurso e resultado observado | `case-study-feature`, `split-text-media` |
| `blog list section` | Artigos por cluster ou intenção | `list-with-detail`, `four-card-grid` |
| `in page cta section` | Próximo passo específico da página | `centered-intro`, `cta-band` |
| `map/contact section` | Morada, mapa e ação externa | `map-contact` |

Os catálogos atuais de tipos e layouts estão em [`../../skills/sitemap/references/`](../../skills/sitemap/references/).

## Page Inventory

Cada linha estabelece uma página, o template e a sequência macro. O conteúdo detalhado será desenvolvido no Markdown correspondente em `../wireframes/`.

### Institutional pages

| Page | Canonical path | Template | Section sequence | Goal | Status |
| --- | --- | --- | --- | --- | --- |
| Início | `/` | `institutional` | `hero → comparison → pathways → belief → methodology` | consideration | `implemented-v1` |
| Sobre | `/sobre/` | `institutional` | `hero → about → belief → team` | consideration | `inProgress` |
| Contacto | `/contacto/` | `institutional` | `hero → methodology → map/contact` | conversion | `inProgress` |

### Hub pages

| Page | Canonical path | Template | Section sequence | Goal | Status |
| --- | --- | --- | --- | --- | --- |
| Especialidades | `/especialidades/` | `hub-directory` | `intro → service list → pathways → cta` | consideration | `notStarted` |
| Blog | `/blog/` | `hub-directory` | `intro → blog list → categories → cta` | awareness | `notStarted` |

### Main service pages

| Page | Canonical path | Template | Section sequence | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Odontopediatria | `/especialidades/odontopediatria/` | `service-main` | `hero → who-is-this-for → benefits → methodology → faq → cta` | high | `inProgress` |
| ATM e dor orofacial | `/especialidades/dtm-dor-orofacial/` | `service-main` | `hero → who-is-this-for → signs/benefits → methodology → faq → cta` | high | `inProgress` |
| Ortodontia | `/especialidades/ortodontia/` | `service-main` | `hero → who-is-this-for → service list → methodology → faq → cta` | medium | `notStarted` |
| Sono, respiração e roncopatia | `/especialidades/sono-respiracao-roncopatia/` | `service-main` | `hero → scope → methodology → faq → cta` | medium | `notStarted` |
| Medicina dentária geral e cuidado adulto | `/especialidades/medicina-dentaria-geral-adultos/` | `service-main` | `hero → benefits → service list → continuity → faq → cta` | medium | `notStarted` |
| Implantologia e reabilitação oral | `/especialidades/implantologia-reabilitacao-oral/` | `service-main` | `hero → who-is-this-for → methodology → options → faq → cta` | medium | `notStarted` |
| Estética dentária e restauração | `/especialidades/estetica-dentaria-restauracao/` | `service-main` | `hero → principles → options → methodology → faq → cta` | medium | `notStarted` |

### Subservice pages

| Page | Canonical path | Template | Section sequence | Parent | Status |
| --- | --- | --- | --- | --- | --- |
| Respiração oral infantil | `/especialidades/respiracao-oral-infantil/` | `service-sub` | `hero → who-is-this-for → signs → methodology → faq → cta` | Odontopediatria | `inProgress` |
| Ortodontia infantil e desenvolvimento | `/especialidades/ortodontia-infantil-desenvolvimento/` | `service-sub` | `hero → who-is-this-for → benefits → methodology → faq → cta` | Ortodontia | `notStarted` |
| Ortodontia e alinhadores transparentes para adultos | `/especialidades/ortodontia-alinhadores-adultos/` | `service-sub` | `hero → who-is-this-for → comparison → methodology → faq → cta` | Ortodontia | `notStarted` |

Ortodontia funcional, Implantes dentários e Facetas dentárias permanecem dentro das páginas principais até que a intenção, oferta e capacidade justifiquem uma subpágina própria.

### Campaign landing pages

| Page | Canonical path | Template | Section sequence | Related page | Status |
| --- | --- | --- | --- | --- | --- |
| Avaliação Respiração Oral Infantil | `/avaliacao-respiracao-oral-infantil/` | `campaign-landing` | `hero → benefits → how-it-works → faq → cta` | Respiração oral infantil | `planned` |
| Primeira Consulta de Odontopediatria | `/primeira-consulta-odontopediatria/` | `campaign-landing` | `hero → who-is-this-for → how-it-works → faq → cta` | Odontopediatria | `planned` |
| Mapa de Sinais de Dor e Função Mandibular | `/mapa-sinais-dor-funcao-mandibular/` | `campaign-landing` | `hero → benefits → how-it-works → faq → cta` | ATM e dor orofacial | `planned` |

## Resource / Post-Type Layer

Estes grupos ficam fora do sitemap de páginas, mas podem ter templates de publicação e páginas de hub:

| Resource type | Storage in this project | Primary role |
| --- | --- | --- |
| Blog posts | `../cms/blog/` | Awareness, education and internal links to services. |
| Testimonials | `../cms/testimonials/` | Reusable proof, subject to permission and context. |
| Case studies | `../cms/case-studies/` | Structured stories of problem, process and observed outcome. |

Um recurso só entra como URL pública quando existir intenção própria, conteúdo suficiente e uma decisão de indexação. Caso contrário, permanece como registro reutilizável.

## Sitemap Rules

1. O sitemap define páginas, templates e macro-seções; não redige copy.
2. O wireframe nunca deve criar uma página que não esteja aqui.
3. Uma nova seção deve ser registrada no catálogo antes de ser usada repetidamente.
4. `sectionType` e `layoutId` devem ser sempre declarados juntos no wireframe.
5. O template define macro-seções; o layout define colunas e arranjo interno.
6. Uma alteração de intenção, template ou sequência exige atualização deste documento antes da implementação.
