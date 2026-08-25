---
type: Skill Reference
title: Section Layouts Reference
description: Contratos estruturais dos layouts de seção usados para planejar wireframes e blocos GenerateBlocks.
status: active
owner: Pedro Raimundo
tags: [website, skill, reference, layouts, generateblocks]
created: 2026-08-24
updated: 2026-08-24
---

# Section Layouts Reference

## Como ler um layout

`sectionType` responde **o que a seção faz**. `layoutId` responde **como os blocos são organizados**. Este catálogo define apenas o segundo ponto.

Todo layout deve ser interpretado com o mesmo contrato:

| Propriedade | O que descreve |
| --- | --- |
| `layoutId` | Nome estável do arranjo visual. |
| `sectionBlock` | Bloco externo da seção, normalmente `<section>`. |
| `innerContainer` | Container interno que limita largura, padding e alinhamento. |
| `contentGrid` | Grid/flex que organiza colunas ou itens dentro do inner container. |
| `columns` | Número e peso das colunas em desktop, tablet e mobile (por exemplo `5/7 → 1/1`). |
| `alignment` | Alinhamento do conteúdo: esquerda, centro, início/fim ou distribuição entre colunas. |
| `spacing` | Relação entre padding da secção, gap do grid e separadores internos. Os valores vêm do Design MD. |
| `requiredBlocks` | Blocos que sempre precisam existir para o layout ser reconhecível. |
| `optionalBlocks` | Blocos permitidos, mas não obrigatórios. |
| `contentModel` | Número e tipo esperado de itens, textos e CTAs. |
| `ctaPolicy` | Se a ação é proibida, opcional ou única; nunca adicionar múltiplos CTAs por defeito. |
| `mediaPolicy` | Se a media é obrigatória, opcional ou substituível por `mediaPlaceholder`. |
| `responsive` | Como colunas, cards e media se comportam em tablet/mobile. |
| `allowedSectionTypes` | Funções editoriais que normalmente usam este arranjo. |
| `avoidWhen` | Situações em que outro layout será mais claro. |

## Vocabulário de blocos

```text
sectionBlock
└── innerContainer
    ├── sectionLabel (opcional: tagline)
    ├── sectionTitle (headline)
    ├── sectionDescription (texto de apoio, opcional)
    ├── contentGrid / contentStack
    │   ├── card / item / media / accordionItem
    │   └── ...
    └── cta (opcional)
```

`sectionBlock` não é o mesmo que `innerContainer`. O primeiro define o fundo e a área da seção; o segundo centraliza o conteúdo e controla a largura. Um layout deve declarar ambos antes dos blocos de conteúdo.

### Leitura rápida de um `layoutId`

O nome do layout é estável e semântico: `three-card-grid` significa **três unidades equivalentes em grelha**; `steps-plus-media` significa **sequência ordenada numa coluna + contentor visual numa segunda coluna**. O nome não substitui o contrato: o registo deve sempre informar colunas, blocos obrigatórios, opcionais, CTA, media e responsive.

## Registros de layout

### `full-width-intro`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com fundo da página ou fundo de contraste. |
| `innerContainer` | 1 coluna, largura máxima do Design MD. |
| `contentGrid` | Nenhum grid; stack vertical. |
| `requiredBlocks` | `sectionTitle`. |
| `optionalBlocks` | `sectionLabel`, `sectionDescription`, `cta`, `media`. |
| `contentModel` | 1 tagline, 1 headline, 1 texto curto; CTA único. |
| `responsive` | Mantém uma coluna; reduz largura de texto e espaçamento. |
| `allowedSectionTypes` | `hero`, `about`, `intro`, `belief`. |
| `avoidWhen` | Houver 3+ itens comparáveis ou passos ordenados. |

### `centered-intro`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` normalmente usado como faixa de transição. |
| `innerContainer` | 1 coluna estreita, alinhamento central. |
| `contentGrid` | Stack vertical centralizado. |
| `requiredBlocks` | `sectionTitle` ou `sectionDescription`. |
| `optionalBlocks` | `sectionLabel`, `cta`. |
| `contentModel` | 1 frase/ideia principal, até 1 parágrafo curto e 1 CTA. |
| `responsive` | Mantém alinhamento central em todos os breakpoints. |
| `allowedSectionTypes` | `belief`, `in page cta`, `transition`. |
| `avoidWhen` | A seção precisa de explicação longa ou múltiplos itens. |

### `split-text-media`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com um `innerContainer`. |
| `innerContainer` | 2 colunas, geralmente texto 5/12 + media 7/12. |
| `contentGrid` | Grid de 2 colunas; texto é um stack, media é um container. |
| `requiredBlocks` | `sectionTitle`, `contentGrid`, `media` ou `mediaPlaceholder`. |
| `optionalBlocks` | `sectionLabel`, `sectionDescription`, `itemList`, `cta`. |
| `contentModel` | 1 headline, 1 texto curto, 3–5 itens ou 1 CTA; 1 media. |
| `responsive` | Colunas empilham; ordem deve ser definida no wireframe. |
| `allowedSectionTypes` | `hero`, `about`, `benefits`, `methodology`, `service explanation`. |
| `avoidWhen` | Não houver função para a media ou houver comparação entre 3+ grupos. |

### `split-media-text`

Usa o mesmo contrato de `split-text-media`, mas inverte a ordem: `media` ocupa a primeira coluna e o stack de texto a segunda. É adequado para destaque editorial, prova ou explicação de um serviço.

### `three-card-grid`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com fundo, borda ou faixa definida pelo Design MD. |
| `innerContainer` | Stack de introdução + grid de cards. |
| `contentGrid` | 3 colunas iguais no desktop; 1 coluna no mobile. |
| `requiredBlocks` | `sectionTitle`, `contentGrid`, 3 `card` blocks. |
| `optionalBlocks` | `sectionLabel`, `sectionDescription`, ícone/número, `cta`. |
| `contentModel` | Exatamente 3 itens; cada card tem título curto e descrição de 1–3 frases. |
| `responsive` | Desktop 3×1; tablet 2+1 ou 1×3; mobile 1×3. |
| `allowedSectionTypes` | `benefits`, `who is this for`, `pathways`, `service list`, `why choose us`. |
| `avoidWhen` | Item exigir texto longo, imagem própria ou ordem de passos. |

### `four-card-grid`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com `innerContainer`. |
| `innerContainer` | Stack de introdução + grid. |
| `contentGrid` | 4 colunas no desktop ou 2×2; 1 coluna no mobile. |
| `requiredBlocks` | `contentGrid` com 4 `card`/`item` blocks. |
| `optionalBlocks` | `sectionLabel`, `sectionTitle`, ícones, `cta`. |
| `contentModel` | 4 itens; cada item tem título e descrição curta. |
| `responsive` | Desktop 4×1 ou 2×2; tablet 2×2; mobile 1×4. |
| `allowedSectionTypes` | `service list`, `competences`, `faq summary`, `benefits`. |
| `avoidWhen` | Houver menos de 3 itens ou conteúdo com pesos muito diferentes. |

### `vertical-steps`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com `innerContainer`. |
| `innerContainer` | 1 coluna de introdução + 1 stack de passos. |
| `contentGrid` | Stack vertical; cada passo ocupa uma linha. |
| `requiredBlocks` | `sectionTitle`, 3–5 `step` blocks e divisores entre eles. |
| `optionalBlocks` | `sectionLabel`, `sectionDescription`, `cta`. |
| `contentModel` | 3–5 passos ordenados; número, título curto e descrição de 1–3 frases. |
| `responsive` | Continua vertical em todos os breakpoints. |
| `allowedSectionTypes` | `methodology`, `contact flow`, `how it works`. |
| `avoidWhen` | A ordem não for importante ou os itens forem comparativos. |

### `steps-plus-media`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com `innerContainer`. |
| `innerContainer` | 2 colunas: stack vertical de passos + media/contentor reservado. |
| `contentGrid` | Texto 5/12 + media 7/12, com divisores entre passos. |
| `requiredBlocks` | `sectionTitle`, 3–5 `step` blocks, `media` ou `mediaPlaceholder`. |
| `optionalBlocks` | `sectionLabel`, `sectionDescription`, `cta`. |
| `contentModel` | 3–5 passos; 1 espaço visual. |
| `responsive` | Empilha; media pode vir depois dos passos no mobile. |
| `allowedSectionTypes` | `methodology`, `about`, `benefits`. |
| `avoidWhen` | Não houver media aprovada nem contentor que cumpra função visual. |

### `comparison-columns`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com fundo neutro e cards/colunas comparáveis. |
| `innerContainer` | Introdução + grid de 2 ou 3 colunas. |
| `contentGrid` | 2–3 colunas de mesma largura. |
| `requiredBlocks` | 2–3 `comparisonColumn` blocks com títulos equivalentes. |
| `optionalBlocks` | `sectionLabel`, `sectionDescription`, 3 itens curtos por coluna, destaque visual para a opção principal. |
| `contentModel` | Mesma lógica de comparação para cada coluna; itens curtos e respeitosos. |
| `responsive` | Empilha colunas; preserva a ordem estratégica. |
| `allowedSectionTypes` | `why choose us`, `comparison`, `service options`. |
| `avoidWhen` | As categorias não forem comparáveis ou houver tom depreciativo. |

### `list-with-detail`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com `innerContainer`. |
| `innerContainer` | Introdução + grid de lista/detalhe. |
| `contentGrid` | 4–5 colunas para lista e restante para painel de detalhe; proporções conforme Design MD. |
| `requiredBlocks` | `itemList`, `detailPanel`. |
| `optionalBlocks` | `sectionLabel`, `sectionTitle`, `cta`, ícones. |
| `contentModel` | 3–7 itens selecionáveis; cada item tem nome curto e detalhe associado. |
| `responsive` | Lista e detalhe empilham; detalhe segue o item selecionado ou primeiro item. |
| `allowedSectionTypes` | `service list`, `product list`, `hub directory`. |
| `avoidWhen` | Não houver interação ou os itens forem poucos e estáticos. |

### `accordion-list`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com `innerContainer`. |
| `innerContainer` | Introdução + stack de perguntas. |
| `contentGrid` | 1 coluna. |
| `requiredBlocks` | 5–7 `accordionItem` blocks. |
| `optionalBlocks` | `sectionLabel`, `sectionTitle`, `sectionDescription`, `cta`. |
| `contentModel` | Pergunta curta + resposta de 1–3 parágrafos; uma resposta por item. |
| `responsive` | Mantém 1 coluna; garantir foco e expansão acessíveis. |
| `allowedSectionTypes` | `faq`, `objections`. |
| `avoidWhen` | A informação precisa estar sempre visível ou for apenas uma frase. |

### `testimonial-carousel`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com contraste visual e controles acessíveis. |
| `innerContainer` | Introdução opcional + viewport do carousel. |
| `contentGrid` | 1–3 slides visíveis conforme breakpoint. |
| `requiredBlocks` | 3+ `testimonialCard` blocks, controles e indicação de posição. |
| `optionalBlocks` | `sectionLabel`, `sectionTitle`, `cta`. |
| `contentModel` | Highlight curto, nome/anonimização, contexto e relato autorizado. |
| `responsive` | 1 slide no mobile; controles teclado/touch. |
| `allowedSectionTypes` | `testimonial`. |
| `avoidWhen` | Não houver relatos reais autorizados. |

### `case-study-feature`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` de destaque editorial. |
| `innerContainer` | 2 colunas ou stack com contexto, percurso e resultado. |
| `contentGrid` | Texto + media/prova ou 3 etapas de história. |
| `requiredBlocks` | `caseContext`, `caseProcess`, `caseOutcome`. |
| `optionalBlocks` | `media`, quote, `cta`. |
| `contentModel` | Antes/contexto, durante/mecanismo, depois/resultado observado. |
| `responsive` | Empilha blocos mantendo a narrativa. |
| `allowedSectionTypes` | `case study`. |
| `avoidWhen` | Só existir um testemunho curto sem contexto. |

### `media-gallery`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com media aprovada. |
| `innerContainer` | Introdução opcional + grid de media. |
| `contentGrid` | 3–4 colunas ou composição editorial; 1 coluna no mobile. |
| `requiredBlocks` | 3+ `mediaItem` blocks com alt text. |
| `optionalBlocks` | legendas, filtros, `cta`. |
| `contentModel` | 3–8 imagens contextualizadas. |
| `responsive` | Grelha reduz colunas; imagens preservam proporção. |
| `allowedSectionTypes` | `team`, `gallery`, `about`, `case study`. |
| `avoidWhen` | Não houver media aprovada ou função narrativa. |

### `map-contact`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` com fundo e borda conforme Design MD. |
| `innerContainer` | Stack ou 2 colunas de mapa e dados práticos. |
| `contentGrid` | `mapEmbed` + `addressBlock`/CTA. |
| `requiredBlocks` | `mapEmbed` ou placeholder, morada e ação de abrir mapa. |
| `optionalBlocks` | horário, transportes, estacionamento, WhatsApp. |
| `contentModel` | 1 morada canónica, 1 mapa, 1 ação principal. |
| `responsive` | Mapa ocupa largura total; dados empilham no mobile. |
| `allowedSectionTypes` | `map/contact`, `contact`. |
| `avoidWhen` | Localização não for parte da decisão. |

### `cta-band`

| Propriedade | Definição |
| --- | --- |
| `sectionBlock` | `<section>` de contraste, normalmente fundo escuro. |
| `innerContainer` | 1 coluna central ou split curto. |
| `contentGrid` | Stack de label, headline, texto e CTA. |
| `requiredBlocks` | `sectionTitle`, 1 `cta`. |
| `optionalBlocks` | `sectionLabel`, `sectionDescription`, media de fundo. |
| `contentModel` | 1 promessa, 1 ação principal; sem lista longa. |
| `responsive` | Mantém stack e área de toque confortável. |
| `allowedSectionTypes` | `in page cta`, `bottom cta`, `campaign cta`. |
| `avoidWhen` | Houver mais de uma ação de igual prioridade. |

## Uso no wireframe

Cada seção do wireframe deve declarar pelo menos:

```yaml
sectionType: methodology
layoutId: steps-plus-media
```

Depois deve descrever o conteúdo e o display. O layout define a árvore de blocos; o wireframe define a mensagem concreta. O Design MD define as classes, cores, espaçamento e valores reais.
