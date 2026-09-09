---
type: Project Workflow
title: Website 2026 — Processo de Produção
description: Processo em quatro fases para transformar arquitetura em páginas wireframe, regras visuais e implementação.
status: active
owner: Pedro Raimundo
tags: [website, workflow, sitemap, wireframe, design, implementation]
created: 2026-08-24
updated: 2026-08-24
---

# Website 2026 — Processo de Produção

## Princípio

Separar quatro decisões que costumavam aparecer misturadas:

```text
Sitemap → Wireframe em Markdown → Style Guide / Design MD → Implementação visual
```

Cada fase pode informar a seguinte, mas nenhuma deve substituir a outra.

## Fase 1 — Sitemap

**Pergunta:** que páginas existem e como são estruturadas?

Arquivo principal: [`../sitemap/sitemap.md`](../../sitemap/sitemap.md)

O sitemap define:

- shell global: `header`, `top`, `content`, `bottom`, `footer`;
- famílias de template e suas macro-seções;
- páginas canónicas, caminhos, pais e intenções;
- sequência de seções de cada página, sem copy final;
- `sectionType` e `layoutId` possíveis para orientar o wireframe;
- camada separada de recursos/post types: blog, testemunhos e case studies.

O sitemap não deve conter texto final, markup Gutenberg, CSS ou detalhes clínicos extensos.

## Fase 2 — Wireframe em Markdown

**Pergunta:** o que cada página precisa comunicar e como cada seção deve ser preenchida?

Fonte: `../wireframes/`

Cada página canónica tem um Markdown próprio. Cada seção declara:

- `sectionType`: função editorial;
- `layoutId`: arranjo visual;
- propósito, tagline, headline e texto de apoio;
- cards, passos, listas, imagem ou outros content units;
- display notes, CTA e comportamento responsivo;
- ligações para hub, serviços, recursos, lead magnets e Contacto.

O wireframe é conteúdo estruturado e direção de display. Não é export Gutenberg.

## Fase 3 — Style Guide / Design MD

**Pergunta:** quais são as regras visuais que tornam as páginas consistentes?

Arquivo principal: [`../style-guide/design.md`](../../style-guide/design.md)

O Design MD deve registrar:

- cores semânticas e onde cada uma é usada;
- famílias tipográficas, pesos e escala;
- largura de container, spacing, grids e breakpoints;
- geometria de cards, botões, bordas, sombras e estados;
- classes GenerateBlocks existentes e classes propostas;
- regras responsive e decisões de acessibilidade.

O Style Guide é específico deste website. Regras de processo e layouts genéricos ficam documentados em `../skills/`.

## Fase 4 — Implementação visual

**Pergunta:** como transformar o wireframe aprovado em uma página real?

Destino: WordPress/GenerateBlocks.

Antes de implementar:

1. confirmar o sitemap e o template;
2. confirmar o wireframe e as conexões;
3. consultar o Design MD e reutilizar classes existentes;
4. escolher uma combinação `sectionType + layoutId`;
5. implementar com blocos nativos sempre que possível;
6. testar container, colunas, espaçamento, mobile, CTA, semântica e acessibilidade;
7. atualizar `productionStatus`, o log e eventuais desvios no wireframe.

## Camadas do projeto

| Camada | Local | Contém |
| --- | --- | --- |
| Arquitetura | `../sitemap/` | Sitemap, templates, macro-seções e planejamento SEO. |
| Wireframes | `../wireframes/` | Conteúdo e display de cada página canónica. |
| Design do projeto | `../style-guide/` | Design MD e regras visuais da clínica. |
| Referências técnicas | `../references/` | Exports, workbooks e capturas usadas como referência; não são páginas publicáveis. |
| CMS/post types | `../cms/` | Blog, testemunhos e case studies, fora da árvore estrutural de páginas. |
| Implementação | WordPress/GenerateBlocks | Resultado visual posterior à aprovação das camadas anteriores. |

## Regra de mudança

- Nova página ou mudança de template: atualizar o Sitemap primeiro.
- Nova seção ou mudança de sequência: atualizar o Sitemap e o wireframe.
- Nova combinação visual: registrar o `layoutId` em `../sitemap/section-layouts.md` e validar no Design MD.
- Mudança de cor, fonte, classe ou grid: atualizar o Design MD antes de repetir a solução.
- Conteúdo de blog, testemunho ou caso: manter em `../cms/`, salvo decisão explícita de criar uma URL estrutural.
