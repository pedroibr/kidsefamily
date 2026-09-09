---
type: Website Skill
title: Sitemap Skill
description: Define a arquitetura do site antes da criação dos wireframes.
status: active
owner: Pedro Raimundo
tags: [website, skill, sitemap, seo]
created: 2026-08-24
updated: 2026-08-24
---

# Sitemap Skill

## Objetivo

Estabelecer páginas, tipos de página, templates, macro-seções, intenção primária e ligações antes de escrever o conteúdo detalhado.

## Deve fazer

- manter um inventário de URLs canónicas;
- ligar cada página a um `templateId` de [`../sitemap/templates.md`](../../sitemap/templates.md);
- usar os arranjos de [`../sitemap/section-layouts.md`](../sitemap/references/section-layouts.md) sem confundir layout com função editorial;
- definir `header`, `top`, `content`, `bottom` e `footer` quando aplicável;
- dar a cada seção um `sectionType`, `layoutId`, breve prompt/briefing, conteúdo obrigatório e próximo passo;
- manter o planejamento SEO junto da arquitetura em `../sitemap/SEO/`;
- separar páginas estruturais de post types do CMS;
- registrar prioridade, status e conexões.

## Não deve fazer

- escrever copy final ou markup Gutenberg;
- criar páginas por sintoma sem intenção ou oferta distinta;
- duplicar URLs para a mesma intenção;
- tratar blog, testemunho ou case study como página estrutural automaticamente.

## Saída

Atualizar [`../sitemap/sitemap.md`](../../sitemap/sitemap.md) e, quando necessário, [`../sitemap/templates.md`](../../sitemap/templates.md) antes de criar ou alterar um wireframe.
