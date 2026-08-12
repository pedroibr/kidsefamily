---
type: Business Architecture
title: Offers
description: Arquitetura das dez ofertas clínicas organizadas por três contextos de procura.
status: draft
owner: Clínica Kids e Family
tags: [business-architecture, offers, services]
created: 2026-08-04
updated: 2026-08-11
---

# Offers

> As ofertas foram reorganizadas para separar públicos, problemas de entrada e propostas de valor. Nomes, âmbito clínico, profissionais, capacidade, preço, indicação e provas públicas continuam sujeitos a validação clínica e operacional.

**Evidence labels:** `noneConfirmed` indica que o componente não foi confirmado. `suggestedForValidation` identifica uma proposta ainda dependente de aprovação e nunca deve ser comunicada como oferta existente.

## Item: Odontopediatria

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Responsáveis na Primeira Consulta, Famílias em Crescimento |
| `journeys` | Buscando iniciar o cuidado oral da criança com confiança |
| `offerType` | service |
| `offerFormat` | Consulta e acompanhamento clínico pediátrico |
| `offerAttention` | oneOnOne |
| `offerEffort` | DFY (DoneForYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação, prevenção, tratamento e acompanhamento da saúde oral de bebés, crianças e adolescentes, com orientação aos responsáveis. |
| `offerValueEquation` | dreamOutcome=iniciar e manter o cuidado oral da criança com segurança; perceivedLikelihood=avaliação por fase, acolhimento pediátrico e plano claro; timeDelay=a primeira consulta organiza prioridades, enquanto resultados clínicos dependem do caso; effortSacrifice=preparação, comparecimento e continuidade dos cuidados recomendados. |
| `offerStack` | coreComponents=primeira consulta, avaliação por fase, prevenção, orientação familiar, tratamento indicado e acompanhamento; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não comunicar garantia de comportamento, ausência de medo/dor ou resultado clínico. |
| `offerActivation` | noneConfirmed — não usar escassez ou urgência artificial. |
| `offerValueProposition` | Dar à família uma referência acolhedora para começar cedo, cuidar da saúde oral e acompanhar cada fase do desenvolvimento da criança. |
| `offerCustomName` | Odontopediatria |

## Item: Respiração oral infantil

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Responsáveis na Primeira Consulta, Famílias em Crescimento, Pacientes com Sintomas Complexos |
| `journeys` | Tentando compreender sinais de crescimento, respiração ou função oral |
| `offerType` | service |
| `offerFormat` | Consulta de avaliação dentária e funcional infantil |
| `offerAttention` | oneOnOne |
| `offerEffort` | DWY (DoneWithYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação de sinais de respiração oral no contexto da saúde oral e do desenvolvimento infantil, com orientação, acompanhamento ou encaminhamento quando indicado. |
| `offerValueEquation` | dreamOutcome=compreender se os sinais observados merecem cuidado ou investigação adicional; perceivedLikelihood=história familiar, avaliação dentária e funcional e explicação de limites; timeDelay=a consulta organiza os próximos passos, enquanto diagnóstico e evolução podem depender de outros profissionais; effortSacrifice=participação do responsável, avaliações e possível coordenação interdisciplinar. |
| `offerStack` | coreComponents=história dos sinais, avaliação oral e funcional, explicação, prioridades, acompanhamento ou encaminhamento; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não prometer diagnóstico, correção respiratória, mudança no sono ou impacto geral de saúde. |
| `offerActivation` | noneConfirmed — não usar medo, culpa parental ou urgência clínica artificial. |
| `offerValueProposition` | Ajudar os responsáveis a transformar sinais de respiração oral infantil em entendimento, prioridades e um próximo passo clinicamente responsável. |
| `offerCustomName` | Respiração oral infantil |

## Item: Ortodontia infantil e desenvolvimento

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Responsáveis na Primeira Consulta, Famílias em Crescimento |
| `journeys` | Tentando compreender sinais de crescimento, respiração ou função oral, Planejando alinhar, reabilitar ou manter a saúde oral ao longo da vida |
| `offerType` | service |
| `offerFormat` | Avaliação ortodôntica infantil, monitorização e tratamento por fases |
| `offerAttention` | oneOnOne |
| `offerEffort` | DWY (DoneWithYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação e acompanhamento do crescimento, da oclusão e do alinhamento dentário infantil, com intervenção convencional ou alinhadores quando indicados. |
| `offerValueEquation` | dreamOutcome=acompanhar o desenvolvimento e intervir no momento adequado; perceivedLikelihood=avaliação por fase, monitorização e plano individual; timeDelay=alguns casos pedem apenas acompanhamento e outros tratamento por etapas; effortSacrifice=consultas regulares, colaboração da criança e do responsável e uso correto dos dispositivos. |
| `offerStack` | coreComponents=avaliação de crescimento e oclusão, monitorização, plano por fase, aparelho ou alinhadores quando indicados, revisões e retenção; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não garantir necessidade de intervenção, duração, crescimento ou resultado ortodôntico. |
| `offerActivation` | noneConfirmed — qualquer janela relacionada com fase de crescimento deve ser clinicamente verdadeira e revista. |
| `offerValueProposition` | Acompanhar crescimento e alinhamento desde cedo para que a família saiba o que observar, quando acompanhar e quando tratar. |
| `offerCustomName` | Ortodontia infantil e desenvolvimento |

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
| `offerCore` | Avaliação dirigida de queixas compatíveis com DTM, dor orofacial e limitações funcionais dentro do âmbito clínico confirmado. |
| `offerValueEquation` | dreamOutcome=compreender a queixa e recuperar conforto e função; perceivedLikelihood=história clínica, avaliação dirigida e encaminhamento quando indicado; timeDelay=a avaliação organiza o próximo passo, enquanto a resposta clínica varia; effortSacrifice=consulta, possíveis exames, tratamento e acompanhamento. |
| `offerStack` | coreComponents=história clínica, avaliação, explicação de hipóteses e limites, plano e encaminhamento quando indicado; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não prometer causa única, cura, alívio ou prazo clínico. |
| `offerActivation` | noneConfirmed — não usar urgência baseada em medo ou dor. |
| `offerValueProposition` | Transformar dor, ruídos ou limitação mandibular em entendimento clínico e num plano responsável de cuidado da ATM e da função. |
| `offerCustomName` | DTM e dor orofacial relacionada à ATM |

## Item: Ortodontia funcional

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Pacientes com Sintomas Complexos, Famílias em Crescimento, Adultos em Reabilitação |
| `journeys` | Tentando compreender sinais de crescimento, respiração ou função oral, Procurando resolver dor, desconforto ou perda de função |
| `offerType` | service |
| `offerFormat` | Avaliação ortodôntica funcional e tratamento acompanhado |
| `offerAttention` | oneOnOne |
| `offerEffort` | DWY (DoneWithYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação da relação entre oclusão, alinhamento e função, seguida de plano ortodôntico quando a intervenção for indicada. |
| `offerValueEquation` | dreamOutcome=melhorar a relação entre mordida, alinhamento e função com um plano apropriado; perceivedLikelihood=avaliação funcional, alternativas explicadas e acompanhamento; timeDelay=o plano é definido após avaliação e o tratamento decorre por etapas; effortSacrifice=adesão, consultas, cuidados e utilização correta dos dispositivos. |
| `offerStack` | coreComponents=avaliação de oclusão e função, definição de prioridades, plano ortodôntico, tratamento indicado, revisões e retenção; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não prometer tratar DTM, sono, respiração ou sintomas gerais por meio da ortodontia. |
| `offerActivation` | noneConfirmed — não usar urgência funcional sem fundamento clínico. |
| `offerValueProposition` | Oferecer uma leitura ortodôntica orientada à função para definir se, quando e como a mordida deve ser tratada. |
| `offerCustomName` | suggestedForValidation: Ortodontia funcional |

## Item: Sono, respiração e roncopatia

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Pacientes com Sintomas Complexos, Adultos em Reabilitação |
| `journeys` | Tentando compreender sinais de sono, respiração ou roncopatia |
| `offerType` | service |
| `offerFormat` | Avaliação dentária de sono, respiração e roncopatia, com coordenação quando indicada |
| `offerAttention` | oneOnOne |
| `offerEffort` | DWY (DoneWithYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação do possível contributo dentário e orofacial em sinais relacionados com sono, respiração e roncopatia, com acompanhamento ou encaminhamento quando indicado. |
| `offerValueEquation` | dreamOutcome=compreender os sinais e avançar para um cuidado coordenado; perceivedLikelihood=história, avaliação dentária contextual e articulação interdisciplinar; timeDelay=a consulta esclarece o papel da clínica e os próximos passos, enquanto diagnóstico e evolução dependem do caso; effortSacrifice=avaliações, adesão e possível participação de outros profissionais. |
| `offerStack` | coreComponents=história dos sinais, avaliação dentária e orofacial, explicação de limites, plano, acompanhamento ou encaminhamento; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não prometer diagnóstico médico, cura do ronco ou resultado de sono e respiração. |
| `offerActivation` | noneConfirmed — não usar medo ou urgência clínica artificial. |
| `offerValueProposition` | Clarificar o papel da medicina dentária nos sinais de sono, respiração e roncopatia e coordenar o próximo passo adequado. |
| `offerCustomName` | Sono, respiração e roncopatia |

## Item: Medicina dentária geral e cuidado adulto

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Famílias em Crescimento, Adultos em Reabilitação |
| `journeys` | Planejando alinhar, reabilitar ou manter a saúde oral ao longo da vida |
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
| `offerValueProposition` | Dar ao adulto uma referência contínua para prevenir, tratar e organizar a saúde oral com prioridades claras. |
| `offerCustomName` | Medicina dentária geral e cuidado adulto |

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
| `offerValueProposition` | Recuperar função e estrutura por meio de um plano reabilitador claro, coordenado e adequado à condição de cada adulto. |
| `offerCustomName` | Implantologia e reabilitação oral |

## Item: Estética dentária e restauração

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Adultos em Reabilitação, Famílias em Crescimento |
| `journeys` | Planejando alinhar, reabilitar ou manter a saúde oral ao longo da vida |
| `offerType` | service |
| `offerFormat` | Avaliação estética e restauradora com plano de tratamento |
| `offerAttention` | oneOnOne |
| `offerEffort` | DFY (DoneForYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação e execução de soluções restauradoras ou estéticas, incluindo facetas quando indicadas, considerando saúde, função e naturalidade. |
| `offerValueEquation` | dreamOutcome=restaurar dentes e melhorar a aparência preservando saúde, função e naturalidade; perceivedLikelihood=avaliação, planeamento e alinhamento de expectativas; timeDelay=etapas e duração dependem da solução indicada; effortSacrifice=consultas, cuidados e manutenção. |
| `offerStack` | coreComponents=avaliação de saúde e função, objetivos, alternativas, planeamento, execução, revisão e manutenção; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não garantir aparência, durabilidade ou resultado estético específico. |
| `offerActivation` | noneConfirmed — não usar insegurança estética, comparação ou urgência artificial. |
| `offerValueProposition` | Restaurar integridade e aparência com uma decisão informada, proporcional e coerente com a saúde oral da pessoa. |
| `offerCustomName` | Estética dentária e restauração |

## Item: Ortodontia e alinhadores transparentes para adultos

| Field | Value |
| --- | --- |
| `businessAssets` | Clínica Kids e Family |
| `profiles` | Adultos em Reabilitação, Famílias em Crescimento |
| `journeys` | Planejando alinhar, reabilitar ou manter a saúde oral ao longo da vida |
| `offerType` | service |
| `offerFormat` | Avaliação ortodôntica adulta e tratamento por aparelho ou alinhadores |
| `offerAttention` | oneOnOne |
| `offerEffort` | DWY (DoneWithYou) |
| `offerHowToGetIt` | byMessage (sendMessage > scheduleAppointment) |
| `offerCore` | Avaliação e tratamento ortodôntico de adultos por meio de aparelho convencional ou alinhadores transparentes quando indicados. |
| `offerValueEquation` | dreamOutcome=melhorar alinhamento, mordida e confiança com uma opção adequada à vida adulta; perceivedLikelihood=avaliação, planeamento, alternativa indicada e acompanhamento; timeDelay=tratamento por etapas com duração individual; effortSacrifice=adesão, consultas regulares, higiene, cuidados e uso correto dos dispositivos. |
| `offerStack` | coreComponents=avaliação adulta, planeamento, escolha da modalidade indicada, tratamento, revisões e retenção; bonuses=noneConfirmed. |
| `offerGuarantees` | noneConfirmed — não garantir duração, invisibilidade total, alinhamento ou resultado universal. |
| `offerActivation` | noneConfirmed — qualquer limite de capacidade ou condição temporal deve ser real e confirmado. |
| `offerValueProposition` | Ajudar o adulto a corrigir alinhamento e mordida com uma modalidade clinicamente indicada e um plano acompanhado do início à retenção. |
| `offerCustomName` | Ortodontia e alinhadores transparentes para adultos |
