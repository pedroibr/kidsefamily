---
type: Visual Section Reference
title: Section 001 — Hero com elemento opcional
description: Hero/intro com eyebrow, headline, descrição breve e elemento configurável, como formulário, botão ou nenhum elemento.
status: approved-reference
owner: Pedro Raimundo
sectionReference: section-001
sectionType: hero section
created: 2026-08-24
updated: 2026-08-24
tags: [website, section, hero, intro, form, button]
---

# Section 001 — Hero com elemento opcional

## O que esta secção resolve

Apresenta uma promessa principal da página e conduz a pessoa para uma primeira ação. É uma secção de abertura, normalmente usada depois do header.

## Estrutura

```text
section
└── inner container
    └── content block
        ├── eyebrow / tagline
        ├── headline
        ├── brief description
        └── optional element
            ├── none
            ├── form
            └── button
```

## Propriedades configuráveis

| Propriedade | Valores observados | Efeito |
| --- | --- | --- |
| `textAlignment` | `left`, `center`, `right` | Alinha eyebrow, headline, descrição e elemento. |
| `background` | `none`, `color`, `image`, `video` | Define o fundo da secção; a imagem ou o vídeo pode exigir overlay. |
| `element` | `none`, `form`, `button` | Escolhe o elemento de conversão ou deixa apenas o conteúdo textual. |
| `elementPosition` | `below-description`, `inline`, `side` | Define a relação do elemento com o texto quando o design permitir. |
| `contentWidth` | `narrow`, `medium`, `wide` | Controla a largura de leitura do bloco de texto. |
| `sectionHeight` | `content`, `medium`, `large` | Define o respiro vertical sem fixar uma altura rígida. |

## Conteúdo esperado

- `eyebrow/tagline`: contexto curto, normalmente em uma linha;
- `headline`: promessa ou ideia principal, normalmente em 1–3 linhas;
- `description`: uma breve explicação de apoio, normalmente 1–3 frases;
- `element`: formulário, botão ou ausência de elemento, conforme o objetivo da página.

## Variações registradas

- [Elemento formulário](section-001-variant-element-form.png): formulário selecionado e conteúdo centralizado.
- [Formulário simples](section-001-variant-form.png): formulário abaixo da descrição.
- [Elemento botão](section-001-variant-button.png): botão como ação principal, com conteúdo centralizado.
- [Botão alinhado à esquerda](section-001-variant-button-left.png): mesma estrutura com texto e ação alinhados à esquerda.

## Como usar no wireframe

```text
Section type: hero section
Visual reference: section-001 — Hero com elemento opcional
Tagline: [contexto]
Title: [promessa principal]
Content: [descrição breve]
Display: conteúdo centralizado; fundo sem imagem; elemento do tipo botão abaixo da descrição.
CTA: [texto do botão]
```

As propriedades definem possibilidades do padrão; não devem ser preenchidas todas em todos os usos. O wireframe escolhe apenas as que forem relevantes para a página.
