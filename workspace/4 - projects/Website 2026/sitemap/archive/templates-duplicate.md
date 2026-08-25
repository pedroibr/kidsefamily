---
type: Website Template Catalog
title: Website 2026 — Templates de Página
description: Contratos dos templates macro usados pelas páginas e pelos tipos de conteúdo do website.
status: active
owner: Pedro Raimundo
tags: [website, sitemap, templates]
created: 2026-08-24
updated: 2026-08-24
---

# Templates de Página

Este documento define o esqueleto macro de cada tipo de página. Não define copy, CSS ou markup GenerateBlocks. A página concreta deve ser listada no [sitemap ativo](../sitemap.md) antes de receber um wireframe.

## Shell global

Todos os templates podem combinar, quando fizer sentido:

`header` · `top` opcional · `content` · `bottom` opcional · `footer`

`header` e `footer` são globais. `top` e `bottom` só entram quando têm função clara.

## Template contracts

| `templateId` | Macro-seções | Uso | Deve conter | Não deve conter |
| --- | --- | --- | --- | --- |
| `institutional` | `header → content → footer` | Início, Sobre, Contacto e outras páginas institucionais | Contexto, proposta, prova institucional ou próximo passo | Sequência comercial de serviço sem contexto institucional |
| `hub-directory` | `header → top? → content → bottom? → footer` | Hubs de Especialidades, Blog e futuras listagens | Introdução, filtros/listagem, caminhos e links para páginas-filhas | Texto completo de cada página-filho ou duplicação de intenção |
| `service-main` | `header → top? → content → bottom? → footer` | Página principal de uma especialidade | Problema/necessidade, público, benefícios, método, FAQ e CTA | Subserviços inteiros tratados como páginas independentes dentro da mesma URL |
| `service-sub` | `header → top? → content → bottom? → footer` | Subserviço por audiência, problema ou modalidade distinta | Recorte específico, sinais, adequação, método e ligação ao serviço-mãe | Conteúdo genérico que não justifica uma intenção própria |
| `campaign-landing` | `header? → top? → content → bottom?` | Lead magnet, campanha ou entrada de aquisição | Uma promessa, mecanismo, prova/clareza e uma ação principal | Navegação ampla ou várias ações concorrentes |
| `post-single` | `header → content → footer` | Artigo, testemunho ou case study publicado pelo CMS | Conteúdo editorial estruturado, metadados e links contextuais | Ser tratado como página estrutural sem intenção própria no sitemap |

## Regras de aplicação

1. Uma página usa um único `templateId`.
2. O template define macro-seções; cada seção recebe `sectionType` e `layoutId` no sitemap e no wireframe.
3. Uma alteração de shell ou de contrato exige atualização deste documento antes do wireframe.
4. Posts do CMS só se tornam páginas estruturais quando forem adicionados explicitamente ao sitemap.
