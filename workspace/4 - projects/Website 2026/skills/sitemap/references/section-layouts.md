---
type: Skill Reference
title: Section Layouts Reference
description: Catálogo dos layouts estruturais reutilizáveis para compor secções do Website 2026.
status: active-reference
owner: Pedro Raimundo
tags: [website, skill, reference, sections, layouts, generateblocks]
created: 2026-08-24
updated: 2026-08-24
---

# Section Layouts Reference

Este documento descreve a composição estrutural de uma secção inteira. Não é uma galeria de prints nem um conjunto de templates rígidos. Cada `layoutId` define os blocos principais — `SECTION`, `INNER CONTAINER`, cabeçalho, colunas, grid, lista ou ação — e quais propriedades podem variar sem perder a lógica do layout.

O exemplo de três cards é apenas uma forma possível de representar um layout. O número de colunas, cards ou ações deve ser escolhido pelo conteúdo e pela intenção da página, não aplicado automaticamente.

## Como ler um layout

- `sectionType` descreve a função editorial: hero, benefícios, metodologia, comparação, CTA etc. A lista está em [`section-types.md`](section-types.md).
- `layoutId` descreve a forma estrutural: uma coluna, duas colunas, grid, lista e detalhe, ou faixa de CTA.
- O Sitemap fornece o `sectionType` e o briefing; o Wireframe escolhe o `layoutId` e expande a combinação em conteúdo, display e CTA.
- Os nomes `SECTION`, `INNER CONTAINER`, `SECTION HEADER`, `GRID`, `COLUMN`, `CARD`, `ASSET` e `ACTION` são blocos conceptuais. A implementação traduz estes blocos para GenerateBlocks.

## Propriedades comuns

Usar apenas as propriedades que fazem sentido para o layout. Valores padronizados:

| Propriedade | Valores | Quando usar |
| --- | --- | --- |
| `background` | `none`, `color`, `image`, `video` | Fundo da secção. |
| `style` | `normal`, `card` | Tratamento visual do container, quando aplicável. |
| `textAlignment` | `left`, `center`, `right` | Alinhamento do conteúdo textual. |
| `eyebrow` | `required`, `optional`, `none` | Pequena etiqueta acima do título. |
| `headline` | `required`, `optional`, `none` | Título principal da secção. |
| `description` | `required`, `optional`, `none` | Texto de enquadramento. |
| `element` | `none`, `button`, `form` | Ação ou captação principal. |
| `sectionCTA` | `optional`, `none` | Ação no cabeçalho ou no final da secção. |
| `direction` | `normal`, `reverse` | Inversão de colunas ou de um asset/texto. |
| `flow` | `row`, `column` | Direção de listas, passos ou itens repetidos. |
| `assetPlacement` | `left`, `right` | Posição do asset em layouts com media. |
| `mobileOrder` | `document-order`, `asset-first`, `text-first` | Quando a ordem mobile precisa ser explícita. |

Propriedades específicas aparecem apenas onde são relevantes: `columns`, `items`, `cardImage`, `cardCTA`, `icon`, `dividers`, `asset`, `selection` e `highlight`.

## Catálogo de layouts

### L01 — Intro centrada

```text
SECTION
└── INNER CONTAINER
    └── SECTION HEADER
        ├── Eyebrow (optional)
        ├── Heading (required)
        ├── Description (optional)
        └── ACTION (optional)
```

Properties: `background`, `textAlignment: center`, `eyebrow`, `headline`, `description`, `element: none|button|form`, `sectionCTA`.

Use para introduções, hero simples e enquadramentos. Evitar quando a secção precisa de comparação, imagem relevante ou vários itens.

### L02 — Hero dividido com ação

```text
SECTION
└── INNER CONTAINER
    └── COLUMNS [2]
        ├── TEXT BLOCK
        │   ├── Eyebrow (optional)
        │   ├── Heading (required)
        │   └── Description (optional)
        └── ACTION BLOCK
            └── Form or Button
```

Properties: `columns: 2`, `direction`, `background`, `textAlignment`, `element: button|form`, `mobileOrder`.

Use quando a mensagem e a ação precisam de pesos separados. Não transformar o bloco de ação num segundo texto longo.

### L03 — Media + texto

```text
SECTION
└── INNER CONTAINER
    └── COLUMNS [2]
        ├── ASSET
        └── TEXT BLOCK
            ├── Eyebrow (optional)
            ├── Heading (required)
            ├── Description (optional)
            └── ACTION (optional)
```

Properties: `columns: 2`, `asset: image|video`, `assetPlacement`, `direction`, `mobileOrder`, `style`, `background`, `element`.

Use para explicar uma abordagem, equipa, espaço ou transformação com apoio visual. O asset pode ficar à esquerda ou à direita.

### L04 — Texto + lista de pontos

```text
SECTION
└── INNER CONTAINER
    ├── SECTION HEADER
    │   ├── Eyebrow (optional)
    │   ├── Heading (required)
    │   └── Description (optional)
    └── ITEM LIST
        ├── ITEM
        ├── ITEM
        └── ITEM (repeat as needed)
```

Properties: `items: 3–6`, `icon: optional`, `dividers: optional`, `textAlignment`, `sectionCTA`, `background`.

Use para benefícios, sinais, critérios, áreas de cuidado ou pontos de decisão. Não usar cards quando uma lista simples for mais clara.

### L05 — Cards em grid

```text
SECTION
└── INNER CONTAINER
    ├── SECTION HEADER (optional)
    │   ├── Eyebrow (optional)
    │   ├── Heading (required)
    │   └── Description (optional)
    └── GRID [N columns]
        ├── CARD
        ├── CARD
        └── CARD (repeat as needed)
```

Properties: `cards: 2–6`, `columns: 2|3|4`, `cardImage: optional`, `icon: optional`, `cardCTA: optional`, `sectionCTA: optional`, `background`, `style`, `textAlignment`.

Use quando cada item exprime uma ideia autónoma — serviços, caminhos, benefícios ou recursos. O número de cards e colunas é variável; não assumir três por padrão.

### L06 — Passos sequenciais

```text
SECTION
└── INNER CONTAINER
    ├── SECTION HEADER
    │   ├── Eyebrow (optional)
    │   ├── Heading (required)
    │   └── Description (optional)
    └── STEPS [N items]
        ├── STEP
        ├── DIVIDER (optional)
        ├── STEP
        └── STEP (repeat as needed)
```

Properties: `items: 3–5`, `flow: row|column`, `dividers`, `numberOrIcon`, `sectionCTA`, `background`, `textAlignment`.

Use para metodologia, primeiro contacto, acompanhamento e instruções. Em mobile, a sequência deve ser legível mesmo quando passa de linha para coluna.

### L07 — Comparação ou posicionamento

```text
SECTION
└── INNER CONTAINER
    ├── SECTION HEADER (optional)
    └── COMPARISON GRID [N columns]
        ├── COMPARISON COLUMN
        │   ├── Heading
        │   └── ITEM LIST
        └── COMPARISON COLUMN (repeat as needed)
```

Properties: `columns: 2|3`, `itemsPerColumn: 3–5`, `highlight: optional`, `background`, `textAlignment`, `sectionCTA`.

Use para explicar diferenças de abordagem sem atacar alternativas. Evitar quando não houver critérios realmente comparáveis.

### L08 — Lista + detalhe

```text
SECTION
└── INNER CONTAINER
    └── COLUMNS [2]
        ├── ITEM LIST / NAVIGATION
        └── DETAIL PANEL
            ├── Heading (optional)
            ├── Description (optional)
            └── ACTION (optional)
```

Properties: `columns: 2`, `selection: tabs|list|accordion`, `direction`, `asset: optional`, `element`, `mobileOrder`.

Use para hubs, especialidades, áreas de cuidado e catálogos em que a pessoa escolhe um item para ver a explicação correspondente.

### L09 — Depoimento ou prova

```text
SECTION
└── INNER CONTAINER
    ├── QUOTE / TESTIMONIAL
    │   ├── Highlight (optional)
    │   ├── Text
    │   └── Attribution
    └── ACTION (optional)
```

Properties: `background`, `textAlignment`, `asset: optional`, `highlight`, `element`, `sectionCTA`.

Use para testemunhos, citações e pequenas histórias. O conteúdo deve vir de `post-types/` ou de uma fonte aprovada.

### L10 — Faixa de CTA

```text
SECTION
└── INNER CONTAINER
    └── CTA BLOCK
        ├── Eyebrow (optional)
        ├── Heading (required)
        ├── Description (optional)
        └── ACTION (required)
```

Properties: `background: color|image|video`, `textAlignment: left|center`, `element: button|form`, `style`, `fullWidth`.

Use para um próximo passo claro no final ou entre blocos. Evitar repetir a mesma ação sem uma mudança de contexto.

## Regra de escolha

1. Escolher primeiro o `sectionType` pela função editorial.
2. Escolher depois o `layoutId` pela estrutura necessária para apresentar esse conteúdo.
3. Aplicar apenas as propriedades compatíveis com o layout; não criar combinações por hábito.
4. Registar no Wireframe o `layoutId` escolhido junto do `sectionType` herdado do Sitemap.
5. No wireframe, referenciar o `layoutId` e descrever conteúdo, display e CTA; não duplicar esta árvore estrutural.
6. No Design MD, definir cores, tipografia, espaçamento, classes e componentes visuais; não redefinir a função editorial.

## Histórico

Os prints e fichas visuais usados como exemplos foram arquivados em [`../../archive/section-library-visual-examples-20260824/`](../../archive/section-library-visual-examples-20260824/). A especificação detalhada anterior está em [`../../archive/section-layouts-detailed-v1.md`](../../archive/section-layouts-detailed-v1.md). Nenhum desses materiais é necessário para criar novos layouts.
