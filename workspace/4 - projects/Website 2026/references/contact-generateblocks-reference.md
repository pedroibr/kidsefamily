---
type: Website Reference
title: GenerateBlocks Contact Page Reference
description: Export de uma página de Contacto em markup WordPress/GenerateBlocks para consulta de estrutura, formulário e cartões de localização.
status: active
owner: Pedro Raimundo
tags: [website, wordpress, generateblocks, reference]
source: User-pasted attachment
captured: 2026-08-18
---

# GenerateBlocks Contact Page Reference

## Purpose

Usar este export para consultar a estrutura de uma página de contacto com coluna de convite, formulário e cartões de informação.

## Usage Notes

- É uma referência técnica, não uma página aprovada nem conteúdo da Clínica Kids e Family.
- Ao adaptar, manter a lógica de blocos apenas quando ela fizer sentido e substituir textos, URLs, imagens, IDs e classes específicas.
- Confirmar os blocos e plugins disponíveis no site antes de reutilizar o markup.

## Source Markup

```html
<!-- wp:generateblocks/element {"uniqueId":"3811e06e","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"b443208d","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(320px,1fr))","gap":"48px","alignItems":"start"},"css":".gb-element-b443208d{align-items:start;display:grid;gap:48px;grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-b443208d"><!-- wp:generateblocks/element {"uniqueId":"9302c257","tagName":"div"} -->
<div><!-- wp:generateblocks/text {"uniqueId":"19100035","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
LET’S BUILD TOGETHER
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"698c6382","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">
Contact Fennec Services
</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"794e11bf","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
The construction industry moves fast, and so do we. Fennec Services combines the care of a family-operated business with big-company professionalism, giving you clear communication, tight coordination, and reliable delivery. Whether you need labour hire, residential or commercial construction, or remote site support, we can scale quickly, tap into a strong network of trusted partners, and manage your project with industry-leading construction software.
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"88d90e56","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
Reach out using the form below and our team will get back to you promptly.
</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"77ed0bc2","tagName":"article","styles":{"paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","borderTopWidth":"1px","borderRightWidth":"1px","borderBottomWidth":"1px","borderLeftWidth":"1px","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#E5E5E5","borderRightColor":"#E5E5E5","borderBottomColor":"#E5E5E5","borderLeftColor":"#E5E5E5"},"css":".gb-element-77ed0bc2{border:1px solid #E5E5E5;padding:2rem}"} -->
<article class="gb-element-77ed0bc2"><!-- wp:generateblocks/text {"uniqueId":"2f6df842","tagName":"h3"} -->
<h3 class="gb-text">
Send a message
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:fluentfom/guten-block {"formId":"1"} /--></article>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"5f80c3c9","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"01857fa4","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"3fr 2fr","columnGap":"24px"},"css":".gb-element-01857fa4{column-gap:24px;display:grid;grid-template-columns:3fr 2fr}","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner gb-element-01857fa4"><!-- wp:generateblocks/element {"uniqueId":"9dc288ed","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(240px,1fr))","gap":"24px"},"css":".gb-element-9dc288ed{display:grid;gap:24px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}"} -->
<div class="gb-element-9dc288ed"><!-- wp:generateblocks/element {"uniqueId":"5ce021a4","tagName":"article","styles":{"paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","borderTopWidth":"1px","borderRightWidth":"1px","borderBottomWidth":"1px","borderLeftWidth":"1px","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#E5E5E5","borderRightColor":"#E5E5E5","borderBottomColor":"#E5E5E5","borderLeftColor":"#E5E5E5"},"css":".gb-element-5ce021a4{border:1px solid #E5E5E5;padding:2rem}"} -->
<article class="gb-element-5ce021a4"><!-- wp:generateblocks/text {"uniqueId":"f30ea6ba","tagName":"h3"} -->
<h3 class="gb-text">
Head Office &amp; Workshop
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"6a350651","tagName":"p","styles":[],"globalClasses":["text-card-contact"]} -->
<p class="gb-text text-card-contact">
28 Langs Way, Woodburn NSW 2472<br>Phone: (07) 5227 9650<br>Mobile: 0427 688 893<br>info@fennecservices.com.au
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"53f19a51","tagName":"article","styles":{"paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","borderTopWidth":"1px","borderRightWidth":"1px","borderBottomWidth":"1px","borderLeftWidth":"1px","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#E5E5E5","borderRightColor":"#E5E5E5","borderBottomColor":"#E5E5E5","borderLeftColor":"#E5E5E5"},"css":".gb-element-53f19a51{border:1px solid #E5E5E5;padding:2rem}"} -->
<article class="gb-element-53f19a51"><!-- wp:generateblocks/text {"uniqueId":"8417d9d0","tagName":"h3"} -->
<h3 class="gb-text">
Sunshine Coast Office
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"3f7369aa","tagName":"p","globalClasses":["text-card-contact"]} -->
<p class="gb-text text-card-contact">
Buderim QLD<br>Phone: (07) 5227 9650<br>Mobile: 0427 688 893<br>info@fennecservices.com.au
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"bf6b4b2d","tagName":"article","styles":{"paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","borderTopWidth":"1px","borderRightWidth":"1px","borderBottomWidth":"1px","borderLeftWidth":"1px","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#E5E5E5","borderRightColor":"#E5E5E5","borderBottomColor":"#E5E5E5","borderLeftColor":"#E5E5E5"},"css":".gb-element-bf6b4b2d{border-bottom-color:#E5E5E5;border-bottom-style:solid;border-bottom-width:1px;border-left-color:#E5E5E5;border-left-style:solid;border-left-width:1px;border-right-color:#E5E5E5;border-right-style:solid;border-right-width:1px;border-top-color:#E5E5E5;border-top-style:solid;border-top-width:1px;padding-bottom:2rem;padding-left:2rem;padding-right:2rem;padding-top:2rem}"} -->
<article class="gb-element-bf6b4b2d"><!-- wp:generateblocks/text {"uniqueId":"6778dd0a","tagName":"h3"} -->
<h3 class="gb-text">
Brisbane Depot
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"af2daa90","tagName":"p","globalClasses":["text-card-contact"]} -->
<p class="gb-text text-card-contact">
Shed 4/356 Bilsen Rd, Geebung QLD 4034<br>Phone: (07) 5227 9650<br>Mobile: 0427 688 893<br>info@fennecservices.com.au
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"64bd4cac","tagName":"article","styles":{"paddingTop":"2rem","paddingRight":"2rem","paddingBottom":"2rem","paddingLeft":"2rem","borderTopWidth":"1px","borderRightWidth":"1px","borderBottomWidth":"1px","borderLeftWidth":"1px","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#E5E5E5","borderRightColor":"#E5E5E5","borderBottomColor":"#E5E5E5","borderLeftColor":"#E5E5E5"},"css":".gb-element-64bd4cac{border-bottom-color:#E5E5E5;border-bottom-style:solid;border-bottom-width:1px;border-left-color:#E5E5E5;border-left-style:solid;border-left-width:1px;border-right-color:#E5E5E5;border-right-style:solid;border-right-width:1px;border-top-color:#E5E5E5;border-top-style:solid;border-top-width:1px;padding-bottom:2rem;padding-left:2rem;padding-right:2rem;padding-top:2rem}"} -->
<article class="gb-element-64bd4cac"><!-- wp:generateblocks/text {"uniqueId":"780efb47","tagName":"h3"} -->
<h3 class="gb-text">Post Address</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"c0d48b54","tagName":"p","globalClasses":["text-card-contact"]} -->
<p class="gb-text text-card-contact">
28 Langs Way, Woodburn NSW 2472
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"94979d71","tagName":"div","styles":{"backgroundImage":"url(https://fennecservices.com.au/wp-content/uploads/2024/02/17.jpg)","backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundBlendMode":"normal"},"css":".gb-element-94979d71{background-blend-mode:normal;background-image:url('https://fennecservices.com.au/wp-content/uploads/2024/02/17.jpg');background-position:center;background-repeat:no-repeat;background-size:cover}"} -->
<div class="gb-element-94979d71"></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->
```
