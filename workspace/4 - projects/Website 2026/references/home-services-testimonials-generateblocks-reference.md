---
type: Website Reference
title: GenerateBlocks Home Services and Testimonials Reference
description: Export de uma página Home em markup WordPress/GenerateBlocks para consultar um bloco de serviços com tabs, listagens dinâmicas e testemunhos em carousel.
status: active
owner: Pedro Raimundo
tags: [website, wordpress, generateblocks, reference, services, testimonials]
source: User-pasted attachment
captured: 2026-08-18
---

# GenerateBlocks Home — Services and Testimonials Reference

## Purpose

Guardar como referência técnica um padrão de Home com listagem de projetos, tabs para serviços/ofertas e carousel de testemunhos. O conteúdo, IDs, URLs, imagens, post types e claims pertencem ao site de origem e não estão aprovados para a Clínica Kids e Family.

## Patterns to Reuse

- **Services/offers:** `generateblocks-pro/tabs` com menu de categorias, painéis de conteúdo, queries e loop de cards; adaptar para as três linhas de cuidado e ofertas relacionadas da Clínica Kids e Family.
- **Testimonials:** `generateblocks-pro/carousel` com três itens em desktop, dois em tablet e um em mobile; autoplay/loop devem ser avaliados quanto a acessibilidade e controlo do utilizador.
- **Dynamic content:** queries, loop items, featured images, excerpts e metadados devem ser substituídos pelos post types, campos e taxonomias reais do site.

## Usage Notes

- É uma referência técnica, não uma página aprovada nem conteúdo da Clínica Kids e Family.
- Não copiar URLs, imagens, IDs, classes específicas, textos ou dados do site de origem.
- Confirmar se GenerateBlocks Pro, tabs, carousel, query loop e os respectivos campos estão disponíveis antes da implementação.
- Para testemunhos, usar apenas relatos autorizados; os exemplos atuais em `../post-types/testimonials/testimonials.md` continuam não publicáveis.

## Source Markup

```html
<!-- wp:generateblocks/element {"uniqueId":"966fb3bc","tagName":"div","styles":{"color":"#ffffff","position":"relative","paddingTop":"7rem","backgroundImage":"linear-gradient(to left, rgba(13, 6, 1, 0.54) 0%, rgba(13, 6, 1, 0.54) 100%),url(https://fpolli.com/wp-content/uploads/2026/06/23.jpg)","backgroundSize":"cover,cover","backgroundRepeat":"no-repeat,no-repeat","backgroundPosition":"center,37% 65%","backgroundBlendMode":"normal,"},"css":".gb-element-966fb3bc{background-blend-mode:normal,;color:#ffffff;padding-top:7rem;position:relative;background:linear-gradient(to left,rgba(13,6,1,0.54) 0%,rgba(13,6,1,0.54) 100%),url(https://fpolli.com/wp-content/uploads/2026/06/23.jpg) 37% 65% /cover no-repeat}","globalClasses":["gbp-section"],"metadata":{"name":"Section"}} -->
<div class="gbp-section gb-element-966fb3bc"><!-- wp:generateblocks/element {"uniqueId":"db89dc16","tagName":"div","styles":{"marginLeft":"auto","marginRight":"auto","display":"grid","gridTemplateColumns":"repeat(2, minmax(0, 1fr))","@media (max-width:1024px)":{"display":"block"},"zIndex":"0","position":"relative"},"css":".gb-element-db89dc16{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-left:auto;margin-right:auto;position:relative;z-index:0}@media (max-width:1024px){.gb-element-db89dc16{display:block}}","globalClasses":["gbp-section__inner"],"metadata":{"name":"inner container max-width"}} -->
<div class="gbp-section__inner gb-element-db89dc16"><!-- wp:generateblocks/element {"uniqueId":"a11119d8","tagName":"div","styles":{"@media (max-width:767px)":{"paddingBottom":"4rem"}},"css":"@media (max-width:767px){.gb-element-a11119d8{padding-bottom:4rem}}","metadata":{"name":"Content container"}} -->
<div class="gb-element-a11119d8"><!-- wp:generateblocks/text {"uniqueId":"f673388a","tagName":"h1","globalClasses":["gbp-section__headline"]} -->
<h1 class="gb-text gbp-section__headline">Projetos de Arquitetura e Interiores</h1>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"0002532f","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">Projetos personalizados que unem sensibilidade, criatividade e funcionalidade. Transforme a sua casa em um espaço único e verdadeiramente seu, sem improvisos.</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"a87b8c11","tagName":"div","styles":{"paddingTop":"1rem","@media (max-width:767px)":{"display":"flex","justifyContent":"center"}},"css":".gb-element-a87b8c11{padding-top:1rem}@media (max-width:767px){.gb-element-a87b8c11{display:flex;justify-content:center}}"} -->
<div class="gb-element-a87b8c11"><!-- wp:generateblocks/text {"uniqueId":"5cfced28","tagName":"a","globalClasses":["gbp-button\u002d\u002dprimary"],"htmlAttributes":{"href":"https://fpolli.com/sessao-primeiros-passos/"}} -->
<a class="gb-text gbp-button--primary" href="https://fpolli.com/sessao-primeiros-passos/">reservar sessão inicial</a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"cb7df840","tagName":"div","globalClasses":["gbp-section"],"metadata":{"name":"Section"}} -->
<div class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"2fae652b","tagName":"div","styles":{"textAlign":"center"},"css":".gb-element-2fae652b{text-align:center}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-2fae652b"><!-- wp:generateblocks/text {"uniqueId":"a1f001b2","tagName":"h2"} -->
<h2 class="gb-text">Projetos em destaque</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"30d4ad89","tagName":"p","globalClasses":["subheadline"]} -->
<p class="gb-text subheadline">Antes e depois real</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"85d651a6","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks/query {"uniqueId":"a1d1aea1","tagName":"div","paginationType":"instant","query":{"post_type":["project"],"posts_per_page":"4"}} -->
<div><!-- wp:generateblocks/looper {"uniqueId":"603b2496","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"repeat(4, minmax(0, 1fr))","columnGap":"20px","rowGap":"20px","@media (max-width:767px)":{"gridTemplateColumns":"1fr","display":"grid"},"gridAutoRows":"50px",":nth-child(even)":{"gridColumn":"span 2","gridRow":"span 3"},":nth-child(odd)":{"gridColumn":"span 2","gridRow":"span 6"}},"css":".gb-looper-603b2496{column-gap:20px;display:grid;grid-auto-rows:50px;grid-template-columns:repeat(4,minmax(0,1fr));row-gap:20px}.gb-looper-603b2496 :nth-child(even){grid-column:span 2;grid-row:span 3}.gb-looper-603b2496 :nth-child(odd){grid-column:span 2;grid-row:span 6}@media (max-width:767px){.gb-looper-603b2496{display:grid;grid-template-columns:1fr}}"} -->
<div class="gb-looper-603b2496"><!-- wp:generateblocks/loop-item {"uniqueId":"3735eabd","tagName":"div","styles":{"backgroundColor":"#fafafa","color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase, #FFFFFF)","display":"grid","gridTemplateColumns":"repeat(2, minmax(0, 1fr))","backgroundImage":"var(\u002d\u002dinline-bg-image)","backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundBlendMode":"normal"},"css":".gb-loop-item-3735eabd{background-blend-mode:normal;background-color:#fafafa;background-image:var(\u002d\u002dinline-bg-image);background-position:center;background-repeat:no-repeat;background-size:cover;color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase,#FFFFFF);display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}","htmlAttributes":{"style":"\u002d\u002dinline-bg-image: url({{featured_image key:url}})"}} -->
<div class="gb-loop-item gb-loop-item-3735eabd" style="--inline-bg-image: url({{featured_image key:url}})"><!-- wp:generateblocks/element {"uniqueId":"4885d3a1","tagName":"div","styles":{"display":"flex","flexDirection":"column","justifyContent":"space-between","paddingTop":"20px","paddingRight":"20px","paddingBottom":"20px","paddingLeft":"20px","\u0026:is(:hover, :focus)":{"transition":"all 0.5s ease-in-out 0s","color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase, #FFFFFF)","backgroundImage":"linear-gradient(to left, rgba(0, 0, 0, 0.44) 0%, rgba(0, 0, 0, 0.44) 100%)","backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundPosition":"center"},"color":"rgba(250, 250, 250, 0)","transition":"all 0.5s ease-in-out 0s"},"css":".gb-element-4885d3a1{color:rgba(250,250,250,0);display:flex;flex-direction:column;justify-content:space-between;transition:all 0.5s ease-in-out 0s;padding:20px}.gb-element-4885d3a1:is(:hover,:focus){background-image:linear-gradient(to left,rgba(0,0,0,0.44) 0%,rgba(0,0,0,0.44) 100%);background-position:center;background-repeat:no-repeat;background-size:cover;color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase,#FFFFFF);transition:all 0.5s ease-in-out 0s}"} -->
<div class="gb-element-4885d3a1"><!-- wp:generateblocks/element {"uniqueId":"59848824","tagName":"div","styles":{"textTransform":"none"},"css":".gb-element-59848824{text-transform:none}"} -->
<div class="gb-element-59848824"><!-- wp:generateblocks/text {"uniqueId":"bd72d513","tagName":"a","styles":{"textTransform":"uppercase","letterSpacing":"3px","display":"block","\u0026:is(:hover, :focus)":{"textDecoration":"underline"},"paddingTop":"12px","color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-5, #ffffff)"},"css":".gb-text-bd72d513{color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-5,#ffffff);display:block;letter-spacing:3px;padding-top:12px;text-transform:uppercase}.gb-text-bd72d513:is(:hover,:focus){text-decoration:underline}","htmlAttributes":{"href":"{{post_permalink}}"}} -->
<a class="gb-text gb-text-bd72d513" href="{{post_permalink}}">{{post_title}}</a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"97ea1671","tagName":"div"} -->
<div><!-- wp:generateblocks/element {"uniqueId":"15fe2ede","tagName":"div","styles":{"display":"flex"},"css":".gb-element-15fe2ede{display:flex}"} -->
<div class="gb-element-15fe2ede"><!-- wp:generateblocks/text {"uniqueId":"70fe7715","tagName":"p","styles":{"marginBottom":"30px","fontSize":"14px"},"css":".gb-text-70fe7715{font-size:14px;margin-bottom:30px}"} -->
<p class="gb-text gb-text-70fe7715">{{post_meta key:ano}} | {{post_meta key:local}}</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/loop-item --></div>
<!-- /wp:generateblocks/looper --></div>
<!-- /wp:generateblocks/query --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"c56f0473","tagName":"div","styles":{"display":"flex","justifyContent":"center","paddingTop":"4rem"},"css":".gb-element-c56f0473{display:flex;justify-content:center;padding-top:4rem}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-c56f0473"><!-- wp:generateblocks/text {"uniqueId":"5a738202","tagName":"a","globalClasses":["gbp-button\u002d\u002dprimary"],"htmlAttributes":{"href":"https://fpolli.com/projetos/"}} -->
<a class="gb-text gbp-button--primary" href="https://fpolli.com/projetos/">Ver mais Projetos</a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"26a5a988","tagName":"div","globalClasses":["gbp-section"]} -->
<div class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"aad06ca4","tagName":"div","styles":{"textAlign":"center"},"css":".gb-element-aad06ca4{text-align:center}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-aad06ca4"><!-- wp:generateblocks/text {"uniqueId":"815a31e8","tagName":"h2"} -->
<h2 class="gb-text">Serviços</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"4deacced","tagName":"p","globalClasses":["subheadline"]} -->
<p class="gb-text subheadline">Soluções para cada etapa do seu projeto</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"a0fe587f","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks-pro/tabs {"uniqueId":"d250e0d0","tagName":"div","styles":{"display":"flex","flexDirection":"row","@media (max-width: 768px)":{"flexDirection":"column"}},"css":".gb-tabs-d250e0d0{display:flex;flex-direction:row}@media (max-width:768px){.gb-tabs-d250e0d0{flex-direction:column}}","htmlAttributes":{"data-opened-tab":"1","data-transition":"fade"}} -->
<div class="gb-tabs gb-tabs-d250e0d0" data-opened-tab="1" data-transition="fade"><!-- wp:generateblocks-pro/tabs-menu {"uniqueId":"110df5dd","tagName":"div","styles":{"display":"flex","flexDirection":"column","@media (max-width:767px)":{"flexDirection":"column","overflowX":"auto","maxWidth":"100%","width":"auto"},"alignItems":"flex-end"},"css":".gb-tabs__menu-110df5dd{align-items:flex-end;display:flex;flex-direction:column}@media (max-width:767px){.gb-tabs__menu-110df5dd{flex-direction:column;max-width:100%;overflow-x:auto;width:auto}}","htmlAttributes":{"role":"tablist","aria-orientation":"vertical"}} -->
<div class="gb-tabs__menu gb-tabs__menu-110df5dd" role="tablist" aria-orientation="vertical"><!-- wp:generateblocks-pro/tab-menu-item {"uniqueId":"2abb4ce6","tagName":"div","styles":{"\u0026:is(.gb-block-is-current, .gb-block-is-current:hover, .gb-block-is-current:focus)":{"backgroundColor":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1, #b0664b)"}},"css":".gb-tabs__menu-item-2abb4ce6:is(.gb-block-is-current,.gb-block-is-current:hover,.gb-block-is-current:focus){background-color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1,#b0664b)}","globalClasses":["tabmenu1"],"htmlAttributes":{"role":"tab","id":"gb-tab-menu-item-2abb4ce6"},"tabItemOpen":true} -->
<div class="gb-tabs__menu-item tabmenu1 gb-tabs__menu-item-2abb4ce6" role="tab" id="gb-tab-menu-item-2abb4ce6"><!-- wp:generateblocks/text {"uniqueId":"fefd2961","tagName":"span"} -->
<span class="gb-text">Arquitetura</span>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks-pro/tab-menu-item -->

<!-- wp:generateblocks-pro/tab-menu-item {"uniqueId":"23be61cc","tagName":"div","styles":{"\u0026:is(.gb-block-is-current, .gb-block-is-current:hover, .gb-block-is-current:focus)":{"backgroundColor":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1, #b0664b)"}},"css":".gb-tabs__menu-item-23be61cc:is(.gb-block-is-current,.gb-block-is-current:hover,.gb-block-is-current:focus){background-color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1,#b0664b)}","globalClasses":["tabmenu1"],"htmlAttributes":{"role":"tab","id":"gb-tab-menu-item-23be61cc"}} -->
<div class="gb-tabs__menu-item tabmenu1 gb-tabs__menu-item-23be61cc" role="tab" id="gb-tab-menu-item-23be61cc"><!-- wp:generateblocks/text {"uniqueId":"46b9e55c","tagName":"span"} -->
<span class="gb-text">Interiores</span>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks-pro/tab-menu-item -->

<!-- wp:generateblocks-pro/tab-menu-item {"uniqueId":"7893f218","tagName":"div","styles":{"\u0026:is(.gb-block-is-current, .gb-block-is-current:hover, .gb-block-is-current:focus)":{"backgroundColor":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1, #b0664b)"}},"css":".gb-tabs__menu-item-7893f218:is(.gb-block-is-current,.gb-block-is-current:hover,.gb-block-is-current:focus){background-color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1,#b0664b)}","globalClasses":["tabmenu1"],"htmlAttributes":{"role":"tab","id":"gb-tab-menu-item-7893f218"}} -->
<div class="gb-tabs__menu-item tabmenu1 gb-tabs__menu-item-7893f218" role="tab" id="gb-tab-menu-item-7893f218"><!-- wp:paragraph -->
<p>Regularização</p>
<!-- /wp:paragraph --></div>
<!-- /wp:generateblocks-pro/tab-menu-item -->

<!-- wp:generateblocks-pro/tab-menu-item {"uniqueId":"73e4de38","tagName":"div","styles":{"\u0026:is(.gb-block-is-current, .gb-block-is-current:hover, .gb-block-is-current:focus)":{"backgroundColor":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1, #b0664b)"}},"css":".gb-tabs__menu-item-73e4de38:is(.gb-block-is-current,.gb-block-is-current:hover,.gb-block-is-current:focus){background-color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1,#b0664b)}","globalClasses":["tabmenu1"],"htmlAttributes":{"role":"tab","id":"gb-tab-menu-item-73e4de38"}} -->
<div class="gb-tabs__menu-item tabmenu1 gb-tabs__menu-item-73e4de38" role="tab" id="gb-tab-menu-item-73e4de38"><!-- wp:generateblocks/text {"uniqueId":"74f3447b","tagName":"span"} -->
<span class="gb-text">Obra</span>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks-pro/tab-menu-item --></div>
<!-- /wp:generateblocks-pro/tabs-menu -->

<!-- wp:generateblocks-pro/tab-items {"uniqueId":"5c1656ab","tagName":"div","styles":{"flexGrow":"1","backgroundColor":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-5, #ffffff)"},"css":".gb-tabs__items-5c1656ab{background-color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-5,#ffffff);flex-grow:1}"} -->
<div class="gb-tabs__items gb-tabs__items-5c1656ab"><!-- wp:generateblocks-pro/tab-item {"uniqueId":"f91ec1ba","tagName":"div","styles":{"paddingTop":"1em","paddingRight":"1em","paddingBottom":"1em","paddingLeft":"1em"},"css":".gb-tabs__item-f91ec1ba{padding:1em}","htmlAttributes":{"role":"tabpanel","id":"gb-tab-item-f91ec1ba"},"tabItemOpen":true} -->
<div class="gb-tabs__item gb-tabs__item-f91ec1ba" role="tabpanel" id="gb-tab-item-f91ec1ba"><!-- wp:generateblocks/query {"uniqueId":"2d17ae56","tagName":"div","query":{"post_type":["page"],"posts_per_page":10,"post__in":[222,144],"order":"ASC"}} -->
<div><!-- wp:generateblocks/looper {"uniqueId":"cb0716c6","tagName":"div"} -->
<div><!-- wp:generateblocks/loop-item {"uniqueId":"a3aff875","tagName":"div","styles":{"@media (max-width:767px)":{"display":"grid"}},"css":"@media (max-width:767px){.gb-loop-item-a3aff875{display:grid}}"} -->
<div class="gb-loop-item gb-loop-item-a3aff875"><!-- wp:generateblocks/element {"uniqueId":"e2fcc64d","tagName":"div","styles":{"display":"grid","alignItems":"center","justifyContent":"space-between","marginTop":"1rem","marginRight":"1rem","marginBottom":"1rem","marginLeft":"1rem","gridTemplateColumns":"1fr 3fr","columnGap":"1rem","rowGap":"1rem","@media (max-width:767px)":{"display":"block"}},"css":".gb-element-e2fcc64d{align-items:center;column-gap:1rem;display:grid;grid-template-columns:1fr 3fr;justify-content:space-between;row-gap:1rem;margin:1rem}@media (max-width:767px){.gb-element-e2fcc64d{display:block}}"} -->
<div class="gb-element-e2fcc64d"><!-- wp:generateblocks/element {"uniqueId":"82e30d33","tagName":"div"} -->
<div><!-- wp:generateblocks/media {"uniqueId":"e7808c7a","tagName":"img","styles":{"height":"auto","maxWidth":"100%","objectFit":"cover","aspectRatio":"1/1","@media (max-width:1024px)":{"aspectRatio":"9/16"},"@media (max-width:767px)":{"aspectRatio":"16/9"}},"css":".gb-media-e7808c7a{aspect-ratio:1/1;height:auto;max-width:100%;object-fit:cover}@media (max-width:1024px){.gb-media-e7808c7a{aspect-ratio:9/16}}@media (max-width:767px){.gb-media-e7808c7a{aspect-ratio:16/9}}","htmlAttributes":{"alt":"","src":"{{featured_image key:url}}"},"linkHtmlAttributes":{"href":""}} -->
<img class="gb-media-e7808c7a" alt="" src="{{featured_image key:url}}"/>
<!-- /wp:generateblocks/media --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"714321d2","tagName":"div","styles":{"@media (max-width:767px)":{"textAlign":"center"}},"css":"@media (max-width:767px){.gb-element-714321d2{text-align:center}}"} -->
<div class="gb-element-714321d2"><!-- wp:generateblocks/text {"uniqueId":"7552c412","tagName":"h3","styles":{"display":"block"},"css":".gb-text-7552c412{display:block}","htmlAttributes":{"href":"{{post_permalink}}"}} -->
<h3 class="gb-text gb-text-7552c412" href="{{post_permalink}}">{{post_title}}</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"6186c0d3","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">{{post_meta key:page_exerpt}}</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"9f0bd2ed","tagName":"a","styles":{"display":"inline-flex","alignItems":"center","columnGap":"0.5em",".gb-shape svg":{"width":"1em","height":"1em","fill":"currentColor"},"marginTop":"20px"},"css":".gb-text-9f0bd2ed{align-items:center;column-gap:0.5em;display:inline-flex;margin-top:20px}.gb-text-9f0bd2ed .gb-shape svg{width:1em;height:1em;fill:currentColor}","globalClasses":["gbp-section__text","learnmorebutton"],"htmlAttributes":{"href":"{{post_permalink}}"}} -->
<a class="gbp-section__text learnmorebutton gb-text-9f0bd2ed" href="{{post_permalink}}"><span class="gb-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path></svg></span><span class="gb-text">saiba mais</span></a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/loop-item --></div>
<!-- /wp:generateblocks/looper --></div>
<!-- /wp:generateblocks/query --></div>
<!-- /wp:generateblocks-pro/tab-item -->

<!-- wp:generateblocks-pro/tab-item {"uniqueId":"af4c9311","tagName":"div","styles":{"paddingTop":"1em","paddingRight":"1em","paddingBottom":"1em","paddingLeft":"1em"},"css":".gb-tabs__item-af4c9311{padding:1em}","htmlAttributes":{"role":"tabpanel","id":"gb-tab-item-af4c9311"}} -->
<div class="gb-tabs__item gb-tabs__item-af4c9311" role="tabpanel" id="gb-tab-item-af4c9311"><!-- wp:generateblocks/query {"uniqueId":"1241c94d","tagName":"div","query":{"post_type":["page"],"posts_per_page":10,"post__in":[140,142],"orderby":"title"}} -->
<div><!-- wp:generateblocks/looper {"uniqueId":"95fe6857","tagName":"div"} -->
<div><!-- wp:generateblocks/loop-item {"uniqueId":"ee051972","tagName":"div","styles":{"@media (max-width:767px)":{"display":"grid"}},"css":"@media (max-width:767px){.gb-loop-item-ee051972{display:grid}}"} -->
<div class="gb-loop-item gb-loop-item-ee051972"><!-- wp:generateblocks/element {"uniqueId":"f4bbcc21","tagName":"div","styles":{"display":"grid","alignItems":"center","justifyContent":"space-between","marginTop":"1rem","marginRight":"1rem","marginBottom":"1rem","marginLeft":"1rem","gridTemplateColumns":"1fr 3fr","columnGap":"1rem","rowGap":"1rem","@media (max-width:767px)":{"display":"block"}},"css":".gb-element-f4bbcc21{align-items:center;column-gap:1rem;display:grid;grid-template-columns:1fr 3fr;justify-content:space-between;row-gap:1rem;margin:1rem}@media (max-width:767px){.gb-element-f4bbcc21{display:block}}"} -->
<div class="gb-element-f4bbcc21"><!-- wp:generateblocks/element {"uniqueId":"18aa4382","tagName":"div"} -->
<div><!-- wp:generateblocks/media {"uniqueId":"a37b1f79","tagName":"img","styles":{"height":"auto","maxWidth":"100%","objectFit":"cover","aspectRatio":"1/1","@media (max-width:1024px)":{"aspectRatio":"9/16"},"@media (max-width:767px)":{"aspectRatio":"16/9"}},"css":".gb-media-a37b1f79{aspect-ratio:1/1;height:auto;max-width:100%;object-fit:cover}@media (max-width:1024px){.gb-media-a37b1f79{aspect-ratio:9/16}}@media (max-width:767px){.gb-media-a37b1f79{aspect-ratio:16/9}}","htmlAttributes":{"alt":"","src":"{{featured_image key:url}}"},"linkHtmlAttributes":{"href":""}} -->
<img class="gb-media-a37b1f79" alt="" src="{{featured_image key:url}}"/>
<!-- /wp:generateblocks/media --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"8661cb74","tagName":"div","styles":{"@media (max-width:767px)":{"textAlign":"center"}},"css":"@media (max-width:767px){.gb-element-8661cb74{text-align:center}}"} -->
<div class="gb-element-8661cb74"><!-- wp:generateblocks/text {"uniqueId":"c6f5b3a1","tagName":"h3","styles":{"display":"block"},"css":".gb-text-c6f5b3a1{display:block}","htmlAttributes":{"href":"{{post_permalink}}"}} -->
<h3 class="gb-text gb-text-c6f5b3a1" href="{{post_permalink}}">{{post_title}}</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"254994ad","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">{{post_meta key:page_exerpt}}</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"9b6f2532","tagName":"a","styles":{"display":"inline-flex","alignItems":"center","columnGap":"0.5em",".gb-shape svg":{"width":"1em","height":"1em","fill":"currentColor"},"marginTop":"20px"},"css":".gb-text-9b6f2532{align-items:center;column-gap:0.5em;display:inline-flex;margin-top:20px}.gb-text-9b6f2532 .gb-shape svg{width:1em;height:1em;fill:currentColor}","globalClasses":["gbp-section__text","learnmorebutton"],"htmlAttributes":{"href":"{{post_permalink}}"}} -->
<a class="gbp-section__text learnmorebutton gb-text-9b6f2532" href="{{post_permalink}}"><span class="gb-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path></svg></span><span class="gb-text">saiba mais</span></a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/loop-item --></div>
<!-- /wp:generateblocks/looper --></div>
<!-- /wp:generateblocks/query --></div>
<!-- /wp:generateblocks-pro/tab-item -->

<!-- wp:generateblocks-pro/tab-item {"uniqueId":"1e48422e","tagName":"div","styles":{"paddingTop":"1em","paddingRight":"1em","paddingBottom":"1em","paddingLeft":"1em"},"css":".gb-tabs__item-1e48422e{padding:1em}","htmlAttributes":{"role":"tabpanel","id":"gb-tab-item-1e48422e"}} -->
<div class="gb-tabs__item gb-tabs__item-1e48422e" role="tabpanel" id="gb-tab-item-1e48422e"><!-- wp:generateblocks/query {"uniqueId":"6da78d45","tagName":"div","query":{"post_type":["page"],"posts_per_page":10,"post__in":[148],"order":"ASC"}} -->
<div><!-- wp:generateblocks/looper {"uniqueId":"682822b3","tagName":"div"} -->
<div><!-- wp:generateblocks/loop-item {"uniqueId":"40023078","tagName":"div","styles":{"@media (max-width:767px)":{"display":"grid"}},"css":"@media (max-width:767px){.gb-loop-item-40023078{display:grid}}"} -->
<div class="gb-loop-item gb-loop-item-40023078"><!-- wp:generateblocks/element {"uniqueId":"cc8caf6b","tagName":"div","styles":{"display":"grid","alignItems":"center","justifyContent":"space-between","marginTop":"1rem","marginRight":"1rem","marginBottom":"1rem","marginLeft":"1rem","gridTemplateColumns":"1fr 3fr","columnGap":"1rem","rowGap":"1rem","@media (max-width:767px)":{"display":"block"}},"css":".gb-element-cc8caf6b{align-items:center;column-gap:1rem;display:grid;grid-template-columns:1fr 3fr;justify-content:space-between;row-gap:1rem;margin:1rem}@media (max-width:767px){.gb-element-cc8caf6b{display:block}}"} -->
<div class="gb-element-cc8caf6b"><!-- wp:generateblocks/element {"uniqueId":"44286499","tagName":"div"} -->
<div><!-- wp:generateblocks/media {"uniqueId":"ab18f2bf","tagName":"img","styles":{"height":"auto","maxWidth":"100%","objectFit":"cover","aspectRatio":"1/1","@media (max-width:1024px)":{"aspectRatio":"9/16"},"@media (max-width:767px)":{"aspectRatio":"16/9"}},"css":".gb-media-ab18f2bf{aspect-ratio:1/1;height:auto;max-width:100%;object-fit:cover}@media (max-width:1024px){.gb-media-ab18f2bf{aspect-ratio:9/16}}@media (max-width:767px){.gb-media-ab18f2bf{aspect-ratio:16/9}}","htmlAttributes":{"alt":"","src":"{{featured_image key:url}}"},"linkHtmlAttributes":{"href":""}} -->
<img class="gb-media-ab18f2bf" alt="" src="{{featured_image key:url}}"/>
<!-- /wp:generateblocks/media --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"b09aa5f3","tagName":"div","styles":{"@media (max-width:767px)":{"textAlign":"center"}},"css":"@media (max-width:767px){.gb-element-b09aa5f3{text-align:center}}"} -->
<div class="gb-element-b09aa5f3"><!-- wp:generateblocks/text {"uniqueId":"54b69312","tagName":"h3","styles":{"display":"block"},"css":".gb-text-54b69312{display:block}","htmlAttributes":{"href":"{{post_permalink}}"}} -->
<h3 class="gb-text gb-text-54b69312" href="{{post_permalink}}">{{post_title}}</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"a8c2a825","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">{{post_meta key:page_exerpt}}</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"89353239","tagName":"a","styles":{"display":"inline-flex","alignItems":"center","columnGap":"0.5em",".gb-shape svg":{"width":"1em","height":"1em","fill":"currentColor"},"marginTop":"20px"},"css":".gb-text-89353239{align-items:center;column-gap:0.5em;display:inline-flex;margin-top:20px}.gb-text-89353239 .gb-shape svg{width:1em;height:1em;fill:currentColor}","globalClasses":["gbp-section__text","learnmorebutton"],"htmlAttributes":{"href":"{{post_permalink}}"}} -->
<a class="gbp-section__text learnmorebutton gb-text-89353239" href="{{post_permalink}}"><span class="gb-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path></svg></span><span class="gb-text">saiba mais</span></a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/loop-item --></div>
<!-- /wp:generateblocks/looper --></div>
<!-- /wp:generateblocks/query --></div>
<!-- /wp:generateblocks-pro/tab-item -->

<!-- wp:generateblocks-pro/tab-item {"uniqueId":"1c0dcaba","tagName":"div","styles":{"paddingTop":"1em","paddingRight":"1em","paddingBottom":"1em","paddingLeft":"1em"},"css":".gb-tabs__item-1c0dcaba{padding:1em}","htmlAttributes":{"role":"tabpanel","id":"gb-tab-item-1c0dcaba"}} -->
<div class="gb-tabs__item gb-tabs__item-1c0dcaba" role="tabpanel" id="gb-tab-item-1c0dcaba"><!-- wp:generateblocks/query {"uniqueId":"804d19fb","tagName":"div","query":{"post_type":["page"],"posts_per_page":10,"post__in":[224,226],"order":"ASC"}} -->
<div><!-- wp:generateblocks/looper {"uniqueId":"e2975038","tagName":"div"} -->
<div><!-- wp:generateblocks/loop-item {"uniqueId":"2318eaab","tagName":"div","styles":{"@media (max-width:767px)":{"display":"grid"}},"css":"@media (max-width:767px){.gb-loop-item-2318eaab{display:grid}}"} -->
<div class="gb-loop-item gb-loop-item-2318eaab"><!-- wp:generateblocks/element {"uniqueId":"06b662fa","tagName":"div","styles":{"display":"grid","alignItems":"center","justifyContent":"space-between","marginTop":"1rem","marginRight":"1rem","marginBottom":"1rem","marginLeft":"1rem","gridTemplateColumns":"1fr 3fr","columnGap":"1rem","rowGap":"1rem","@media (max-width:767px)":{"display":"block"}},"css":".gb-element-06b662fa{align-items:center;column-gap:1rem;display:grid;grid-template-columns:1fr 3fr;justify-content:space-between;row-gap:1rem;margin:1rem}@media (max-width:767px){.gb-element-06b662fa{display:block}}"} -->
<div class="gb-element-06b662fa"><!-- wp:generateblocks/element {"uniqueId":"9a84cac7","tagName":"div"} -->
<div><!-- wp:generateblocks/media {"uniqueId":"2dcb7e17","tagName":"img","styles":{"height":"auto","maxWidth":"100%","objectFit":"cover","aspectRatio":"1/1","@media (max-width:1024px)":{"aspectRatio":"9/16"},"@media (max-width:767px)":{"aspectRatio":"16/9"}},"css":".gb-media-2dcb7e17{aspect-ratio:1/1;height:auto;max-width:100%;object-fit:cover}@media (max-width:1024px){.gb-media-2dcb7e17{aspect-ratio:9/16}}@media (max-width:767px){.gb-media-2dcb7e17{aspect-ratio:16/9}}","htmlAttributes":{"alt":"","src":"{{featured_image key:url}}"},"linkHtmlAttributes":{"href":""}} -->
<img class="gb-media-2dcb7e17" alt="" src="{{featured_image key:url}}"/>
<!-- /wp:generateblocks/media --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"7ae91989","tagName":"div","styles":{"@media (max-width:767px)":{"textAlign":"center"}},"css":"@media (max-width:767px){.gb-element-7ae91989{text-align:center}}"} -->
<div class="gb-element-7ae91989"><!-- wp:generateblocks/text {"uniqueId":"451ce485","tagName":"h3","styles":{"display":"block"},"css":".gb-text-451ce485{display:block}","htmlAttributes":{"href":"{{post_permalink}}"}} -->
<h3 class="gb-text gb-text-451ce485" href="{{post_permalink}}">{{post_title}}</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"d0c00c94","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">{{post_meta key:page_exerpt}}</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"18311b29","tagName":"a","styles":{"display":"inline-flex","alignItems":"center","columnGap":"0.5em",".gb-shape svg":{"width":"1em","height":"1em","fill":"currentColor"}},"css":".gb-text-18311b29{align-items:center;column-gap:0.5em;display:inline-flex}.gb-text-18311b29 .gb-shape svg{width:1em;height:1em;fill:currentColor}","globalClasses":["gbp-section__text","learnmorebutton"],"htmlAttributes":{"href":"{{post_permalink}}"}} -->
<a class="gbp-section__text learnmorebutton gb-text-18311b29" href="{{post_permalink}}"><span class="gb-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path></svg></span><span class="gb-text">saiba mais</span></a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/loop-item --></div>
<!-- /wp:generateblocks/looper --></div>
<!-- /wp:generateblocks/query --></div>
<!-- /wp:generateblocks-pro/tab-item --></div>
<!-- /wp:generateblocks-pro/tab-items --></div>
<!-- /wp:generateblocks-pro/tabs --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"df012d5b","tagName":"div","globalClasses":["gbp-section"]} -->
<div class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"ed5c8bbb","tagName":"div","styles":{"textAlign":"center"},"css":".gb-element-ed5c8bbb{text-align:center}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-ed5c8bbb"><!-- wp:generateblocks/element {"uniqueId":"df573b60","tagName":"div"} -->
<div><!-- wp:generateblocks/text {"uniqueId":"d5aecfea","tagName":"h2"} -->
<h2 class="gb-text">Depoimentos</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"79611ae7","tagName":"p","globalClasses":["subheadline"]} -->
<p class="gb-text subheadline">Experiências reais de clientes</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"2602095c","tagName":"div"} -->
<div><!-- wp:generateblocks-pro/carousel {"uniqueId":"482be3a3","styles":{"\u002d\u002dgb-carousel-slides-per-view":"3","\u002d\u002dgb-carousel-slide-gap":"24px","@media (max-width:1024px)":{"\u002d\u002dgb-carousel-slides-per-view":"2","\u002d\u002dgb-carousel-slide-gap":"20px"},"@media (max-width:767px)":{"\u002d\u002dgb-carousel-slides-per-view":"1","\u002d\u002dgb-carousel-slide-gap":"16px"}},"css":".gb-carousel-482be3a3{\u002d\u002dgb-carousel-slide-gap:24px;\u002d\u002dgb-carousel-slides-per-view:3}@media (max-width:1024px){.gb-carousel-482be3a3{\u002d\u002dgb-carousel-slide-gap:20px;\u002d\u002dgb-carousel-slides-per-view:2}}@media (max-width:767px){.gb-carousel-482be3a3{\u002d\u002dgb-carousel-slide-gap:16px;\u002d\u002dgb-carousel-slides-per-view:1}}","tagName":"div","htmlAttributes":{"data-slides-per-view":"3","data-space-between":"24px","data-loop":"true","data-autoplay-disable-on-interaction":"false","data-autoplay-delay":"0","data-autoplay-enabled":"true","data-free-mode":"true","data-free-mode-sticky":"false","data-autoplay-pause-on-mouse-enter":"false","data-speed":"8000"}} -->
<div class="gb-carousel gb-carousel-482be3a3" data-slides-per-view="3" data-space-between="24px" data-loop="true" data-autoplay-disable-on-interaction="false" data-autoplay-delay="0" data-autoplay-enabled="true" data-free-mode="true" data-free-mode-sticky="false" data-autoplay-pause-on-mouse-enter="false" data-speed="8000" data-carousel-id="482be3a3"><!-- wp:generateblocks/query {"uniqueId":"86351c1f","tagName":"div","query":{"post_type":["testimonial"],"posts_per_page":12,"orderby":"date","order":"DESC"}} -->
<div><!-- wp:generateblocks/looper {"uniqueId":"ce0e54e2","tagName":"div","className":"gb-carousel-items"} -->
<div class="gb-carousel-items"><!-- wp:generateblocks/loop-item {"uniqueId":"d9dfa027","tagName":"div","className":"gb-carousel-item"} -->
<div class="gb-loop-item gb-carousel-item"><!-- wp:generateblocks/element {"uniqueId":"0a832cdb","tagName":"div","styles":{"paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","backgroundColor":"#fafafa","borderTopColor":"#e0e0e0","borderRightColor":"#e0e0e0","borderBottomColor":"#e0e0e0","borderLeftColor":"#e0e0e0","height":"100%","display":"flex","flexDirection":"column","alignItems":"center","rowGap":"1.5rem"},"css":".gb-element-0a832cdb{align-items:center;background-color:#fafafa;border-bottom-color:#e0e0e0;border-left-color:#e0e0e0;border-right-color:#e0e0e0;border-top-color:#e0e0e0;display:flex;flex-direction:column;height:100%;row-gap:1.5rem;padding:2rem}"} -->
<div class="gb-element-0a832cdb"><!-- wp:generateblocks/element {"uniqueId":"63c780f8","tagName":"div"} -->
<div><!-- wp:generateblocks/text {"uniqueId":"ee39dbbf","tagName":"div","globalClasses":["gbp-section__text"]} -->
<div class="gb-text gbp-section__text">"{{post_excerpt length:20}}"</div>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"484426b5","tagName":"div"} -->
<div><!-- wp:generateblocks/media {"uniqueId":"b0e11b94","tagName":"img","styles":{"aspectRatio":"1/1","width":"50%","height":"50%","borderTopLeftRadius":"500px","borderTopRightRadius":"500px","borderBottomRightRadius":"500px","borderBottomLeftRadius":"500px","objectFit":"cover"},"css":".gb-media-b0e11b94{aspect-ratio:1/1;height:50%;object-fit:cover;width:50%;border-radius:500px}","htmlAttributes":{"alt":"{{post_title}}","src":"{{featured_image key:url}}"}} -->
<img class="gb-media-b0e11b94" alt="{{post_title}}" src="{{featured_image key:url}}"/>
<!-- /wp:generateblocks/media --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"c6d91976","tagName":"div","styles":{"display":"flex","flexDirection":"column","rowGap":"0.5rem","top":"-8px"},"css":".gb-element-c6d91976{display:flex;flex-direction:column;row-gap:0.5rem;top:-8px}"} -->
<div class="gb-element-c6d91976"><!-- wp:generateblocks/text {"uniqueId":"42dacd96","tagName":"div"} -->
<div class="gb-text">{{post_meta key:user_name}}</div>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"1dd563e2","tagName":"div","globalClasses":["gbp-section__text"]} -->
<div class="gb-text gbp-section__text">{{post_meta key:user_position}}</div>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/loop-item --></div>
<!-- /wp:generateblocks/looper --></div>
<!-- /wp:generateblocks/query -->

<!-- wp:generateblocks-pro/carousel-pagination {"uniqueId":"5ad0cccf","styles":{"marginTop":"20px"},"css":".gb-carousel-pagination-5ad0cccf{margin-top:20px}","tagName":"nav","htmlAttributes":{"data-pagination-type":"bullets"}} -->
<nav class="gb-carousel-pagination gb-carousel-pagination-5ad0cccf" data-pagination-type="bullets"><span class="gb-carousel-pagination-content"></span></nav>
<!-- /wp:generateblocks-pro/carousel-pagination --></div>
<!-- /wp:generateblocks-pro/carousel --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element -->
```
