---
type: Website Skill
title: Wireframe Skill
description: Expande o sitemap em documentos Markdown de páginas, sem serializar Gutenberg.
status: active
owner: Pedro Raimundo
tags: [website, skill, wireframe, pages]
created: 2026-08-24
updated: 2026-08-24
---

# Wireframe Skill

## Objetivo

Transformar cada página já aprovada no sitemap em um documento Markdown que combine conteúdo, hierarquia, layout e conexões.

## Deve fazer

- criar um arquivo para cada página canónica em `../wireframes/`;
- respeitar `templateId`, a sequência de seções e a intenção do sitemap;
- consultar [`../sitemap/references/section-types.md`](../sitemap/references/section-types.md) para confirmar a função editorial;
- consultar [`../sitemap/references/section-layouts.md`](../sitemap/references/section-layouts.md) para escolher o `layoutId` mais adequado ao briefing do Sitemap;
- expandir cada seção com tagline, headline, supporting text, content units, CTA, display notes e conexões;
- indicar `sectionType` herdado do Sitemap e o `layoutId` escolhido para a apresentação;
- descrever o display em linguagem simples: colunas, cards, passos, listas, imagem e comportamento mobile;
- marcar produção como `notStarted`, `draft`, `review`, `inProgress`, `published` ou `blocked`.

## Não deve fazer

- inventar uma página ausente do sitemap;
- alterar a ordem macro sem atualizar o sitemap;
- misturar CSS ou markup Gutenberg no Markdown;
- preencher prova, claims clínicos ou dados de equipe sem fonte aprovada.

## Saída

Um wireframe Markdown aprovado, pronto para consulta do Style Guide e posterior implementação.

## Estrutura simples de uma secção

Cada secção mantém o formato já usado nas páginas: `Section type`, `Layout`, `Tagline`, `Title`, `Content`, `Display` e `CTA` quando aplicável. A árvore de blocos e as propriedades técnicas ficam na referência de layouts; não devem ser duplicadas no wireframe.
