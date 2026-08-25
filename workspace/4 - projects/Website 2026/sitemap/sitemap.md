---
type: Project
title: Website Sitemap — Arquitetura V4
description: Árvore canónica de páginas, templates, secções e briefings do Website 2026.
status: active
owner: Pedro Raimundo
tags: [website, sitemap, information-architecture, section-briefs]
created: 2026-08-24
updated: 2026-08-24
---

# Website Sitemap — Arquitetura V4

## Purpose

Este documento define a árvore do website: quais páginas existem, qual é a sua relação e que secções cada página precisa de conter. Cada nível pode ter um briefing curto:

- **site brief:** direção global do website;
- **page brief:** função, audiência, intenção e limite de cada página;
- **section brief:** o que aquela secção precisa explicar ou permitir;
- **sectionType:** função editorial da secção, conforme [`../skills/sitemap/references/section-types.md`](../skills/sitemap/references/section-types.md).

O Sitemap não contém copy final, markup Gutenberg, CSS ou a escolha detalhada do layout. O Wireframe combina estes briefings com o melhor `layoutId` da referência [`section-layouts.md`](../skills/sitemap/references/section-layouts.md) e desenvolve o conteúdo.

## Process Position

```text
01 Sitemap (árvore + briefings) → 02 Wireframe (conteúdo + layout) → 03 Style Guide → 04 Implementação
```

| Fase | Fonte de verdade | Resultado |
| --- | --- | --- |
| Sitemap | `sitemap.md` e `templates/` | Árvore, templates, secções e briefings. |
| Wireframe | `../wireframes/` | Conteúdo, display, `layoutId`, propriedades e conexões por página. |
| Style Guide | `../style-guide/design.md` | Tokens, classes e regras visuais. |
| Implementação | WordPress/GenerateBlocks | Página construída a partir das fases aprovadas. |

## Site Brief

O website apresenta a Clínica Kids & Family como uma clínica de medicina dentária integrada para a família. A medicina dentária permanece no centro; crescimento, respiração, sono, dor, função e estética entram quando forem clinicamente relevantes. A arquitetura deve orientar a pessoa da necessidade percebida para a área de cuidado adequada e, depois, para um contacto claro.

## Relação com templates

Os tipos de template e as macro-seções possíveis estão definidos em [`templates.md`](templates.md). O Sitemap apenas atribui um `templateId` a cada página; não repete o contrato do template.

## Section Contract

Cada entrada de secção no Sitemap deve conter:

```text
sectionType — briefing curto da função, conteúdo obrigatório e próximo passo esperado
```

O `sectionType` explica **o que** a secção resolve. O `layoutId` explica **como** o Wireframe vai organizar os blocos. A escolha do layout acontece no Wireframe, depois de interpretar o briefing, e não altera a função editorial registada aqui.

## Dense Sitemap

Esta árvore mostra páginas, templates, briefings de página e briefings de secção. Os nomes são intenções editoriais; o Wireframe escreverá a copy final.

```text
Website
├── Início / [pages]
│   ├── hero section — apresentar medicina dentária integrada e dois próximos passos
│   ├── why choose us section — explicar a abordagem integrada sem prometer tratar tudo
│   ├── who is this for section — ajudar a pessoa a reconhecer o caminho de cuidado
│   ├── belief section — criar uma pausa com uma ideia orientadora
│   └── methodology section — mostrar como se passa da história à próxima decisão
├── Sobre /sobre/ [pages]
│   ├── hero section — apresentar a clínica e a sua forma de cuidar
│   ├── about section — explicar contexto, missão e visão
│   ├── belief section — tornar explícito um princípio de cuidado
│   └── team section — apresentar as pessoas e funções relevantes
├── Contacto /contacto/ [pages]
│   ├── hero section — convidar a enviar uma mensagem pelo WhatsApp
│   ├── methodology section — explicar o que acontece depois do primeiro contacto
│   └── contact form section — apresentar localização e forma de contacto
├── Especialidades /especialidades/ [hub-directory]
│   ├── about section — enquadrar as áreas de cuidado
│   ├── product/service list section — encaminhar para especialidades principais
│   ├── who is this for section — organizar necessidades e públicos
│   └── in page cta section — orientar para o próximo passo
├── Blog /blog/ [hub-directory]
│   ├── about section — explicar o papel do conteúdo
│   ├── blog list section — listar artigos por tema
│   ├── product/service list section — ligar conteúdos às áreas de cuidado
│   └── in page cta section — encaminhar para contacto ou serviço
├── Especialidades
│   ├── Odontopediatria /especialidades/odontopediatria/ [service-main]
│   │   ├── hero section — apresentar o cuidado dentário para crianças
│   │   ├── who is this for section — reconhecer idades, sinais e necessidades
│   │   ├── main benefits section — explicar resultados e benefícios do acompanhamento
│   │   ├── methodology section — mostrar avaliação, orientação e seguimento
│   │   ├── faq section — responder dúvidas essenciais de pais e cuidadores
│   │   └── in page cta section — orientar para a primeira consulta
│   ├── ATM e dor orofacial /especialidades/dtm-dor-orofacial/ [service-main]
│   │   ├── hero section — apresentar dor, função e movimento mandibular
│   │   ├── who is this for section — reconhecer sinais e situações de procura
│   │   ├── main benefits section — explicar clareza, função e acompanhamento
│   │   ├── methodology section — mostrar avaliação e definição do próximo passo
│   │   ├── faq section — esclarecer limites e dúvidas frequentes
│   │   └── in page cta section — encaminhar para avaliação
│   ├── Ortodontia /especialidades/ortodontia/ [service-main]
│   │   ├── hero section — explicar alinhamento, função e desenvolvimento
│   │   ├── who is this for section — distinguir crianças, adolescentes e adultos
│   │   ├── product/service list section — apresentar modalidades relevantes
│   │   ├── methodology section — mostrar avaliação e plano acompanhado
│   │   ├── faq section — responder dúvidas de tratamento
│   │   └── in page cta section — orientar para avaliação
│   ├── Sono, respiração e roncopatia /especialidades/sono-respiracao-roncopatia/ [service-main]
│   │   ├── hero section — enquadrar sinais de respiração e sono
│   │   ├── who is this for section — ajudar a reconhecer quando procurar avaliação
│   │   ├── methodology section — explicar leitura integrada e encaminhamento
│   │   ├── faq section — esclarecer o âmbito clínico
│   │   └── in page cta section — orientar para conversa inicial
│   ├── Medicina dentária geral e cuidado adulto /especialidades/medicina-dentaria-geral-adultos/ [service-main]
│   │   ├── hero section — apresentar prevenção e cuidado adulto
│   │   ├── main benefits section — organizar os ganhos do acompanhamento continuado
│   │   ├── product/service list section — mostrar cuidados disponíveis
│   │   ├── methodology section — explicar revisão e plano de cuidado
│   │   ├── faq section — responder dúvidas essenciais
│   │   └── in page cta section — orientar para marcação
│   ├── Implantologia e reabilitação oral /especialidades/implantologia-reabilitacao-oral/ [service-main]
│   │   ├── hero section — apresentar reabilitação com foco em função e saúde
│   │   ├── who is this for section — explicar situações que podem justificar avaliação
│   │   ├── methodology section — mostrar avaliação, opções e acompanhamento
│   │   ├── main benefits section — explicar função, conforto e naturalidade
│   │   ├── faq section — responder dúvidas essenciais
│   │   └── in page cta section — orientar para consulta
│   ├── Estética dentária e restauração /especialidades/estetica-dentaria-restauracao/ [service-main]
│   │   ├── hero section — apresentar restauração e estética com naturalidade
│   │   ├── main benefits section — explicar saúde, função e aparência
│   │   ├── product/service list section — apresentar possibilidades de cuidado
│   │   ├── methodology section — mostrar avaliação e decisão partilhada
│   │   ├── faq section — responder dúvidas essenciais
│   │   └── in page cta section — orientar para consulta
│   ├── Respiração oral infantil /especialidades/respiracao-oral-infantil/ [service-sub]
│   │   ├── hero section — apresentar sinais respiratórios em crianças
│   │   ├── who is this for section — ajudar pais a reconhecer situações relevantes
│   │   ├── main benefits section — explicar o valor de uma leitura atempada
│   │   ├── methodology section — mostrar avaliação e próximos passos
│   │   ├── faq section — esclarecer dúvidas
│   │   └── in page cta section — orientar para avaliação
│   ├── Ortodontia infantil e desenvolvimento /especialidades/ortodontia-infantil-desenvolvimento/ [service-sub]
│   │   ├── hero section — enquadrar crescimento e desenvolvimento
│   │   ├── who is this for section — identificar idades e sinais
│   │   ├── main benefits section — explicar prevenção e acompanhamento
│   │   ├── methodology section — mostrar como se decide o momento de intervir
│   │   ├── faq section — responder dúvidas
│   │   └── in page cta section — orientar para consulta
│   └── Ortodontia e alinhadores para adultos /especialidades/ortodontia-alinhadores-adultos/ [service-sub]
│       ├── hero section — apresentar alinhamento para adultos
│       ├── who is this for section — reconhecer objetivos e contexto
│       ├── why choose us section — explicar acompanhamento e integração clínica
│       ├── methodology section — mostrar avaliação e plano
│       ├── faq section — esclarecer dúvidas
│       └── in page cta section — orientar para avaliação
└── Campanhas e entradas
    ├── Avaliação Respiração Oral Infantil /avaliacao-respiracao-oral-infantil/ [campaign-landing]
    │   ├── hero section — prometer uma primeira leitura clara
    │   ├── main benefits section — explicar o que a avaliação ajuda a observar
    │   ├── methodology section — mostrar como funciona
    │   ├── faq section — esclarecer limites
    │   └── in page cta section — conduzir à avaliação
    ├── Primeira Consulta de Odontopediatria /primeira-consulta-odontopediatria/ [campaign-landing]
    │   ├── hero section — apresentar a primeira consulta como início de orientação
    │   ├── who is this for section — explicar para quem é indicada
    │   ├── methodology section — preparar a família para a consulta
    │   ├── faq section — responder dúvidas práticas
    │   └── in page cta section — convidar à marcação
    └── Mapa de Sinais de Dor e Função Mandibular /mapa-sinais-dor-funcao-mandibular/ [campaign-landing]
        ├── hero section — oferecer um mapa inicial de sinais
        ├── main benefits section — mostrar a clareza que o mapa pode criar
        ├── methodology section — explicar o passo seguinte
        ├── faq section — esclarecer o que o mapa não substitui
        └── in page cta section — orientar para avaliação
```

## Status e prioridade

O inventário detalhado, produção, prioridade e ligações canónicas continuam nos wireframes e nos registos de página. O Sitemap deve ser atualizado primeiro quando uma página, intenção, template ou sequência de secções mudar.

## Resource / Post-Type Layer

Blog posts, testimonials e case studies ficam fora desta árvore em `../post-types/`. Só entram como URLs estruturais quando tiverem intenção própria e forem adicionados explicitamente ao Sitemap.

## Sitemap Rules

1. O Sitemap define a árvore, o `templateId`, o `sectionType` e os briefings; não redige copy final.
2. Os templates e as suas macro-seções vivem em `templates.md`.
3. O Wireframe não cria páginas ausentes do Sitemap.
4. O Wireframe interpreta cada briefing e escolhe o `layoutId` mais adequado na referência de layouts.
5. Uma alteração de intenção, template ou sequência exige atualização deste documento antes do Wireframe.
