---
type: Strategy
title: Deep Market Research Prompt
description: Copy-ready prompt for external deep market research on Clínica Cristiane Martins and its regional dental market.
status: active
owner: workspace
tags: [strategy, market-research, deep-research, dentistry, portugal]
created: 2026-07-26
updated: 2026-07-26
---

# Deep Market Research Prompt

## Normalized business snapshot

- `businessOwner`: Cristiane Martins — inferred from the client and working business name.
- `businessName`: Clínica Cristiane Martins — inferred working name; official name not yet confirmed.
- `businessContext`: Multidisciplinary integrated-health clinic with pediatric dentistry as its strongest area — known.
- `businessSize`: Missing.
- `businessStage`: Established operation with operational maturity and limited marketing maturity — inferred.
- `businessLocation`: Oliveira de Azeméis, Portugal — known.
- `marketScope`: Regional catchment around Oliveira de Azeméis, described as relatively broad — known.
- `targetAudience`: Families with children as the primary hypothesis, plus adults seeking the clinic's other treatments — inferred.
- `businessOffers`: Pediatric dentistry, general dentistry, multidisciplinary integrated-health care, implants, veneers, snoring-related care, orthodontics, and clear aligners — preliminary.
- `outputLanguage`: `pt_BR` — default defined by the research-prompt workflow.

## Copy-ready prompt

```text
Conduct a market research.

Find market tendencies, demand potential, industry and/or region growth drivers and inhibitors, main type of competitors (does not need to be specific competitors), and relevant information. Summary the main findings in a SWOT analysis.

businessOwner: Cristiane Martins
businessName: Clínica Cristiane Martins
businessContext: Clínica multidisciplinar de saúde integrada, com a odontopediatria como principal área de força. A oferta combina medicina dentária generalista e tratamentos especializados para crianças e adultos.
businessSize: Not provided
businessStage: Clínica estabelecida, com maturidade operacional e baixa maturidade de marketing
businessLocation: Oliveira de Azeméis, Portugal
marketScope: Mercado regional em torno de Oliveira de Azeméis, com uma área de influência relativamente ampla
targetAudience: Principalmente famílias com crianças que procuram odontopediatria; secundariamente, adultos da região que procuram medicina dentária geral, implantes, facetas, cuidados relacionados com roncopatia, ortodontia ou alinhadores transparentes. Estes segmentos devem ser tratados como hipóteses a validar na pesquisa.
businessOffers: Odontopediatria; medicina dentária geral; acompanhamento multidisciplinar em saúde integrada; implantes dentários; facetas; cuidados relacionados com roncopatia; ortodontia; alinhadores transparentes
outputLanguage: pt_BR
```

## Assumptions and open questions

- Confirmar o nome comercial oficial da clínica.
- Dimensionar a empresa por equipa, número de gabinetes, volume de pacientes ou faturação.
- Confirmar o escopo clínico exato dos cuidados de saúde integrada e roncopatia.
- Validar quais serviços são prioridades estratégicas e comerciais além da odontopediatria.
- Confirmar se o relatório final deve usar português do Brasil (`pt_BR`) ou português de Portugal (`pt_PT`).

## Relationships

- Strategy workspace: [[INDEX]]
- Current strategic state: [[MEMORY]]
