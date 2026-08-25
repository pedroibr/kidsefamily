---
type: Website Skill
title: Sitemap Skill
description: Define a árvore, os templates, os tipos de secção e os briefings antes da criação dos wireframes.
status: active
owner: Pedro Raimundo
tags: [website, skill, sitemap, seo]
created: 2026-08-24
updated: 2026-08-24
---

# Sitemap Skill

## Objetivo

Estabelecer a árvore de páginas, os tipos de página, os templates, os `sectionType`, os briefings e as ligações antes de escrever o conteúdo detalhado.

## Deve fazer

- manter um inventário de URLs canónicas;
- ligar cada página a um `templateId` de [`../../sitemap/templates.md`](../../sitemap/templates.md);
- usar [`references/section-types.md`](references/section-types.md) para nomear a função editorial;
- dar a cada página um briefing e a cada secção um `sectionType`, briefing curto, conteúdo obrigatório e próximo passo;
- separar páginas estruturais dos tipos de post em `post-types/`;
- registrar prioridade, status e conexões.

## Não deve fazer

- escrever copy final ou markup Gutenberg;
- criar páginas por sintoma sem intenção ou oferta distinta;
- duplicar URLs para a mesma intenção;
- tratar blog, testemunho ou case study como página estrutural automaticamente.

## Saída

Atualizar [`../../sitemap/sitemap.md`](../../sitemap/sitemap.md) e, quando necessário, [`../../sitemap/templates.md`](../../sitemap/templates.md) antes de criar ou alterar um wireframe.

O Sitemap escolhe o `sectionType` e regista os briefings. O Wireframe consulta [`references/section-layouts.md`](references/section-layouts.md), escolhe o `layoutId` mais adequado e combina a estrutura com o conteúdo e as propriedades necessárias. O layout não substitui o briefing editorial.
