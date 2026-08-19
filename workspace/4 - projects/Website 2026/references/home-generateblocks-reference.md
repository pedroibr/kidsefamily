---
type: Website Reference
title: GenerateBlocks Home Page Reference
description: Export de uma página Home em markup WordPress/GenerateBlocks para consulta de estrutura, tags, classes, atributos e padrões de blocos.
status: active
owner: Pedro Raimundo
tags: [website, wordpress, generateblocks, reference]
source: User-pasted attachment
captured: 2026-08-18
---

# GenerateBlocks Home Page Reference

## Purpose

Usar este export para consultar como uma página WordPress com GenerateBlocks organiza secções, elementos, textos, classes globais, CSS, atributos HTML e referências de blocos reutilizáveis.

## Usage Notes

- É uma referência técnica, não uma página aprovada nem conteúdo da Clínica Kids e Family.
- Ao adaptar, manter a lógica de blocos apenas quando ela fizer sentido para a nova página e substituir textos, URLs, imagens, IDs e classes específicas.
- Confirmar os blocos e plugins disponíveis no site antes de reutilizar markup.

## Source Markup

```html
<!-- wp:generateblocks/element {"uniqueId":"homehero01","tagName":"section","styles":{"backgroundImage":"linear-gradient(to right, #000000 17%, rgba(10, 10, 10, 0.5) 100%),url(https://fennecservices.com.au/wp-content/uploads/2024/02/Design-sem-nome-1.jpg)","backgroundSize":"cover,cover","backgroundPosition":"center,83% 1%","backgroundRepeat":"no-repeat,no-repeat","@media (max-width:767px)":{"paddingTop":"1.7rem","paddingBottom":"1.7rem"},"paddingTop":"2rem","paddingBottom":"2rem"},"css":".gb-element-homehero01{background:linear-gradient(to right,#000000 17%,rgba(10,10,10,0.5) 100%),url(https://fennecservices.com.au/wp-content/uploads/2024/02/Design-sem-nome-1.jpg) 83% 1% /cover no-repeat;padding-bottom:2rem;padding-top:2rem}@media (max-width:767px){.gb-element-homehero01{padding-bottom:1.7rem;padding-top:1.7rem}}","globalClasses":["gbp-section"]} -->
<section class="gbp-section gb-element-homehero01"><!-- wp:generateblocks/element {"uniqueId":"homeheroin01","tagName":"div","styles":{"paddingTop":"4rem","paddingBottom":"4rem","color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase, #FFFFFF)"},"css":".gb-element-homeheroin01{color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase,#FFFFFF);padding-bottom:4rem;padding-top:4rem}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-homeheroin01"><!-- wp:generateblocks/element {"uniqueId":"29ee2151","tagName":"div","styles":{"maxWidth":"720px"},"css":".gb-element-29ee2151{max-width:720px}"} -->
<div class="gb-element-29ee2151"><!-- wp:generateblocks/text {"uniqueId":"home-hero-eyebrow","tagName":"h1","globalClasses":["gbp-section__tagline"]} -->
<h1 class="gb-text gbp-section__tagline">
Welcome to Fennec Services
</h1>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-hero-title","tagName":"p","styles":{"color":"#FFFFFF","fontSize":"clamp(42px,6vw,60px)","lineHeight":"1.05","fontWeight":"500","marginBottom":"16px"},"css":".gb-text-home-hero-title{color:#FFFFFF;font-size:clamp(42px,6vw,60px);font-weight:500;line-height:1.05;margin-bottom:16px}"} -->
<p class="gb-text gb-text-home-hero-title">
Build with confidence, from city sites to remote projects
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-hero-copy","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
Fennec Services delivers residential construction, major renovations, commercial builds and remote site projects with practical planning, clear communication and disciplined delivery.
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"homeheroact01","tagName":"div","styles":{"display":"flex","flexWrap":"wrap","alignItems":"center","flexDirection":"row","columnGap":"24px","textAlign":"center","@media (max-width:767px)":{"textAlign":"center"},"rowGap":"24px","marginTop":"3rem"},"css":".gb-element-homeheroact01{align-items:center;column-gap:24px;display:flex;flex-direction:row;flex-wrap:wrap;margin-top:3rem;row-gap:24px;text-align:center}@media (max-width:767px){.gb-element-homeheroact01{text-align:center}}"} -->
<div class="gb-element-homeheroact01"><!-- wp:generateblocks/text {"uniqueId":"home-hero-quote","tagName":"a","globalClasses":["gbp-button\u002d\u002dprimary"],"htmlAttributes":{"href":"https://fennecservices.com.au/contact/","aria-label":"Request a quote"}} -->
<a class="gb-text gbp-button--primary" href="https://fennecservices.com.au/contact/" aria-label="Request a quote">
Request a quote
</a>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-hero-workforce","tagName":"a","globalClasses":["gbp-button\u002d\u002dsecondary"],"htmlAttributes":{"href":"https://jobs.fennecservices.com.au/","aria-label":"Join the workforce"}} -->
<a class="gb-text gbp-button--secondary" href="https://jobs.fennecservices.com.au/" aria-label="Join the workforce">
Join the workforce
</a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"homeintro01","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"homeintroin01","tagName":"div","styles":{"textAlign":"center","maxWidth":"720px"},"css":".gb-element-homeintroin01{max-width:720px;text-align:center}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-homeintroin01"><!-- wp:generateblocks/text {"uniqueId":"home-intro-kicker","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">Built on trust and powered by systems</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-intro-title","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">
Small enough to care. Big enough to deliver
</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-intro-copy","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
From first conversation to final handover, we bring the right people, information and decisions together early. That means fewer surprises, better coordination and a build that keeps moving.
</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"a1a4a5da","tagName":"section","styles":{"position":"relative","overflow":"hidden","paddingTop":"clamp(1em,8vw,3rem)","paddingBottom":"clamp(1rem,8vw,3rem)"},"css":".gb-element-a1a4a5da{overflow:hidden;padding-bottom:clamp(1rem,8vw,3rem);padding-top:clamp(1em,8vw,3rem);position:relative}","globalClasses":["gbp-section"],"htmlAttributes":{"data-video-reveal":"scroll"}} -->
<section class="gbp-section gb-element-a1a4a5da" data-video-reveal="scroll"><!-- wp:generateblocks/element {"uniqueId":"fe4a7b09","tagName":"div","styles":{"overflow":"hidden","aspectRatio":"16 / 9","backgroundColor":"#111111","maxWidth":"720px"},"css":".gb-element-fe4a7b09{aspect-ratio:16/9;background-color:#111111;max-width:720px;overflow:hidden}","globalClasses":["gbp-section__inner"],"htmlAttributes":{"data-video-frame":"true"}} -->
<div class="gbp-section__inner gb-element-fe4a7b09" data-video-frame="true"><!-- wp:presto-player/reusable-display {"id":33322} -->
<div class="wp-block-presto-player-reusable-display"></div>
<!-- /wp:presto-player/reusable-display -->

<!-- wp:generateblocks/element {"uniqueId":"ca5c66b8","tagName":"div","styles":{"position":"absolute","top":"0","bottom":"0","left":"0","width":"0","zIndex":"2","backgroundColor":"#ffffff"},"css":".gb-element-ca5c66b8{background-color:#ffffff;bottom:0;left:0;position:absolute;top:0;width:0;z-index:2}","htmlAttributes":{"data-curtain":"left","aria-hidden":"true"}} -->
<div class="gb-element-ca5c66b8" data-curtain="left" aria-hidden="true"></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"3000e47c","tagName":"div","styles":{"position":"absolute","top":"0","bottom":"0","right":"0","width":"0","zIndex":"2","backgroundColor":"#ffffff"},"css":".gb-element-3000e47c{background-color:#ffffff;bottom:0;position:absolute;right:0;top:0;width:0;z-index:2}","htmlAttributes":{"data-curtain":"right","aria-hidden":"true"}} -->
<div class="gb-element-3000e47c" data-curtain="right" aria-hidden="true"></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:block {"ref":33434} /-->

<!-- wp:generateblocks/element {"uniqueId":"homebanner01","tagName":"section","styles":{"backgroundImage":"linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.28) 100%),url(https://fennecservices.com.au/wp-content/uploads/2024/02/24.jpg)","backgroundSize":"cover,","backgroundPosition":"center,51% 20%"},"css":".gb-element-homebanner01 {background-image:linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.28) 100%),url('https://fennecservices.com.au/wp-content/uploads/2024/02/24.jpg');background-position:center,51% 20%;background-size:cover,;}","globalClasses":["gbp-section"]} -->
<section class="gbp-section gb-element-homebanner01"><!-- wp:generateblocks/element {"uniqueId":"homebannerin01","tagName":"div","styles":{"marginLeft":"auto","marginRight":"auto","color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase, #FFFFFF)","minHeight":"20rem","flexDirection":"column","display":"flex","justifyContent":"center"},"css":".gb-element-homebannerin01{color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase,#FFFFFF);display:flex;flex-direction:column;justify-content:center;margin-left:auto;margin-right:auto;min-height:20rem}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-homebannerin01"><!-- wp:generateblocks/element {"uniqueId":"67977262","tagName":"div"} -->
<div><!-- wp:generateblocks/text {"uniqueId":"home-banner-title","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">
We’re not just in the business of construction
</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-banner-copy","tagName":"p","styles":{"maxWidth":"720px"},"css":".gb-text-home-banner-copy{max-width:720px}"} -->
<p class="gb-text gb-text-home-banner-copy">We build the certainty that helps people move forward, whether the site is around the corner or hundreds of kilometres away.</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"homewhy01","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"homewhyin01","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks/element {"uniqueId":"home-principles-heading","tagName":"div"} -->
<div><!-- wp:generateblocks/element {"uniqueId":"0c27a5e1","tagName":"div","styles":{"textAlign":"center"},"css":".gb-element-0c27a5e1{text-align:center}"} -->
<div class="gb-element-0c27a5e1"><!-- wp:generateblocks/text {"uniqueId":"home-principles-kicker","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
We keep the build simple, and we keep it moving.
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-principles-title","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">
Why clients choose Fennec
</h2>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"homewhygrid01","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(500px, 1fr))","gap":"72px","paddingTop":"2rem","overflowX":"hidden"},"css":".gb-element-homewhygrid01{display:grid;gap:72px;grid-template-columns:repeat(auto-fit,minmax(500px,1fr));overflow-x:hidden;padding-top:2rem}"} -->
<div class="gb-element-homewhygrid01"><!-- wp:generateblocks/element {"uniqueId":"b9462b16","tagName":"div","styles":{"backgroundImage":"url(https://fennecservices.com.au/wp-content/uploads/2024/02/7-6.jpg)","backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundPosition":"78% 54%","backgroundBlendMode":"normal","minHeight":"280px"},"css":".gb-element-b9462b16{background-blend-mode:normal;background-image:url('https://fennecservices.com.au/wp-content/uploads/2024/02/7-6.jpg');background-position:78% 54%;background-repeat:no-repeat;background-size:cover;min-height:280px}"} -->
<div class="gb-element-b9462b16"></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"home-principles-list","tagName":"div","styles":{"display":"flex","flexDirection":"column","justifyContent":"center"},"css":".gb-element-home-principles-list{display:flex;flex-direction:column;justify-content:center}"} -->
<div class="gb-element-home-principles-list"><!-- wp:generateblocks/element {"uniqueId":"home-principle-one","tagName":"div"} -->
<div><!-- wp:generateblocks/text {"uniqueId":"home-principle-one-number","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
01
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-principle-one-title","tagName":"h3"} -->
<h3 class="gb-text">
Hands-on project management
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-principle-one-copy","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
One accountable lead, realistic scheduling, and clear progress updates.
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"home-principle-two","tagName":"div"} -->
<div><!-- wp:generateblocks/text {"uniqueId":"home-principle-two-number","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
02
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-principle-two-title","tagName":"h3"} -->
<h3 class="gb-text">
Quality without the noise
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-principle-two-copy","tagName":"p","styles":{"color":"#555555","fontSize":"17px","lineHeight":"1.55","marginBottom":"30px"},"css":".gb-text-home-principle-two-copy{color:#555555;font-size:17px;line-height:1.55;margin-bottom:30px}"} -->
<p class="gb-text gb-text-home-principle-two-copy">
Clean sequencing, reliable trades, and standards checked on site.
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"home-principle-three","tagName":"div"} -->
<div><!-- wp:generateblocks/text {"uniqueId":"home-principle-three-number","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
03
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-principle-three-title","tagName":"h3"} -->
<h3 class="gb-text">
Remote-ready logistics
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-principle-three-copy","tagName":"p","styles":{"color":"#555555","fontSize":"17px","lineHeight":"1.55"},"css":".gb-text-home-principle-three-copy{color:#555555;font-size:17px;line-height:1.55}"} -->
<p class="gb-text gb-text-home-principle-three-copy">
Access, deliveries, accommodation and constraints planned early — not mid-build.
</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:block {"ref":33493} /-->
```
