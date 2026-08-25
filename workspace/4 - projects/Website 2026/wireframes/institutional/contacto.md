---
type: Website Page
title: "Contacto"
slug: "contacto"
pageType: institutional
contentType: campaignLanding
sitemapLevel: hub
wpContentType: page
status: existing
productionStatus: inProgress
priority: high
pageGoal: conversion
primaryIntent: "contactar a clínica e saber qual é o próximo passo para marcar"
primaryAudience: "pessoas prontas para pedir orientação ou marcar uma avaliação"
canonicalParent: "/"
primaryCTA: "Falar connosco pelo WhatsApp"
---

# Contacto

## Page Brief

Reduzir a fricção entre a intenção e o contacto. A página deve encaminhar a pessoa diretamente para o WhatsApp, explicar o que acontece depois da primeira mensagem e mostrar onde a clínica está localizada, sem exigir formulário ou autodiagnóstico.

## Content Architecture

### Section 1 — Hero e WhatsApp

- **Display:** layout de duas colunas: convite e contexto à esquerda; CTA de WhatsApp em destaque à direita. Não incluir formulário.
- **Section type:** `hero section` + `in page cta section` — hero orientado à conversão, com o CTA como elemento principal.
- **Tagline:** VAMOS COMEÇAR JUNTOS
- **Title:** Fale connosco sobre o próximo passo
- **Content:** Conte-nos brevemente o que está a acontecer, quem precisa de ajuda e qual é a sua dúvida principal. Uma mensagem simples pelo WhatsApp ajuda a equipa a compreender a situação e indicar a melhor forma de começar.

#### WhatsApp CTA

- **Section type:** `in page cta section`
- **Title:** Falar directamente com a clínica
- **Description:** Envie uma mensagem pelo WhatsApp. Não precisa de chegar com um diagnóstico; basta partilhar o contexto essencial e a sua dúvida principal.
- **Primary CTA:** Falar connosco pelo WhatsApp
- **Implementation note:** ligar ao número oficial de WhatsApp confirmado pela clínica; não inventar URL, número ou horário no conteúdo final.
- **Privacy note:** orientar a pessoa a evitar informação clínica sensível que não seja necessária nesta primeira mensagem.

### Section 2 — O que acontece depois

- **Display:** três cards numerados lado a lado numa linha no desktop, com o mesmo tratamento visual dos cards do site; em mobile, passam para uma coluna.
- **Section type:** `methodology section` — adaptação para explicar o fluxo de contacto, não um método clínico.
- **Tagline:** DEPOIS DA PRIMEIRA MENSAGEM
- **Title:** O contacto é apenas o começo da orientação
- **Content:** Queremos que saiba o que acontece depois de enviar uma mensagem pelo WhatsApp.

| Step | Title | Description |
| --- | --- | --- |
| 01 | Recebemos a sua mensagem | A equipa reúne as informações essenciais e verifica qual é a melhor forma de responder. |
| 02 | Clarificamos a necessidade | Podemos fazer algumas perguntas simples para compreender a área de cuidado e o grau de prioridade. |
| 03 | Indicamos o próximo passo | Ajudamos a marcar a avaliação adequada ou encaminhamos para a informação mais útil. |

### Section 3 — Onde estamos

- **Display:** título curto, mapa responsivo com borda e cantos arredondados, seguido de um cartão de morada em largura total com botão para abrir no Google Maps.
- **Section type:** `contact form section` — adaptação para localização, sem formulário.
- **Tagline:** ENCONTRE-NOS COM FACILIDADE
- **Title:** A nossa localização
- **Content:** Mostrar a localização da Clínica Kids e Family de forma simples, com a morada visível e uma alternativa directa para abrir a rota no Maps.
- **Map block:** embed responsivo da localização oficial da Clínica Kids e Family, dentro do container `mapwrap01`.
- **Location details:** `Av. Dr. António José Almeida, 293, Oliveira de Azeméis`.
- **Location CTA:** `Abrir no Maps`, com abertura em novo separador.

## Page Connections

| Destino | Tipo de ligação | Motivo | CTA ou âncora |
| --- | --- | --- | --- |
| `/especialidades/` | `secondary` | Ajudar quem ainda não sabe o serviço | Ver especialidades |
| `/especialidades/odontopediatria/` | `priority` | Encaminhar famílias | Marcar avaliação infantil |
| `/especialidades/dtm-dor-orofacial/` | `priority` | Encaminhar quem relata dor ou limitação | Marcar avaliação de ATM |
| `/lead-magnets/primeira-consulta-odontopediatria/` | `alternative` | Preparar responsáveis para a primeira consulta | Preparar a primeira consulta |
| `/lead-magnets/avaliacao-respiracao-oral-infantil/` | `alternative` | Oferecer autoassessment a responsáveis | Fazer autoavaliação |
| `/lead-magnets/mapa-sinais-atm/` | `alternative` | Oferecer orientação inicial sobre ATM | Ver mapa de sinais |
| `/` | `navigation` | Retornar à proposta geral | Voltar ao início |

## SEO Notes

- Intenção principal: contactar a clínica e compreender o próximo passo.
- Indexação: indexar.
- Confirmar número de WhatsApp, horários, morada, mapa e fluxo real de resposta antes da aprovação final.

## Production Notes

- Conteúdo institucional V1 publicado em GenerateBlocks na página WordPress 79, com contacto directo por WhatsApp, três cards horizontais e mapa responsivo estilizado.
- O mapa ocupa a largura do container, usa borda/raio consistentes com os cards e é acompanhado pela morada e pelo botão `Abrir no Maps`.
- O cartão de morada foi convertido para blocos nativos GenerateBlocks (`address01`), com grelha de duas colunas e empilhamento em ecrãs pequenos.
- Removidos o formulário, a secção “Ainda não sabe por onde começar?”, a secção de outras formas de contacto e o CTA final do template.
- Confirmar canais, horários, localização e consentimento de dados com Cristiane e Leonardo.
