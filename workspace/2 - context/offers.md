---
type: Business Architecture
title: Offers
description: Arquitetura inicial das sete ofertas clínicas fornecidas pelo utilizador.
status: draft
owner: Clínica Kids e Family
tags: [business-architecture, offers, services]
created: 2026-08-04
updated: 2026-08-04
---

# Offers

> As sete ofertas abaixo foram transcritas da imagem enviada pelo utilizador e estruturadas comercialmente. Nomes oficiais, profissionais, capacidade, preço, prioridade, indicação clínica e provas públicas ainda precisam de validação.

**Evidence labels:** `noneConfirmed` indica que o componente não foi confirmado como parte da oferta. `suggestedForValidation` deve ser usado apenas para uma ideia proposta que ainda depende de aprovação e nunca deve ser comunicada como oferta existente.

## Item: Odontopediatria

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Responsáveis na Primeira Consulta, Famílias em Crescimento |
| `journeys` | Buscando iniciar o cuidado oral da criança com confiança, Tentando compreender sinais de crescimento, respiração ou função oral |
| `offerType` | service |
| `offerFormat` | Consulta e acompanhamento clínico pediátrico |
| `offerAttention` | oneOnOne |
| `offerEffort` | DFY (DoneForYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação, prevenção e acompanhamento da saúde oral de bebés, crianças e adolescentes, com orientação aos responsáveis. |
| `offerValueEquation` | dreamOutcome=começar e manter o cuidado oral da criança com segurança; perceivedLikelihood=avaliação pediátrica, orientação por fase e plano claro; timeDelay=a primeira consulta já organiza prioridades e próximos passos, enquanto resultados clínicos variam; effortSacrifice=marcação, comparecimento e continuidade dos cuidados recomendados. |
| `offerStack` | coreComponents=primeira consulta, avaliação por fase, prevenção, orientação aos responsáveis e acompanhamento; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não comunicar garantia de comportamento, ausência de dor/medo ou resultado clínico. |
| `offerActivation` | noneConfirmed — não usar escassez ou urgência artificial. |
| `offerValueProposition` | Ajudar a família a iniciar e manter o cuidado oral da criança com acolhimento, clareza e continuidade. |
| `offerCustomName` | Odontopediatria |

## Item: Medicina dentária geral e cuidado adulto

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Famílias em Crescimento, Adultos em Reabilitação |
| `journeys` | Planejando alinhar, reabilitar ou manter a saúde oral ao longo da vida, Procurando resolver dor, desconforto ou perda de função |
| `offerType` | service |
| `offerFormat` | Consulta, avaliação, prevenção e tratamento geral |
| `offerAttention` | oneOnOne |
| `offerEffort` | DFY (DoneForYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação, prevenção, manutenção e tratamento geral da saúde oral adulta conforme indicação clínica. |
| `offerValueEquation` | dreamOutcome=manter ou recuperar a saúde oral com uma referência contínua; perceivedLikelihood=avaliação individual, prioridades e opções explicadas; timeDelay=a consulta inicial esclarece o plano, enquanto o tratamento depende do caso; effortSacrifice=consultas, adesão ao plano e manutenção. |
| `offerStack` | coreComponents=avaliação, prevenção, tratamento geral, orientação, manutenção e encaminhamento interno; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — oferecer clareza de processo e alternativas sem prometer resultado clínico. |
| `offerActivation` | noneConfirmed — não usar escassez ou urgência artificial. |
| `offerValueProposition` | Oferecer uma referência contínua e clara para a saúde oral adulta dentro do contexto familiar. |
| `offerCustomName` | Medicina dentária geral e cuidado adulto |

## Item: DTM e dor orofacial relacionada à ATM

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Pacientes com Sintomas Complexos, Adultos em Reabilitação |
| `journeys` | Procurando resolver dor, desconforto ou perda de função |
| `offerType` | service |
| `offerFormat` | Consulta de avaliação de DTM e dor orofacial |
| `offerAttention` | oneOnOne |
| `offerEffort` | DFY (DoneForYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação dirigida de queixas compatíveis com DTM, dor orofacial e limitações funcionais dentro do escopo clínico confirmado. |
| `offerValueEquation` | dreamOutcome=compreender a origem provável da queixa e recuperar função; perceivedLikelihood=história clínica, avaliação dirigida e encaminhamento quando indicado; timeDelay=a avaliação organiza o próximo passo, enquanto a resposta clínica varia; effortSacrifice=consulta, possíveis exames, tratamento e acompanhamento. |
| `offerStack` | coreComponents=história clínica, avaliação, explicação de hipóteses, plano e encaminhamento quando indicado; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não prometer cura, alívio ou prazo clínico. |
| `offerActivation` | noneConfirmed — não usar urgência baseada em medo ou dor. |
| `offerValueProposition` | Ajudar a pessoa a compreender a queixa e avançar para um plano responsável de cuidado da dor e da função. |
| `offerCustomName` | DTM e dor orofacial relacionada à ATM |

## Item: Ortodontia e alinhadores transparentes

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Famílias em Crescimento, Adultos em Reabilitação |
| `journeys` | Tentando compreender sinais de crescimento, respiração ou função oral, Planejando alinhar, reabilitar ou manter a saúde oral ao longo da vida |
| `offerType` | service |
| `offerFormat` | Avaliação ortodôntica e plano de tratamento por etapas |
| `offerAttention` | oneOnOne |
| `offerEffort` | DWY (DoneWithYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação e tratamento de alinhamento, crescimento e função por meio de ortodontia convencional ou alinhadores quando indicados. |
| `offerValueEquation` | dreamOutcome=melhorar alinhamento e função com um plano adequado à fase de vida; perceivedLikelihood=avaliação, planeamento e acompanhamento profissional; timeDelay=tratamento por etapas com duração individual; effortSacrifice=adesão, consultas regulares, cuidados e uso correto dos dispositivos. |
| `offerStack` | coreComponents=avaliação, planeamento, escolha da opção indicada, acompanhamento, revisões e retenção; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não garantir prazo, alinhamento ou resultado universal. |
| `offerActivation` | noneConfirmed — qualquer limite de vagas ou condição temporal deve ser real e confirmado. |
| `offerValueProposition` | Conectar alinhamento, crescimento e função a um plano individual acompanhado ao longo do tempo. |
| `offerCustomName` | Ortodontia e alinhadores transparentes |

## Item: Implantologia e reabilitação oral

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Adultos em Reabilitação, Famílias em Crescimento |
| `journeys` | Procurando resolver dor, desconforto ou perda de função, Planejando alinhar, reabilitar ou manter a saúde oral ao longo da vida |
| `offerType` | service |
| `offerFormat` | Avaliação de reabilitação, implantologia e cirurgia oral |
| `offerAttention` | oneOnOne |
| `offerEffort` | DFY (DoneForYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação e planeamento de reabilitação oral com implantes, cirurgia, próteses ou outras soluções indicadas. |
| `offerValueEquation` | dreamOutcome=recuperar função e confiança após perda ou comprometimento dentário; perceivedLikelihood=avaliação, exames e planeamento por etapas; timeDelay=tratamento em fases com duração dependente do caso; effortSacrifice=consultas, preparação, recuperação e manutenção. |
| `offerStack` | coreComponents=avaliação, exames quando indicados, alternativas, planeamento, etapas cirúrgicas/protéticas, acompanhamento e manutenção; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não garantir elegibilidade, prazo, integração ou resultado clínico. |
| `offerActivation` | noneConfirmed — não usar pressão baseada em medo, perda ou condição temporal artificial. |
| `offerValueProposition` | Ajudar o adulto a recuperar função e confiança por meio de um plano reabilitador claro e coordenado. |
| `offerCustomName` | Implantologia e reabilitação oral |

## Item: Estética dentária e restauração, incluindo facetas

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Adultos em Reabilitação, Famílias em Crescimento |
| `journeys` | Planejando alinhar, reabilitar ou manter a saúde oral ao longo da vida |
| `offerType` | service |
| `offerFormat` | Avaliação estética/restauradora e plano de tratamento |
| `offerAttention` | oneOnOne |
| `offerEffort` | DFY (DoneForYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação e execução de soluções estéticas ou restauradoras, incluindo facetas quando indicadas, considerando saúde e função. |
| `offerValueEquation` | dreamOutcome=melhorar aparência e restauração preservando saúde, função e naturalidade; perceivedLikelihood=avaliação, planeamento e alinhamento de expectativas; timeDelay=etapas e duração dependem da solução indicada; effortSacrifice=consultas, cuidados e manutenção. |
| `offerStack` | coreComponents=avaliação de saúde e função, objetivos, alternativas, planeamento, execução, revisão e manutenção; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não garantir aparência, durabilidade ou resultado estético específico. |
| `offerActivation` | noneConfirmed — não usar insegurança estética, comparação ou urgência artificial. |
| `offerValueProposition` | Ajudar a pessoa a tomar uma decisão estética ou restauradora informada, proporcional e coerente com a sua saúde oral. |
| `offerCustomName` | Estética dentária e restauração, incluindo facetas |

## Item: Sono, respiração e roncopatia

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Pacientes com Sintomas Complexos, Famílias em Crescimento |
| `journeys` | Tentando compreender sinais de crescimento, respiração ou função oral, Procurando resolver dor, desconforto ou perda de função |
| `offerType` | service |
| `offerFormat` | Avaliação integrada de sono, respiração e função, com encaminhamento quando indicado |
| `offerAttention` | oneOnOne |
| `offerEffort` | DWY (DoneWithYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação integrada de sinais relacionados a sono, respiração e função, com coordenação ou encaminhamento quando indicado. |
| `offerValueEquation` | dreamOutcome=compreender os sinais e avançar para um cuidado coordenado; perceivedLikelihood=história, avaliação integrada e articulação interdisciplinar; timeDelay=a consulta organiza próximos passos, enquanto diagnóstico e evolução dependem do caso; effortSacrifice=avaliações, adesão e possível participação de diferentes profissionais. |
| `offerStack` | coreComponents=história, avaliação funcional, leitura integrada, explicação de limites, plano, acompanhamento ou encaminhamento; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não prometer diagnóstico, cura do ronco ou resultado de sono/respiração. |
| `offerActivation` | noneConfirmed — não usar medo, culpa ou urgência clínica artificial. |
| `offerValueProposition` | Ajudar a família ou o adulto a organizar sinais de sono, respiração e função e avançar para o próximo passo adequado. |
| `offerCustomName` | Sono, respiração e roncopatia |
