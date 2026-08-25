---
type: Visual Section Reference
title: Section 003 — Asset com texto e ação
description: Secção em duas colunas com imagem ou vídeo de um lado e conteúdo textual com elemento opcional do outro.
status: approved-reference
owner: Pedro Raimundo
sectionReference: section-003
sectionType: about section
created: 2026-08-24
updated: 2026-08-24
tags: [website, section, split, asset, image, video, form, button]
---

# Section 003 — Asset com texto e ação

## O que esta secção resolve

Explica uma ideia, serviço, missão ou benefício com apoio visual. O asset ocupa uma coluna e o conteúdo ocupa a outra, criando uma composição equilibrada e fácil de adaptar.

## Estrutura

```text
section
└── inner container
    └── two-column content grid
        ├── asset block
        │   └── image or video
        └── content block
            ├── eyebrow / tagline (opcional)
            ├── headline
            ├── brief description
            └── optional element: form or button
```

## Propriedades configuráveis

| Propriedade | Valores observados | Efeito |
| --- | --- | --- |
| `style` | `normal`, `card` | Define se a composição fica solta na secção ou dentro de um tratamento de card. |
| `asset` | `image`, `video` | Escolhe o tipo de media visual. |
| `assetPlacement` | `left`, `right` | Escolhe o lado do asset; o conteúdo ocupa o lado oposto. |
| `textAlignment` | `left`, `center`, `right` | Alinha o conteúdo textual dentro da coluna. |
| `element` | `none`, `form`, `button` | Acrescenta uma ação ao bloco textual. |
| `collapseOnMobile` | `asset-first`, `content-first` | Define qual coluna aparece primeiro no mobile. |

## Conteúdo esperado

- asset com função narrativa, não apenas decorativa;
- headline e descrição curta no bloco textual;
- eyebrow opcional;
- formulário ou botão apenas quando houver um próximo passo claro;
- se o asset for substituído por placeholder, manter a proporção prevista no design.

## Variações registradas

- [Asset à direita](section-003-variant-asset-right.png): texto à esquerda e placeholder visual à direita.
- [Asset à esquerda](section-003-variant-asset-left.png): imagem à esquerda e texto/ação à direita.
- [Asset à esquerda com formulário](section-003-variant-asset-left-form.png): imagem à esquerda e formulário no bloco textual.

## Como usar no wireframe

```text
Section type: about section
Visual reference: section-003 — Asset com texto e ação
Tagline: [contexto]
Title: [ideia principal]
Content: [descrição breve]
Display: duas colunas; imagem à esquerda; conteúdo alinhado à direita; empilhar com conteúdo primeiro no mobile.
CTA: [botão ou formulário, se aplicável]
```
