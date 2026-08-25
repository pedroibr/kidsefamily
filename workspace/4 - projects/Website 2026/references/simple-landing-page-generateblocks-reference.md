---
type: Website Reference
title: GenerateBlocks Simple Landing Page Reference
description: Export de uma landing page/capture page em markup WordPress/GenerateBlocks para consultar uma estrutura curta de orientação para uma formação ou oferta.
status: active
owner: Pedro Raimundo
tags: [website, wordpress, generateblocks, reference, landing-page, lead-magnet]
source: User-pasted attachment
captured: 2026-08-18
---

# GenerateBlocks Simple Landing Page Reference

## Purpose

Guardar como referência técnica uma landing page simples: hero com promessa e CTA, secção de preparação com imagem e lista de benefícios, e CTA repetido para inscrição ou reserva.

## Patterns to Reuse

- **Hero:** título, promessa curta, CTA imediato e overlay/formulário como próximo passo.
- **Offer orientation:** bloco em duas colunas com imagem, contexto e lista de resultados/benefícios esperados.
- **Conversion repetition:** repetir o CTA depois de explicar o que a pessoa recebe, sem adicionar complexidade desnecessária.

## Usage Notes

- É uma referência técnica, não uma página aprovada nem conteúdo da Clínica Kids e Family.
- Adaptar a estrutura para lead magnets, primeira consulta ou outras páginas de entrada apenas quando a oferta e o fluxo estiverem validados.
- Substituir textos, URLs, imagens, IDs, classes, overlays e dados da oferta de origem.
- Confirmar se o formulário, modal/overlay e integração de conversão estão disponíveis no site.

## Source Markup

```html
<!-- wp:generateblocks/element {"uniqueId":"966fb3bc","tagName":"div","styles":{"color":"#ffffff","position":"relative","paddingTop":"7rem","backgroundImage":"linear-gradient(to left, rgba(13, 6, 1, 0.54) 0%, rgba(13, 6, 1, 0.54) 100%),url(https://fpolli.com/wp-content/uploads/2026/02/hqhx3lbn18-1.jpg)","backgroundSize":"cover,cover","backgroundRepeat":"no-repeat,no-repeat","backgroundPosition":"center,37% 65%","backgroundBlendMode":"normal,"},"css":".gb-element-966fb3bc{background-blend-mode:normal,;color:#ffffff;padding-top:7rem;position:relative;background:linear-gradient(to left,rgba(13,6,1,0.54) 0%,rgba(13,6,1,0.54) 100%),url(https://fpolli.com/wp-content/uploads/2026/02/hqhx3lbn18-1.jpg) 37% 65% /cover no-repeat}","globalClasses":["gbp-section"],"metadata":{"name":"Section"}} -->
<div class="gbp-section gb-element-966fb3bc"><!-- wp:generateblocks/element {"uniqueId":"db89dc16","tagName":"div","styles":{"marginLeft":"auto","marginRight":"auto","display":"grid","gridTemplateColumns":"repeat(2, minmax(0, 1fr))","@media (max-width:1024px)":{"display":"block"},"zIndex":"0","position":"relative"},"css":".gb-element-db89dc16{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-left:auto;margin-right:auto;position:relative;z-index:0}@media (max-width:1024px){.gb-element-db89dc16{display:block}}","globalClasses":["gbp-section__inner"],"metadata":{"name":"inner container max-width"}} -->
<div class="gbp-section__inner gb-element-db89dc16"><!-- wp:generateblocks/element {"uniqueId":"a11119d8","tagName":"div","styles":{"@media (max-width:767px)":{"paddingBottom":"4rem"}},"css":"@media (max-width:767px){.gb-element-a11119d8{padding-bottom:4rem}}","metadata":{"name":"Content container"}} -->
<div class="gb-element-a11119d8"><!-- wp:generateblocks/text {"uniqueId":"f673388a","tagName":"h1","globalClasses":["gbp-section__headline"]} -->
<h1 class="gb-text gbp-section__headline">Sessão Primeiros Passos</h1>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"0002532f","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">Sessão online individual e gratuita para te conhecer melhor,  entender seu momento e te ajudar a priorizar e organizar os próximos passos da sua reforma ou construção.</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"e61a22e5","tagName":"div","styles":{"paddingTop":"1rem"},"css":".gb-element-e61a22e5{padding-top:1rem}"} -->
<div class="gb-element-e61a22e5"><!-- wp:generateblocks/text {"uniqueId":"3906fa23","tagName":"a","styles":{"@media (max-width:767px)":{"maxWidth":"100%","display":"flex","justifyContent":"center"}},"css":"@media (max-width:767px){.gb-text-3906fa23{display:flex;justify-content:center;max-width:100%}}","globalClasses":["gbp-button\u002d\u002dprimary"],"htmlAttributes":{"data-gb-overlay":"gb-overlay-1069"}} -->
<a class="gb-text gbp-button--primary gb-text-3906fa23" data-gb-overlay="gb-overlay-1069">Reservar sessão inicial</a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"7c52ff87","tagName":"div","globalClasses":["gbp-section"]} -->
<div class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"f5b904ea","tagName":"div","styles":{"display":"grid","@media (max-width:1024px)":{"display":"block"},"gridTemplateColumns":"repeat(2, minmax(0, 1fr))","alignItems":"center","columnGap":"4rem"},"css":".gb-element-f5b904ea{align-items:center;column-gap:4rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@media (max-width:1024px){.gb-element-f5b904ea{display:block}}","globalClasses":["gbp-section__inner"],"metadata":{"name":"Section Flex Row"}} -->
<div class="gbp-section__inner gb-element-f5b904ea"><!-- wp:generateblocks/element {"uniqueId":"1d91e275","tagName":"div"} -->
<div><!-- wp:generateblocks/media {"uniqueId":"7bc2117a","tagName":"img","styles":{"height":"auto","maxWidth":"100%","objectFit":"cover","width":"auto","aspectRatio":"1","@media (max-width:1024px)":{"aspectRatio":"16/9"}},"css":".gb-media-7bc2117a{aspect-ratio:1;height:auto;max-width:100%;object-fit:cover;width:auto}@media (max-width:1024px){.gb-media-7bc2117a{aspect-ratio:16/9}}","htmlAttributes":{"alt":"brown wooden framed yellow padded chair","title":"Photo by Kam Idris","src":"https://fpolli.com/wp-content/uploads/2026/02/hqhx3lbn18-1.jpg"},"mediaId":355} -->
<img class="gb-media-7bc2117a" alt="brown wooden framed yellow padded chair" title="Photo by Kam Idris" src="https://fpolli.com/wp-content/uploads/2026/02/hqhx3lbn18-1.jpg"/>
<!-- /wp:generateblocks/media --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"86119646","tagName":"div","styles":{"maxWidth":"calc( var(\u002d\u002dgb-container-width) / 2 )","marginLeft":"auto","marginRight":"auto","@media (max-width:1024px)":{"maxWidth":"100%"}},"css":".gb-element-86119646{margin-left:auto;margin-right:auto;max-width:calc(var(\u002d\u002dgb-container-width) / 2)}@media (max-width:1024px){.gb-element-86119646{max-width:100%}}","metadata":{"name":"inner container 50% max-width"}} -->
<div class="gb-element-86119646"><!-- wp:generateblocks/element {"uniqueId":"bb2d5339","tagName":"div","metadata":{"name":"Content container"}} -->
<div><!-- wp:generateblocks/text {"uniqueId":"a4525085","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">Sessão Primeiros Passos</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"be9a4b64","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">Você sairá dessa sessão com:</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"6e316549","tagName":"div","styles":{"display":"flex","flexDirection":"column","rowGap":"1rem"},"css":".gb-element-6e316549{display:flex;flex-direction:column;row-gap:1rem}"} -->
<div class="gb-element-6e316549"><!-- wp:generateblocks/text {"uniqueId":"8929f8e5","tagName":"li","styles":{"display":"inline-flex","columnGap":"0.5em",".gb-shape svg":{"width":"1em","height":"1em","fill":"currentColor","marginTop":"5px"},"alignItems":"flex-start"},"css":".gb-text-8929f8e5{align-items:flex-start;column-gap:0.5em;display:inline-flex}.gb-text-8929f8e5 .gb-shape svg{width:1em;height:1em;fill:currentColor;margin-top:5px}","globalClasses":["gbp-section__text"]} -->
<li class="gbp-section__text gb-text-8929f8e5"><span class="gb-shape"><svg aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span><span class="gb-text">Diagnóstico da sua fase, prioridades e restrições para decidir com segurança.</span></li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"3c7c67a8","tagName":"li","styles":{"display":"inline-flex","columnGap":"0.5em",".gb-shape svg":{"width":"1em","height":"1em","fill":"currentColor","marginTop":"5px"},"alignItems":"flex-start"},"css":".gb-text-3c7c67a8{align-items:flex-start;column-gap:0.5em;display:inline-flex}.gb-text-3c7c67a8 .gb-shape svg{width:1em;height:1em;fill:currentColor;margin-top:5px}","globalClasses":["gbp-section__text"]} -->
<li class="gbp-section__text gb-text-3c7c67a8"><span class="gb-shape"><svg aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span><span class="gb-text">Mapa de próximos passos: o que decidir e em que ordem.</span></li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"c696df67","tagName":"li","styles":{"display":"inline-flex","columnGap":"0.5em",".gb-shape svg":{"width":"1em","height":"1em","fill":"currentColor","marginTop":"5px"},"alignItems":"flex-start"},"css":".gb-text-c696df67{align-items:flex-start;column-gap:0.5em;display:inline-flex}.gb-text-c696df67 .gb-shape svg{width:1em;height:1em;fill:currentColor;margin-top:5px}","globalClasses":["gbp-section__text"]} -->
<li class="gbp-section__text gb-text-c696df67"><span class="gb-shape"><svg aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span><span class="gb-text">Recomendações iniciais para destravar escolhas e reduzir retrabalho.</span></li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"9b16b0b8","tagName":"li","styles":{"display":"inline-flex","columnGap":"0.5em",".gb-shape svg":{"width":"1em","height":"1em","fill":"currentColor","marginTop":"5px"},"alignItems":"flex-start"},"css":".gb-text-9b16b0b8{align-items:flex-start;column-gap:0.5em;display:inline-flex}.gb-text-9b16b0b8 .gb-shape svg{width:1em;height:1em;fill:currentColor;margin-top:5px}","globalClasses":["gbp-section__text"]} -->
<li class="gbp-section__text gb-text-9b16b0b8"><span class="gb-shape"><svg aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span><span class="gb-text">Clareza de como podemos seguir juntos com seu projeto, se fizer sentido.</span></li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"a87b8c11","tagName":"div","styles":{"paddingTop":"1rem"},"css":".gb-element-a87b8c11{padding-top:1rem}"} -->
<div class="gb-element-a87b8c11"><!-- wp:generateblocks/text {"uniqueId":"5cfced28","tagName":"a","styles":{"@media (max-width:767px)":{"display":"flex","justifyContent":"center"}},"css":"@media (max-width:767px){.gb-text-5cfced28{display:flex;justify-content:center}}","globalClasses":["gbp-button\u002d\u002dprimary"],"htmlAttributes":{"data-gb-overlay":"gb-overlay-1069"}} -->
<a class="gb-text gbp-button--primary gb-text-5cfced28" data-gb-overlay="gb-overlay-1069">reservar sessão inicial</a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element -->
```

