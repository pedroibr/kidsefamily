---
type: Website Design Reference
title: Design MD
description: Inventário do sistema visual e das classes globais actualmente disponíveis no site da Clínica Kids e Family.
status: active-reference
owner: Pedro Raimundo
source: WordPress Site Editor + GenerateBlocks
site: https://kidsefamily.instawp.site
captured: 2026-08-18
updated: 2026-08-18
tags: [website, design-system, generateblocks, site-editor, reference]
---

# Design MD

## Objectivo

Este documento regista o estado observado no WordPress da Clínica Kids e Family para orientar a construção das páginas em `pages/`. É uma referência técnica, não uma autorização para alterar o design global nem uma lista de classes a criar automaticamente.

**Fonte observada:** GenerateBlocks e Site Editor, origem activa `Cristiane Martins (kids & family)` (`peyokipuke6726`), em `https://kidsefamily.instawp.site`.

## Estado da implementação

- Tema activo: **Twenty Twenty-Five**, versão 1.5.
- GenerateBlocks Free: 2.4.0; GenerateBlocks Pro: 2.7.0.
- Largura global do GenerateBlocks: `1100px`, variável `--gb-container-width`.
- Largura `contentSize` e `wideSize` do Global Styles do utilizador: `1100px`.
- Global Styles do utilizador: registo WordPress `11`.
- O catálogo observado contém 18 classes globais publicadas e nenhuma classe desconhecida detectada pelo scanner.
- Esta captura foi apenas de leitura. Nenhuma classe, cor, fonte ou estilo foi alterado.

## Paleta global observada

As cores abaixo são as presets activas do utilizador e devem ser referenciadas por variáveis WordPress quando possível.

| Slug | Nome no editor | Valor | Uso observado / leitura | Estado |
|---|---|---|---|---|
| `base` | Base | `#fafaf9` | Fundo claro e texto de contraste dos botões | Existente |
| `contrast` | Contrast | `#0f2438` | Títulos, fundo escuro e cor de tinta principal | Existente |
| `accent-1` | Accent 1 | `#0b1a2b` | Links e tinta escura alternativa | Existente |
| `accent-2` | Accent 2 | `#2c8f96` | Realce cromático secundário | Existente |
| `accent-3` | Accent 3 | `#bfa468` | Linha dourada/thread e botão primário | Existente |
| `accent-4` | Accent 4 | `#686868` | Texto global do corpo | Existente |
| `accent-5` | Accent 5 | `#f1ebde` | Fundo quente alternativo / on-ink | Existente |
| `accent-6` | Accent 6 | `color-mix(in srgb, currentColor 20%, transparent)` | Transparência derivada da cor actual | Existente |

### Variáveis sem preset observadas nas classes

Estas variáveis aparecem no CSS das classes globais e devem ser preservadas ou formalizadas antes de uma refactorização:

| Variável | Fallback observado | Onde aparece |
|---|---|---|
| `--cm-thread` | `#BFA468` | links/hover, tagline e botão secundário |
| `--cm-line` | `#E7E1D4` | bordas de cards e tabs |
| `--cm-ink` | `#0F2438` | tinta, tabs activos e links |
| `--cm-ink-soft` | `#5A6672` | subheadline |
| `--cm-on-ink` | `#F3EEE4` | texto sobre fundo escuro e rodapé |

### Gradiente personalizado

- Slug: `custom-color-1`
- Nome: `Color 1`
- Valor: `linear-gradient(276deg,rgb(11,26,43) 0%,rgb(255,255,255) 100%)`

O tema também expõe os gradientes padrão do Twenty Twenty-Five. Eles não devem ser usados no site sem decisão visual explícita; o gradiente personalizado é o único gradiente local observado.

## Tipografia e escalas

### Famílias activas do utilizador

| Família | Preset | Aplicação observada | Pesos locais |
|---|---|---|---|
| Playfair Display | `playfair-display` | headings/títulos | 400, 500, 600, 700 |
| DM Sans | `dm-sans` | corpo, links, captions e botões | 200, 300, 400, 600, 800 |

O corpo usa `var(--wp--preset--font-family--dm-sans)` com peso `400`. Headings usam `var(--wp--preset--font-family--playfair-display)`, peso `400` e cor `var(--wp--preset--color--contrast)`.

### Tamanhos de texto

| Slug | Preset local | Valor observado |
|---|---|---|
| `small` | Pequeno | `13px` (preset customizado) / `0.875rem` (preset do tema) |
| `medium` | Médio | `20px` (customizado) / `1rem` com fluidez até `1.125rem` |
| `large` | Grande | `36px` (customizado) / `1.38rem` com fluidez até `1.375rem` |
| `x-large` | Muito grande / Extra grande | `42px` (customizado) / `1.75rem` com fluidez até `2rem` |
| `xx-large` | Extra extra grande | `2.15rem` com fluidez até `3rem` |

### Hierarquia do tema

- `h1`: `var(--wp--preset--font-size--xx-large)`.
- `h2`: `var(--wp--preset--font-size--x-large)`.
- `h3`: `var(--wp--preset--font-size--large)`.
- `h4`: `var(--wp--preset--font-size--medium)`.
- `h5`: `var(--wp--preset--font-size--small)`, letter-spacing `0.5px`.
- `h6`: `var(--wp--preset--font-size--small)`, peso `700`, letter-spacing `1.4px`, uppercase.
- Headings: line-height `1.125`, letter-spacing `-0.1px`, peso `400` por defeito.

## Layout e comportamento global

- GenerateBlocks: `--gb-container-width: 1100px`.
- Global Styles do utilizador: `contentSize: 1100px`, `wideSize: 1100px`.
- `body`: `blockGap: 0rem`, fundo `base`, texto `accent-4`.
- Links: `accent-1`, DM Sans.
- Botões globais do tema: DM Sans, peso `400`; fundo `contrast`, texto `base`, padding vertical `1rem` e horizontal `2.25rem`.
- O CSS do utilizador mantém o rodapé no fundo da viewport através de `.wp-site-blocks` com `min-height: 100vh`, flex column e `footer` com `margin-top: auto`.

## Classes globais GenerateBlocks existentes

As regras abaixo foram lidas do catálogo global, incluindo CSS compilado e valores estruturados quando disponíveis. Os nomes devem ser reutilizados antes de se criar uma classe equivalente.

| Classe | Valores principais | Uso / observação |
|---|---|---|
| `gbp-section` | padding `7rem 40px`; ≤1020px `6rem 30px`; ≤767px `4rem 20px` | wrapper de secção; 17 usos |
| `gbp-section__inner` | `width: 100%`; `max-width: var(--gb-container-width)`; `margin-left/right: auto`; border-radius `24px` | inner section centralizado; 30 usos |
| `gbp-section__headline` | margin-bottom `1.5rem`; ≤767px `1.25rem` | bloco de título da secção; 11 usos |
| `gbp-section__text` | font-size `1.125rem`; line-height `1.65` | corpo introdutório/descrição; 11 usos |
| `gbp-section__tagline` | margin-bottom `.75rem`; cor `--cm-thread`/`#BFA468`; `1rem`; peso `600`; letter-spacing `.08em`; uppercase | tagline; 3 usos |
| `gbp-button--primary` | fundo `accent-3`; texto `base`; `16px`; uppercase; letter-spacing `3px`; border-radius `24px`; padding `.7rem 1.7rem`; hover/focus `#ad945d` | CTA principal; 3 usos |
| `gbp-button--secondary` | fundo transparente; texto/borda `contrast` (`#0f2438`); `16px`; uppercase; letter-spacing `3px`; border-radius `24px`; padding `.7rem 1.7rem`; hover/focus com fundo `contrast` e texto `base`; mobile full-width | CTA secundário invertido face ao primário; 4 usos |
| `gbp-card--border` | border `1px solid var(--cm-line,#E7E1D4)` | variante de card com borda; actualmente sem uso detectado |
| `gbp-card__title` | font-size `1.25rem`; margin-bottom `.5rem` | título de card; 6 usos |
| `gbp-card__meta-text` | font-size `.875rem`; margin-bottom `.5rem` | metadados de card; 1 uso |
| `gbp-footer` | padding `5rem 40px 2rem`; cor `--cm-on-ink`; font-size `.875rem`; mobile `4rem 20px 1.5rem` | wrapper do rodapé; sem uso directo detectado |
| `gbp-footer__title` | cor `contrast`; uppercase; peso bold | títulos do rodapé; 4 usos |
| `gbp-footer__link` | display block; padding `.375rem 0`; cor inherit; sem decoração; hover `--cm-thread` | links do rodapé; sem uso directo detectado |
| `subheadline` | margin-top `-1rem`; margin-bottom `4rem`; cor `--cm-ink-soft` | subheadline; sem uso detectado |
| `learnmorebutton` | inline-flex; margin-top `20px`; cor `--cm-ink`; underline `--cm-thread`; offset `.25em` | ligação “saber mais”; sem uso detectado |
| `tabmenu1` | border `1px solid --cm-line`; padding `1rem 1.25rem`; uppercase; letter-spacing `.08em`; activo/hover fundo `--cm-ink`, texto `--cm-on-ink` | tabs/listagem de serviços; sem uso detectado |
| `sectiontag` | uppercase; peso `200`; `16px`; letter-spacing `3px` | variante de etiqueta de secção; 1 uso no template part “botton” |
| `footerheader` | sem estilos estruturados nem CSS | marcador sem estilo; sem uso detectado |

### Classes estruturais prioritárias para as próximas páginas

Para a primeira implementação do website, a combinação já existente mais coerente é:

```text
gbp-section
└── gbp-section__inner
    ├── gbp-section__tagline
    ├── gbp-section__headline
    └── gbp-section__text
```

Usar `gbp-button--primary` e `gbp-button--secondary` para os dois CTAs principais da Início, salvo decisão posterior de criar variantes específicas para WhatsApp.

## CSS personalizado global observado

```css
.excerpt-limitado {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.wp-site-blocks{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer, .wp-block-template-part.footer{
  margin-top: auto;
}
```

## Classes propostas (não criadas)

Estas são apenas hipóteses de nomenclatura para necessidades que ainda não estão cobertas de forma clara. Não existem no catálogo observado e não devem ser criadas sem aprovar a necessidade e os valores:

| Classe proposta | Finalidade | Relação com o que já existe |
|---|---|---|
| `cm-section--belief` | quebra visual de crença/valor com fundo contrastante | extensão de `gbp-section` |
| `cm-paths` | display dos três caminhos de cuidado da Início | pode usar `gbp-card__title` e `gbp-card--border` |
| `cm-testimonials` | wrapper de testemunhos/carousel | reutilizar `gbp-section__*`; não define conteúdo de prova |
| `cm-whatsapp-cta` | variante de CTA para encaminhar ao WhatsApp | partir de `gbp-button--primary` ou `gbp-button--secondary` |
| `cm-map` | contentor responsivo do mapa na página Contacto | classe nova apenas se o embed exigir tratamento próprio |

As classes propostas devem ser validadas no markup real e, se forem necessárias, criadas através do catálogo global do GenerateBlocks. Até lá, são documentação de planeamento.

## Regras de utilização para o Website 2026

1. Consultar primeiro as classes existentes antes de adicionar CSS local.
2. Preferir presets (`var(--wp--preset--...)`) e variáveis `--cm-*` a valores hexadecimais repetidos.
3. Manter a separação entre estrutura (`gbp-section`, `gbp-section__inner`) e conteúdo (`tagline`, heading, text, cards).
4. Não copiar conteúdo, IDs, imagens ou URLs das referências GenerateBlocks; este documento descreve apenas o sistema visual observado.
5. Quando uma classe proposta for aprovada, actualizar este documento com os valores reais e indicar a página onde foi usada.

### Correcção de alinhamento — 2026-08-18

O `gbp-section__inner` estava limitado a `max-width: 1100px`, mas sem `width: 100%` e sem margens automáticas. Em viewports largos isso deixava todos os inner blocks encostados à esquerda. A classe foi actualizada no GenerateBlocks para centralizar o conteúdo e manter a largura disponível até ao máximo definido.

### Actualização do botão secundário — 2026-08-18

`gbp-button--secondary` passou a usar a mesma geometria do botão primário, mas invertida: sem fundo dourado, com texto e borda em azul-petróleo (`contrast`), radius de `24px` e preenchimento escuro no hover/focus.

## Fontes consultadas

- GenerateBlocks: catálogo de Global Classes, configuração global e contexto de autoria.
- Site Editor: Global Styles do tema e do utilizador.
- Projecto local: `pages/` e referências em `references/`.
