---
type: Website Reference
title: "Home GenerateBlocks — referência 2026-08-19"
description: "Export da Home enviado pelo utilizador para estudar a composição dos blocos, classes globais e refinamentos de layout."
status: reference
owner: workspace
tags: [website, generateblocks, reference, home]
created: 2026-08-19
updated: 2026-08-19
---

# Home GenerateBlocks — referência 2026-08-19

## Origem e finalidade

Export Gutenberg/GenerateBlocks fornecido pelo utilizador em 2026-08-19. Serve como referência técnica e visual para construir novas páginas da Clínica Kids e Family; não é conteúdo aprovado nem uma página publicável.

## O que observar

- Estrutura consistente de `gbp-section` e `gbp-section__inner`.
- Uso de `section-top-70` para limitar a largura da coluna editorial.
- Hierarquia editorial com `gbp-section__tagline`, `gbp-section__headline` e `gbp-section__text`.
- Botões `gbp-button--primary` e `gbp-button--secondary`.
- Cards com `gbp-card--border` e `gbp-card__title`.
- Listas curtas para tornar a comparação entre abordagens mais escaneável.
- Separadores entre passos e um contentor reservado para futura imagem, quando a composição pedir duas colunas.
- Classes e estilos locais que podem ser adaptados, mas não devem ser copiados para produção sem validação do design system.

## Markup original

```html
<!-- wp:generateblocks/element {"uniqueId":"8679bf26","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"c4035461","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks/text {"uniqueId":"7efbc45b","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">Oliveira de Azeméis · Clínica Kids &amp; Family · Medicina dentária Sistêmica</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"b8189591","tagName":"div","globalClasses":["section-top-70"]} -->
<div class="section-top-70"><!-- wp:generateblocks/text {"uniqueId":"cbef7764","tagName":"h1","globalClasses":["gbp-section__headline"]} -->
<h1 class="gb-text gbp-section__headline">Cuidar da boca. <br>Compreender o todo.</h1>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"d8af939e","tagName":"div","globalClasses":["gbp-section__text"]} -->
<div class="gb-text gbp-section__text">Na<strong> Clínica Kids e Family</strong>, a medicina dentária é o centro do cuidado. Consideramos a fase de vida, o crescimento, a função, a respiração, o sono e a história de cada pessoa quando isso é clinicamente relevante, para tornar o próximo passo mais claro para toda a família.</div>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"e0976135","tagName":"div","styles":{"display":"flex","gap":"1rem","flexWrap":"wrap","marginTop":"3rem"},"css":".gb-element-e0976135{display:flex;flex-wrap:wrap;gap:1rem;margin-top:3rem}"} -->
<div class="gb-element-e0976135"><!-- wp:generateblocks/text {"uniqueId":"52529fe2","tagName":"a","globalClasses":["gbp-button\u002d\u002dprimary"],"htmlAttributes":{"href":"/especialidades/"}} -->
<a class="gb-text gbp-button--primary" href="/especialidades/">Nossos Cuidados</a>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"41713681","tagName":"a","globalClasses":["gbp-button\u002d\u002dsecondary"],"htmlAttributes":{"href":"/contacto/"}} -->
<a class="gb-text gbp-button--secondary" href="/contacto/">
Marcar consulta
</a>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"d0f5a977","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"69e822d2","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks/element {"uniqueId":"310148e2","tagName":"div","styles":{"width":"66%"},"css":".gb-element-310148e2{width:66%}","globalClasses":["section-top-70"]} -->
<div class="section-top-70 gb-element-310148e2"><!-- wp:generateblocks/text {"uniqueId":"f67e235c","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
ENTRE O FOCO E A COORDENAÇÃO
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"5131e61b","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">
Uma abordagem que começa na boca e não perde a pessoa de vista
</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"67bdf2e6","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
Medicina dentária sistémica é a forma como organizamos o cuidado: começamos pela saúde oral, procuramos perceber o contexto e ampliamos a leitura apenas quando existem relações clinicamente relevantes.
</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"3dca9713","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","gap":"2rem","marginTop":"3rem"},"css":".gb-element-3dca9713{display:grid;gap:2rem;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:3rem}"} -->
<div class="gb-element-3dca9713"><!-- wp:generateblocks/element {"uniqueId":"090a4622","tagName":"article","styles":{"padding":"2rem","borderRadius":"24px"},"css":".gb-element-090a4622{border-radius:24px;padding:2rem}","globalClasses":["gbp-card\u002d\u002dborder"]} -->
<article class="gbp-card--border gb-element-090a4622"><!-- wp:generateblocks/text {"uniqueId":"d27e2fdd","tagName":"h3","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title">
Clínica dentária focada
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"3a99908f","tagName":"ul","styles":{"marginTop":"1rem","paddingLeft":"1.25rem"},"css":".gb-element-3a99908f{margin-top:1rem;padding-left:1.25rem}"} -->
<ul class="gb-element-3a99908f"><!-- wp:generateblocks/text {"uniqueId":"bf3e77c8","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-bf3e77c8{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-bf3e77c8">
Resposta directa à necessidade oral.
</li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"e0f3e2cf","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-e0f3e2cf{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-e0f3e2cf">
Cuidado claro e objectivo.
</li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"8d116045","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-8d116045{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-8d116045">
Pode não acompanhar todo o contexto da pessoa.
</li>
<!-- /wp:generateblocks/text --></ul>
<!-- /wp:generateblocks/element --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"82c9f998","tagName":"article","styles":{"padding":"2rem","borderRadius":"24px"},"css":".gb-element-82c9f998{border-radius:24px;padding:2rem}","globalClasses":["gbp-card\u002d\u002dborder"]} -->
<article class="gbp-card--border gb-element-82c9f998"><!-- wp:generateblocks/text {"uniqueId":"7e559928","tagName":"h3","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title">
Policlínica generalista
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"7b3dc106","tagName":"ul","styles":{"marginTop":"1rem","paddingLeft":"1.25rem"},"css":".gb-element-7b3dc106{margin-top:1rem;padding-left:1.25rem}"} -->
<ul class="gb-element-7b3dc106"><!-- wp:generateblocks/text {"uniqueId":"e3198bfc","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-e3198bfc{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-e3198bfc">
Reúne diferentes áreas de cuidado.
</li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"6668a220","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-6668a220{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-6668a220">
Pode oferecer várias portas de entrada.
</li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"480753df","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-480753df{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-480753df">
O desafio pode ser ligar as avaliações num caminho comum.
</li>
<!-- /wp:generateblocks/text --></ul>
<!-- /wp:generateblocks/element --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"87237f57","tagName":"article","styles":{"padding":"2rem","borderRadius":"24px","color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase, #fafaf9)","backgroundColor":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1, #0b1a2b)"},"css":".gb-element-87237f57{background-color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1,#0b1a2b);border-radius:24px;color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase,#fafaf9);padding:2rem}","globalClasses":["gbp-card\u002d\u002dborder"]} -->
<article class="gbp-card--border gb-element-87237f57"><!-- wp:generateblocks/text {"uniqueId":"5220a247","tagName":"h3","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title">Medicina dentária sistémica</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/element {"uniqueId":"5f7129ac","tagName":"ul","styles":{"marginTop":"1rem","paddingLeft":"1.25rem"},"css":".gb-element-5f7129ac{margin-top:1rem;padding-left:1.25rem}"} -->
<ul class="gb-element-5f7129ac"><!-- wp:generateblocks/text {"uniqueId":"0d5a7ff1","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-0d5a7ff1{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-0d5a7ff1">
Mantém a medicina dentária no centro.
</li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"3a9a025a","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-3a9a025a{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-3a9a025a">
Integra o contexto clinicamente relevante.
</li>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"4f21e6c4","tagName":"li","styles":{"fontSize":"0.95rem","lineHeight":"1.5","marginBottom":"0.5rem"},"css":".gb-text-4f21e6c4{font-size:0.95rem;line-height:1.5;margin-bottom:0.5rem}"} -->
<li class="gb-text gb-text-4f21e6c4">
Explica e coordena o próximo passo.
</li>
<!-- /wp:generateblocks/text --></ul>
<!-- /wp:generateblocks/element --></article>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"be1fe47a","tagName":"section","styles":{"backgroundColor":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1,#0b1a2b)"},"css":".gb-element-be1fe47a{background-color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002daccent-1,#0b1a2b)}","globalClasses":["gbp-section"]} -->
<section class="gbp-section gb-element-be1fe47a"><!-- wp:generateblocks/element {"uniqueId":"288baeb2","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks/element {"uniqueId":"5931a5cd","tagName":"div","styles":{"width":"66%","color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase, #fafaf9)"},"css":".gb-element-5931a5cd{color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase,#fafaf9);width:66%}"} -->
<div class="gb-element-5931a5cd"><!-- wp:generateblocks/text {"uniqueId":"719d88d9","tagName":"p","globalClasses":["dark-tagline"]} -->
<p class="gb-text dark-tagline">
UMA IDEIA QUE ORIENTA O CUIDADO
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"1cf8f537","tagName":"h2","styles":{"color":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase, #fafaf9)"},"css":".gb-text-1cf8f537{color:var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dcolor\u002d\u002dbase,#fafaf9)}"} -->
<h2 class="gb-text gb-text-1cf8f537">Cuidar de forma sistémica não é tratar tudo pela boca.</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"83f246a6","tagName":"p"} -->
<p class="gb-text">É começar pela medicina dentária, compreender a pessoa e trabalhar em conjunto com outros profissionais quando isso for necessário.</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"1e3e56bb","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"54828431","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks/element {"uniqueId":"631681c6","tagName":"div","globalClasses":["section-top-70"]} -->
<div class="section-top-70"><!-- wp:generateblocks/text {"uniqueId":"a9ac3c14","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
TRÊS CAMINHOS DE CUIDADO
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"28f233eb","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">
Encontre o caminho que mais se aproxima da sua necessidade
</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"a8fb7f33","tagName":"p","globalClasses":["gbp-section__text"]} -->
<p class="gb-text gbp-section__text">
As pessoas chegam à clínica em momentos diferentes. Estes três caminhos resumem as principais necessidades que acompanhamos e ajudam a encontrar a especialidade ou o próximo passo mais adequado.
</p>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"39e06162","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","gap":"2rem","marginTop":"3rem"},"css":".gb-element-39e06162{display:grid;gap:2rem;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:3rem}"} -->
<div class="gb-element-39e06162"><!-- wp:generateblocks/element {"uniqueId":"209edc19","tagName":"article","styles":{"padding":"2rem","borderRadius":"24px"},"css":".gb-element-209edc19{border-radius:24px;padding:2rem}","globalClasses":["gbp-card\u002d\u002dborder"]} -->
<article class="gbp-card--border gb-element-209edc19"><!-- wp:generateblocks/text {"uniqueId":"c52b3472","tagName":"h3","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title">
Infância e desenvolvimento
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"933ee1f5","tagName":"p","globalClasses":["cart-text"]} -->
<p class="gb-text cart-text">
Acompanhar bebés, crianças e adolescentes, desde a primeira consulta até ao crescimento, à respiração oral e ao alinhamento quando necessário.
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"367204d2","tagName":"article","styles":{"padding":"2rem","borderRadius":"24px"},"css":".gb-element-367204d2{border-radius:24px;padding:2rem}","globalClasses":["gbp-card\u002d\u002dborder"]} -->
<article class="gbp-card--border gb-element-367204d2"><!-- wp:generateblocks/text {"uniqueId":"8d042bf4","tagName":"h3","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title">
Dor, função e sono
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"78e9282a","tagName":"p","globalClasses":["cart-text"]} -->
<p class="gb-text cart-text">
Compreender dor, ruídos, limitações mandibulares e sinais relacionados com função, respiração ou sono, com avaliação e coordenação quando indicada.
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"e9772da3","tagName":"article","styles":{"padding":"2rem","borderRadius":"24px","paddingRight":"0.95rem"},"css":".gb-element-e9772da3{border-radius:24px;padding:2rem;padding-right:0.95rem}","globalClasses":["gbp-card\u002d\u002dborder"]} -->
<article class="gbp-card--border gb-element-e9772da3"><!-- wp:generateblocks/text {"uniqueId":"b8ce5f63","tagName":"h3","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title">Saúde oral, reabilitação estética</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"1e5c5a10","tagName":"p","globalClasses":["cart-text"]} -->
<p class="gb-text cart-text">
Organizar prevenção, cuidado adulto, alinhamento, restauração e reabilitação estética para recuperar saúde, função e naturalidade ao longo da vida.
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"39521af5","tagName":"section","globalClasses":["gbp-section"]} -->
<section class="gbp-section"><!-- wp:generateblocks/element {"uniqueId":"f172a67c","tagName":"div","globalClasses":["gbp-section__inner"]} -->
<div class="gbp-section__inner"><!-- wp:generateblocks/element {"uniqueId":"a62263c8","tagName":"div","globalClasses":["section-top-70"]} -->
<div class="section-top-70"><!-- wp:generateblocks/text {"uniqueId":"3ab3b12f","tagName":"p","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline">
UM CAMINHO EXPLICADO
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"badf8b7f","tagName":"h2","globalClasses":["gbp-section__headline"]} -->
<h2 class="gb-text gbp-section__headline">
Primeiro entendemos. Depois decidimos juntos.
</h2>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"bd916323","tagName":"div","globalClasses":["gbp-section__text"]} -->
<div class="gb-text gbp-section__text">
A primeira etapa não é adivinhar um diagnóstico. É criar uma leitura suficientemente clara para que a pessoa saiba o que observar, o que precisa de avaliação e qual é a forma mais responsável de avançar.
</div>
<!-- /wp:generateblocks/text --></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"f9356af1","tagName":"div","styles":{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(400px, 1fr))","gap":"4rem","alignItems":"stretch","marginTop":"3.5rem","@media (max-width: 767px)":{"gridTemplateColumns":"1fr"}},"css":".gb-element-f9356af1{align-items:stretch;display:grid;gap:4rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));margin-top:3.5rem}@media (max-width:767px){.gb-element-f9356af1{grid-template-columns:1fr}}"} -->
<div class="gb-element-f9356af1"><!-- wp:generateblocks/element {"uniqueId":"7cce7e5c","tagName":"div","styles":{"width":"100%","minHeight":"480px","backgroundColor":"#f4f1ea","border":"1px solid #e3ded3","borderRadius":"24px"},"css":".gb-element-7cce7e5c{background-color:#f4f1ea;border:1px solid #e3ded3;border-radius:24px;min-height:480px;width:100%}"} -->
<div class="gb-element-7cce7e5c"></div>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"37e7d7a9","tagName":"div","styles":{"display":"flex","flexDirection":"column","justifyContent":"center"},"css":".gb-element-37e7d7a9{display:flex;flex-direction:column;justify-content:center}"} -->
<div class="gb-element-37e7d7a9"><!-- wp:generateblocks/element {"uniqueId":"53fa79b4","tagName":"article","styles":{"padding":"0.25rem 0"},"css":".gb-element-53fa79b4{padding:0.25rem 0}"} -->
<article class="gb-element-53fa79b4"><!-- wp:generateblocks/text {"uniqueId":"88522282","tagName":"p","styles":{"marginBottom":"0.75rem"},"css":".gb-text-88522282{margin-bottom:0.75rem}","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline gb-text-88522282">
01
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"4adb2e58","tagName":"h3","styles":{"marginBottom":"0.75rem"},"css":".gb-text-4adb2e58{margin-bottom:0.75rem}","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title gb-text-4adb2e58">
Ouvir o contexto
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"ebf6be36","tagName":"p","globalClasses":["cart-text"]} -->
<p class="gb-text cart-text">
Reunir a história, os sinais e as dúvidas que levaram a pessoa ou a família a procurar ajuda.
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"2042bb94","tagName":"article","styles":{"padding":"0.25rem 0"},"css":".gb-element-2042bb94{padding:0.25rem 0}"} -->
<article class="gb-element-2042bb94"><!-- wp:generateblocks/text {"uniqueId":"8bc76fea","tagName":"p","styles":{"marginBottom":"0.75rem"},"css":".gb-text-8bc76fea{margin-bottom:0.75rem}","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline gb-text-8bc76fea">
02
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"26a7a39f","tagName":"h3","styles":{"marginBottom":"0.75rem"},"css":".gb-text-26a7a39f{margin-bottom:0.75rem}","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title gb-text-26a7a39f">
Avaliar e explicar
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"0e4077e1","tagName":"p","globalClasses":["cart-text"]} -->
<p class="gb-text cart-text">
Observar o que está dentro do âmbito da clínica, explicar possibilidades e deixar claros os limites da avaliação.
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator --></article>
<!-- /wp:generateblocks/element -->

<!-- wp:generateblocks/element {"uniqueId":"1e0ebb7e","tagName":"article","styles":{"padding":"0.25rem 0"},"css":".gb-element-1e0ebb7e{padding:0.25rem 0}"} -->
<article class="gb-element-1e0ebb7e"><!-- wp:generateblocks/text {"uniqueId":"4c7c0ab3","tagName":"p","styles":{"marginBottom":"0.75rem"},"css":".gb-text-4c7c0ab3{margin-bottom:0.75rem}","globalClasses":["gbp-section__tagline"]} -->
<p class="gb-text gbp-section__tagline gb-text-4c7c0ab3">
03
</p>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"81d1646a","tagName":"h3","styles":{"marginBottom":"0.75rem"},"css":".gb-text-81d1646a{margin-bottom:0.75rem}","globalClasses":["gbp-card__title"]} -->
<h3 class="gb-text gbp-card__title gb-text-81d1646a">
Definir o próximo passo
</h3>
<!-- /wp:generateblocks/text -->

<!-- wp:generateblocks/text {"uniqueId":"be3b3ae1","tagName":"p","globalClasses":["cart-text"]} -->
<p class="gb-text cart-text">
Organizar acompanhamento, tratamento ou encaminhamento conforme a necessidade real.
</p>
<!-- /wp:generateblocks/text --></article>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></div>
<!-- /wp:generateblocks/element --></section>
<!-- /wp:generateblocks/element -->
```

