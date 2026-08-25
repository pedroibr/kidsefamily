---
type: Website Reference
title: GenerateBlocks About Page Reference
description: Export de uma página Sobre em markup WordPress/GenerateBlocks para consulta de hero, banner e cards de valores.
status: active
owner: Pedro Raimundo
tags: [website, wordpress, generateblocks, reference]
source: User-pasted attachment
captured: 2026-08-18
---

# GenerateBlocks About Page Reference

## Purpose

Usar este export para consultar a estrutura de uma página Sobre com introdução, banner e cards de princípios.

## Usage Notes

- É uma referência técnica, não uma página aprovada nem conteúdo da Clínica Kids e Family.
- Ao adaptar, manter a lógica de blocos apenas quando ela fizer sentido e substituir textos, URLs, imagens, IDs e classes específicas.
- Confirmar os blocos e plugins disponíveis no site antes de reutilizar o markup.

## Source Markup

```html
<!-- wp:generateblocks/element {"uniqueId":"aace3305","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"cd6a50f1","tagName":"div","styles":{"textAlign":"center","maxWidth":"720px"},"css":".gb-element-cd6a50f1{max-width:720px;text-align:center}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-cd6a50f1"><!-- wp:generateblocks/text {"uniqueId":"1d64a78e","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
Construction delivery across residential, commercial and remote projects.
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"cd447aa3","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">About us</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"fd86ffea","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">At Fennec Services, we deliver residential construction, major renovations, commercial builds and remote site projects, with practical planning and hands-on site leadership.<br>With deep experience across construction and remote worksites, we focus on what keeps projects moving: clear scope, disciplined cost control, and logistics handled early.</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"homebanner01","tagName":"section","styles":{"backgroundImage":"linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.28) 100%),url(https://fennecservices.com.au/wp-content/uploads/2024/02/1.jpg)","backgroundSize":"cover,","backgroundPosition":"center,51% 20%"},"css":".gb-element-homebanner01 {background-image:linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.28) 100%),url('https://fennecservices.com.au/wp-content/uploads/2024/02/1.jpg');background-position:center,51% 20%;background-size:cover,;}","globalClasses":["gbp-section"]} -->
<section class="gbp-section gb-element-homebanner01"><!-- wp:generateblocks/element {"uniqueId":"homebannerin01","tagName":"div","styles":{"marginLeft":"auto","marginRight":"auto","color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase, #FFFFFF)","minHeight":"20rem","flexDirection":"column","display":"flex","justifyContent":"center"},"css":".gb-element-homebannerin01{color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase,#FFFFFF);display:flex;flex-direction:column;justify-content:center;margin-left:auto;margin-right:auto;min-height:20rem}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-homebannerin01"><!-- wp:generateblocks/element {"uniqueId":"67977262","tagName":"div"} -->
<div><!-- wp:generateblocks/text {"uniqueId":"home-banner-title","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">Dedication to innovation and precision</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"home-banner-copy","tagName":"p","styles":{"maxWidth":"720px"},"css":".gb-text-home-banner-copy{max-width:720px}"} -->
<p class="gb-text gb-text-home-banner-copy">Our team ensures that every solution we deliver is tailored to meet the unique needs of our clients.</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"af66ddd6","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"2d065c34","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks/element {"uniqueId":"ba291a43","tagName":"div","styles":{"textAlign":"center"},"css":".gb-element-ba291a43{text-align:center}"} -->
<div class="gb-element-ba291a43"><!-- wp:generateblocks/text {"uniqueId":"3eb529e6","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
How we work on every project
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"63012dba","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">
Core Values
</h2>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"1eb6779d","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(240px,1fr))","gap":"24px","paddingTop":"2rem"},"css":".gb-element-1eb6779d{display:grid;gap:24px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));padding-top:2rem}"} -->
<div class="gb-element-1eb6779d"><!-- wp:generateblocks/element {"uniqueId":"43804a8f","tagName":"article","styles":{"textAlign":"center","paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","borderTopWidth":"1px","borderRightWidth":"1px","borderBottomWidth":"1px","borderLeftWidth":"1px","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#E5E5E5","borderRightColor":"#E5E5E5","borderBottomColor":"#E5E5E5","borderLeftColor":"#E5E5E5"},"css":".gb-element-43804a8f{text-align:center;border:1px solid #E5E5E5;padding:2rem}"} -->
<article class="gb-element-43804a8f"><!-- wp:generateblocks/text {"uniqueId":"455ef4ae","tagName":"h3","globalClasses":["cart-title"]} -->
<h3 class="cart-title"><span class="gb-shape"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M76,152a36,36,0,1,0,36,36A36,36,0,0,0,76,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,76,208ZM42.34,106.34,56.69,92,42.34,77.66A8,8,0,0,1,53.66,66.34L68,80.69,82.34,66.34A8,8,0,0,1,93.66,77.66L79.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L68,103.31,53.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L204,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L192.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L204,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L215.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93A8.13,8.13,0,0,1,136,160a8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L152,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H163.31l2.35,2.34C183.9,68.59,190.58,90.78,184.47,112.83Z"></path></svg></span><span class="gb-text">
Plan early, build clean
</span></h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"13ac8e80","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
We set scope and sequencing upfront, so the job runs smoothly instead of reacting mid-build.
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"c103dd41","tagName":"article","styles":{"textAlign":"center","paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","borderTopWidth":"1px","borderRightWidth":"1px","borderBottomWidth":"1px","borderLeftWidth":"1px","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#E5E5E5","borderRightColor":"#E5E5E5","borderBottomColor":"#E5E5E5","borderLeftColor":"#E5E5E5"},"css":".gb-element-c103dd41{text-align:center;border:1px solid #E5E5E5;padding:2rem}"} -->
<article class="gb-element-c103dd41"><!-- wp:generateblocks/text {"uniqueId":"d8588598","tagName":"h3","globalClasses":["cart-title"]} -->
<h3 class="cart-title"><span class="gb-shape"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z"></path></svg></span><span class="gb-text">
Accountability on site
</span></h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"c81edd66","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
One accountable lead, real supervision, and decisions made fast, because delivery matters more than excuses.
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"a30f5802","tagName":"article","styles":{"textAlign":"center","paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","borderTopWidth":"1px","borderRightWidth":"1px","borderBottomWidth":"1px","borderLeftWidth":"1px","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#E5E5E5","borderRightColor":"#E5E5E5","borderBottomColor":"#E5E5E5","borderLeftColor":"#E5E5E5"},"css":".gb-element-a30f5802{text-align:center;border:1px solid #E5E5E5;padding:2rem}"} -->
<article class="gb-element-a30f5802"><!-- wp:generateblocks/text {"uniqueId":"3c6c91ff","tagName":"h3","globalClasses":["cart-title"]} -->
<h3 class="cart-title"><span class="gb-shape"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></svg></span><span class="gb-text">
Clear, disciplined delivery
</span></h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"6e13b809","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
Budget control, transparent variations, and straight communication from start to handover.
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"aace3305","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"cd6a50f1","tagName":"div","styles":{"textAlign":"center","maxWidth":"720px"},"css":".gb-element-cd6a50f1{max-width:720px;text-align:center}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-cd6a50f1"><!-- wp:generateblocks/text {"uniqueId":"1d64a78e","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">20+ years of experience in the heavy industry</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"cd447aa3","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">Our Origin</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"fd86ffea","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">Fennec Services is founded by two brothers who possess a combined 20 years of experience in heavy industry and construction sectors. Having worked across various roles in remote areas of Australia, the founders have a deep understanding of the challenges associated with labor management. Their practical experience, coupled with technical expertise, has driven them to establish a service provider that addresses these challenges and adds value to the industry.With deep experience across construction and remote worksites, we focus on what keeps projects moving: clear scope, disciplined cost control, and logistics handled early.</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->
```
