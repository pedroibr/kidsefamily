---
type: Strategy
title: Deep Market Research Prompt
description: Copy-ready prompt for external deep market research on Clínica Kids e Family and its regional dental market.
status: active
owner: workspace
tags: [strategy, market-research, deep-research, dentistry, portugal]
created: 2026-07-26
updated: 2026-08-24
---

# Deep Market Research Prompt

## Normalized business snapshot

- `businessOwner`: Cristiane Martins — inferred from the client and working business name.
- `businessName`: Clínica Kids e Family — confirmed official business name.
- `businessContext`: Dental clinic with a integrated approach and multidisciplinary team; pediatric dentistry and TMJ/orofacial pain are the proposed entry areas — current strategic direction.
- `businessSize`: Missing.
- `businessStage`: Established operation with operational maturity and limited marketing maturity — inferred.
- `businessLocation`: Oliveira de Azeméis, Portugal — known.
- `marketScope`: Regional catchment around Oliveira de Azeméis, described as relatively broad — known.
- `targetAudience`: Families with children and adults seeking TMJ/orofacial-pain assessment as priority entry hypotheses, plus adults seeking continuity and other dental treatments.
- `businessOffers`: Pediatric dentistry, general dentistry, multidisciplinary integrated-health care, implants, veneers, snoring-related care, orthodontics, and clear aligners — preliminary.
- `outputLanguage`: `pt_PT` — confirmed business language code.

## Copy-ready prompt

```text
Conduct a market research.

Find market tendencies, demand potential, industry and/or region growth drivers and inhibitors, main type of competitors (does not need to be specific competitors), and relevant information. Summary the main findings in a SWOT analysis.

businessOwner: Cristiane Martins
businessName: Clínica Kids e Family
businessContext: Clínica de medicina dentária com abordagem integrada e equipa multidisciplinar. Mantém a medicina dentária como núcleo, considera relações clinicamente relevantes com função, crescimento, respiração, sono e saúde geral e prioriza odontopediatria e ATM/dor orofacial como entradas.
businessSize: Not provided
businessStage: Clínica estabelecida, com maturidade operacional e baixa maturidade de marketing
businessLocation: Oliveira de Azeméis, Portugal
marketScope: Mercado regional em torno de Oliveira de Azeméis, com uma área de influência relativamente ampla
targetAudience: Famílias com crianças que procuram odontopediatria e adultos com dor, sintomas de ATM ou limitações de função mandibular como entradas prioritárias; secundariamente, crianças, famílias e adultos que procuram continuidade, medicina dentária geral, implantes, facetas, roncopatia, ortodontia ou alinhadores. Estes segmentos devem ser validados na pesquisa.
businessOffers: Odontopediatria; DTM e dor orofacial relacionada à ATM; medicina dentária geral; acompanhamento multidisciplinar; implantes dentários; facetas; cuidados relacionados com roncopatia; ortodontia; alinhadores transparentes
outputLanguage: pt_PT
```

## Assumptions and open questions

- Dimensionar a empresa por equipa, número de gabinetes, volume de pacientes ou faturação.
- Confirmar o escopo clínico exato dos cuidados de saúde integrada e roncopatia.
- Validar a procura, a capacidade e as provas de odontopediatria e ATM/dor orofacial como entradas prioritárias.
- Validar a compreensão e a defensabilidade do posicionamento de medicina dentária integrada.

## Relationships

- Strategy workspace: [[INDEX]]
- Current strategic state: [[MEMORY]]
