---
type: Visual Section Reference
title: Section 002 — Hero dividido com ação
description: Hero em duas colunas, com eyebrow e headline de um lado e descrição breve com formulário ou botão do outro.
status: approved-reference
owner: Pedro Raimundo
sectionReference: section-002
sectionType: hero section
created: 2026-08-24
updated: 2026-08-24
tags: [website, section, hero, split, form, button]
---

# Section 002 — Hero dividido com ação

## O que esta secção resolve

Apresenta a promessa principal com mais espaço para a ação. A leitura é dividida: o lado esquerdo estabelece o contexto e a headline; o lado direito explica brevemente e oferece o elemento de conversão.

## Estrutura

```text
section
└── inner container
    └── two-column content grid
        ├── text block
        │   ├── eyebrow / tagline
        │   └── headline
        └── action block
            ├── brief description
            └── optional element: form or button
```

## Propriedades configuráveis

| Propriedade | Valores observados | Efeito |
| --- | --- | --- |
| `columns` | `text + action` | Mantém a promessa e a ação em colunas distintas. |
| `textAlignment` | `left`, `center`, `right` | Alinha o conteúdo dentro de cada coluna. |
| `background` | `none`, `color`, `image`, `video` | Define o fundo da secção; pode exigir contraste/overlay. |
| `element` | `none`, `form`, `button` | Escolhe o elemento no bloco de ação. |
| `elementPosition` | `below-description`, `inline` | Define a relação entre descrição e elemento. |
| `collapseOnMobile` | `stack`, `reverse-stack` | Define a ordem das colunas em ecrãs pequenos. |

## Conteúdo esperado

- coluna de texto: eyebrow/tagline e headline;
- coluna de ação: descrição curta e formulário ou botão;
- o texto deve continuar compreensível caso o elemento seja `none`;
- evitar adicionar uma segunda headline na coluna de ação.

## Variações registradas

- [Visão geral](section-002-variant-overview.png): duas colunas, headline à esquerda e descrição/ações à direita.
- [Controles da secção](section-002-variant-controls.png): exemplo das opções de fundo e dos elementos `form` e `button`.

## Como usar no wireframe

```text
Section type: hero section
Visual reference: section-002 — Hero dividido com ação
Tagline: [contexto]
Title: [promessa principal]
Content: [descrição breve no bloco de ação]
Display: duas colunas no desktop; empilhar no mobile, mantendo a headline antes da ação.
CTA: [formulário ou botão]
```
