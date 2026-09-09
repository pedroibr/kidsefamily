---
type: Website Section Reference
title: Website Section Types
description: Catálogo de tipos de secção e respectivos briefings de conteúdo para orientar a construção do website.
status: active-reference
owner: Pedro Raimundo
source_file: website-section-types.xlsx
captured: 2026-08-18
updated: 2026-08-24
tags: [website, sections, content-brief, generateblocks, reference]
---

# Website Section Types

## O que é este ficheiro

`website-section-types.xlsx` é um catálogo de padrões de secção usados para planear páginas do website. Cada linha combina um tipo de secção com um briefing editorial: título, subtítulo, formato do conteúdo e limites aproximados de extensão.

O ficheiro é uma **referência de planeamento**, não um conjunto de instruções rígidas. A intenção da página, a estratégia da Clínica Kids e Family, o contexto clínico e o português de Portugal têm prioridade. Os limites indicados servem para orientar a forma e o display, não para forçar todos os conteúdos a seguir exactamente a mesma fórmula.

## Estrutura da folha

- Folha: `websitesectiontype`.
- Intervalo usado: `A1:B23`.
- Coluna A: `Name` / tipo de secção.
- Coluna B: `websiteSectionDescription` / briefing de conteúdo e display.
- 19 tipos de secção preenchidos e uma linha final `n/a`.
- Não foram encontradas fórmulas; o conteúdo é textual e editável.

## Tipos disponíveis

| Tipo | Função habitual | Estrutura indicada no ficheiro |
|---|---|---|
| `hero section` | apresentar promessa principal | título, subtítulo e corpo curto |
| `main benefits section` | explicar benefícios e transformação | lista de 3–4 benefícios |
| `why choose us section` | explicitar diferenciação | pelo menos 4 razões distintas |
| `product/service list section` | apresentar ofertas | pelo menos 4 itens com nome e descrição |
| `core competences list section` | mostrar capacidades | 4–8 competências |
| `about section` | explicar identidade, missão e visão | texto de 4–5 frases |
| `statistics section` | usar métricas de credibilidade | 4 estatísticas com contexto |
| `methodology section` | explicar processo de trabalho | 3–5 passos |
| `team section section` | apresentar equipa | pelo menos 3 pessoas com nome e função |
| `contact form section` | facilitar contacto | convite, contactos e formulário |
| `blog list section` | encaminhar para conteúdos | posts destacados e ideias editoriais |
| `portfolio list section` | listar projectos/cases | pelo menos 4 projectos |
| `gallery section` | apresentar media | lista de 8 imagens |
| `testimonial section` | apresentar prova social | pelo menos 3 testemunhos com identificação |
| `faq section` | responder a objecções | 5–7 perguntas e respostas |
| `in page cta section` | converter para uma oferta | promessa, descrição e botão |
| `founder's message section` | dar voz à fundadora | nota pessoal, visão e convite |
| `who is this for section` | clarificar audiência | 3–5 segmentos ou situações |
| `botton CTA section` | CTA de subscrição/fecho | benefício, texto curto e botão |

## Adaptação à Clínica Kids e Family

Para o website da clínica, os tipos mais úteis neste momento são:

- `hero section`: Início, com a promessa de medicina dentária integrada para a família.
- `main benefits section`: explicar os ganhos de uma abordagem integrada ao longo da vida.
- `product/service list section`: apresentar especialidades e caminhos de cuidado.
- `methodology section`: explicar como a clínica avalia, orienta e acompanha.
- `who is this for section`: organizar os caminhos por infância e desenvolvimento; dor, função e sono; saúde oral e reabilitação estética.
- `testimonial section`: usar apenas relatos autorizados; os exemplos locais continuam não publicáveis.
- `faq section`: responder a dúvidas sobre primeira consulta, ATM, respiração oral infantil e outras entradas prioritárias.
- `in page cta section`: encaminhar para marcação de consulta ou WhatsApp, conforme a página.
- `founder's message section`: possível secção para a visão da Cristiane, quando o conteúdo for validado.

## Convenção de utilização

Quando uma página precisar de uma secção, pode referenciar este catálogo pelo nome, por exemplo:

> “Usa `methodology section` para explicar a primeira consulta de odontopediatria.”

O briefing deve então ser adaptado a:

1. audiência e jornada da página;
2. oferta ou lead magnet relacionado;
3. intenção primária da página (awareness, consideration ou conversion);
4. voz e vocabulário PT-PT;
5. classe/estrutura visual disponível no [Design MD](../style-guide/design.md).

## Notas de interpretação

- O workbook usa `team section section` e `botton CTA section`; estes nomes foram preservados para manter correspondência com o ficheiro original, mas podem ser normalizados no futuro.
- “Learn More” e “Subscribe Now” aparecem como exemplos no briefing original; no site da clínica devem ser substituídos por CTAs em português de Portugal, como “Saber mais”, “Encontrar o cuidado adequado”, “Marcar consulta” ou um encaminhamento para WhatsApp.
- O requisito de formulário presente em `contact form section` não se sobrepõe à decisão actual de priorizar contacto directo por WhatsApp na página Contacto.
- Estatísticas, testemunhos, portfolio/case studies e nomes de equipa só devem entrar em produção quando houver dados reais e autorização.

## Relação com outras referências

- [Mapa de tipos editoriais para famílias — localização atual](../../../../../cristianemartins/workspace/4%20-%20projects/Website%202026/skills/wireframe/references/sections-library/section-layout-map.md): seleciona layouts compatíveis sem confundir intenção editorial com composição visual.
- [Design MD](../style-guide/design.md): cores, tipografia, layout e classes GenerateBlocks a reutilizar na implementação.
- Instruções locais: [`../skills/`](../skills/INDEX.md), com contratos de sitemap, wireframe, Design MD, CMS e implementação.
- [GenerateBlocks Home](home-generateblocks-reference.md): estrutura de blocos para secções institucionais.
- [GenerateBlocks Home — Services and Testimonials](home-services-testimonials-generateblocks-reference.md): padrão de serviços/tabs e testemunhos.
- [GenerateBlocks Simple Landing Page](simple-landing-page-generateblocks-reference.md): padrão de landing page curta e CTA.
