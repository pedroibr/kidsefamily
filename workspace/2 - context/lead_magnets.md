---
type: Business Architecture
title: Lead Magnets
description: Ativos de aquisição e qualificação conectados às audiências, jornadas e ofertas da clínica.
status: draft
owner: Clínica Kids e Family
tags: [business-architecture, lead-magnets, acquisition]
created: 2026-08-04
updated: 2026-08-24
---

# Lead Magnets

> “Avaliação Respiração Oral Infantil” já existe e foi confirmada pelo utilizador e pelo site público [Respiração Oral](https://respiracaooral.pt/). “Mapa de Sinais de Dor e Função Mandibular” foi aprovado como conceito canônico a desenvolver. “Primeira Consulta de Odontopediatria” foi acrescentada como recurso de preparação e qualificação para responsáveis que procuram a primeira avaliação da criança. Em conjunto, estes ativos apoiam as duas entradas prioritárias — odontopediatria e ATM/dor orofacial — e traduzem a abordagem integrada como organização de sinais, preparação e próximos passos, nunca como diagnóstico automático. Critérios clínicos, perguntas, recomendações e implementação pública devem permanecer sob revisão profissional.

## Item: Avaliação Respiração Oral Infantil

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Responsáveis na Primeira Consulta, Famílias em Crescimento, Pacientes com Sintomas Complexos |
| `journeys` | Buscando iniciar o cuidado oral da criança com confiança, Tentando compreender sinais de crescimento, respiração ou função oral |
| `offers` | Odontopediatria |
| `leadMagnetType` | revealProblem |
| `leadMagnetScope` | processOverview |
| `deliveryMechanism` | software |
| `offerFormat` | conversationalAssessment |
| `offerAttention` | oneToMany |
| `offerEffort` | DIY (DoItYourself) |
| `offerHowToGetIt` | byAssessment (completeAssessment > getResult) |
| `offerCore` | Triagem conversacional sobre sinais associados à respiração oral habitual em crianças, com resultado orientativo e indicação do próximo passo. É um recurso informativo de triagem e não substitui consulta presencial ou diagnóstico clínico. |
| `offerValueEquation` | dreamOutcome=entender os sinais que a criança pode estar a apresentar e se existe indicação para avaliação especializada; perceivedLikelihood=perguntas interativas, resultado individualizado, explicação educativa e limites clínicos explícitos; timeDelay=resultado rápido após concluir a avaliação; effortSacrifice=responder a uma sequência curta de perguntas sobre a criança e fornecer os dados solicitados pelo fluxo. |
| `offerStack` | coreComponents=conversa guiada, perguntas de triagem, classificação orientativa, relatório explicativo, recomendação de próximo passo e acesso ao agendamento; bonuses=noneConfirmed. |
| `offerValueProposition` | Ajudar os responsáveis a reconhecer e organizar sinais relacionados à respiração oral da criança e compreender se devem procurar uma avaliação especializada. |
| `offerCustomName` | Avaliação Respiração Oral Infantil |
| `bridgeToOffer` | O resultado reduz a incerteza sobre sinais de respiração oral e como eles podem relacionar-se com o desenvolvimento oral da criança, conduzindo ao agendamento do Checkup Respira e Cresce 360º como porta de entrada para avaliação odontopediátrica. |

## Item: Primeira Consulta de Odontopediatria

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Responsáveis na Primeira Consulta, Famílias em Crescimento |
| `journeys` | Buscando iniciar o cuidado oral da criança com confiança |
| `offers` | Odontopediatria |
| `leadMagnetType` | readiness |
| `leadMagnetScope` | preparationStep |
| `deliveryMechanism` | page |
| `offerFormat` | shortGuideLandingPage |
| `offerAttention` | oneToMany |
| `offerEffort` | DIY (DoItYourself) |
| `offerHowToGetIt` | byPage (accessPage > scheduleAppointment) |
| `offerCore` | Página curta que explica o que é a primeira consulta de odontopediatria, como preparar a criança e o responsável, o que normalmente acontece e quais benefícios uma avaliação inicial pode trazer. É um recurso de orientação e preparação, não uma consulta, diagnóstico ou promessa de resultado. |
| `offerValueEquation` | dreamOutcome=chegar à primeira consulta com mais segurança, expectativas realistas e perguntas úteis; perceivedLikelihood=explicação simples do processo, preparação prática, benefícios claros e limites clínicos explícitos; timeDelay=orientação imediata na página antes do contacto; effortSacrifice=ler uma página curta, refletir sobre a situação da criança e decidir se faz sentido marcar. |
| `offerStack` | coreComponents=explicação da primeira consulta, preparação da criança, preparação do responsável, o que esperar, benefícios da avaliação, perguntas úteis, próximos passos e CTA de marcação; bonuses=noneConfirmed. |
| `offerValueProposition` | Ajudar os responsáveis a transformar a primeira consulta de odontopediatria numa experiência mais previsível, acolhedora e útil para começar o cuidado oral da criança. |
| `offerCustomName` | Primeira Consulta de Odontopediatria |
| `bridgeToOffer` | A página reduz a ansiedade e a incerteza de quem procura a primeira avaliação e conduz naturalmente ao agendamento da oferta de Odontopediatria, sem substituir a consulta nem incentivar autodiagnóstico. |

## Item: Mapa de Sinais de Dor e Função Mandibular

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Pacientes com Sintomas Complexos, Adultos em Reabilitação |
| `journeys` | Procurando resolver dor, desconforto ou perda de função |
| `offers` | DTM e dor orofacial relacionada à ATM |
| `leadMagnetType` | revealProblem |
| `leadMagnetScope` | processOverview |
| `deliveryMechanism` | software |
| `offerFormat` | conversationalAssessment |
| `offerAttention` | oneToMany |
| `offerEffort` | DIY (DoItYourself) |
| `offerHowToGetIt` | byAssessment (completeAssessment > getResult) |
| `offerCore` | Triagem conversacional que ajuda a pessoa a organizar sinais de dor, ruídos, travamento, limitação e impacto funcional da mandíbula e a compreender se faz sentido procurar uma avaliação dirigida. É um recurso informativo de triagem e não fornece diagnóstico clínico. |
| `offerValueEquation` | dreamOutcome=entender melhor os sinais apresentados e qual próximo passo considerar; perceivedLikelihood=perguntas específicas, resumo individualizado, orientação clara e limites clínicos explícitos; timeDelay=orientação rápida após concluir a avaliação; effortSacrifice=responder a uma sequência curta de perguntas sobre sintomas, função e impacto na rotina. |
| `offerStack` | coreComponents=conversa guiada, perguntas sobre dor e função mandibular, organização dos sinais, resumo individualizado, limites da triagem, recomendação de próximo passo e acesso ao agendamento; bonuses=noneConfirmed. |
| `offerValueProposition` | Ajudar a pessoa a transformar sinais confusos de dor e função mandibular em uma visão mais organizada do problema e do próximo passo responsável. |
| `offerCustomName` | Mapa de Sinais de Dor e Função Mandibular |
| `bridgeToOffer` | O resultado esclarece que sinais semelhantes podem ter diferentes explicações e conduz à consulta de DTM e dor orofacial relacionada à ATM quando a situação precisa de história clínica, avaliação dirigida e plano individual. |
