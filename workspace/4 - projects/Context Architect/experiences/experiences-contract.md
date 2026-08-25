---
type: Reference
title: Experiences Contract
description: Contrato de classificação e uso de experiências no Context Builder.
status: active
owner: Pedro Raimundo
tags: [context-builder, experiences, evidence]
created: 2026-08-18
updated: 2026-08-18
---

# Experiences Contract

## Experience Types

| Type | Use | Core structure |
| --- | --- | --- |
| `testimonial` | Voz direta de um cliente, paciente, parceiro ou audiência. | Contexto mínimo, citação fiel, experiência percebida, impacto relatado e autorização. |
| `caseStudy` | História estruturada de transformação ou percurso de um cliente/paciente. | Antes, mudança desejada, processo, depois, estado atual, impacto observado e limites. |
| `learning` | Aprendizagem de Pedro, da equipa ou do próprio negócio. | O que aconteceu, expectativa, descoberta, reflexão, aplicação e impacto. |

## Universal Connections

Each record should map to:

- `relatedOffers`
- `relatedProfiles`
- `relatedJourneys`
- `relatedPillars`
- `candidatePlacements`

## Evidence and Safety

- A direct quote must remain faithful to the source.
- A case study separates observed facts from interpretation and promise.
- A learning is not presented as a client result.
- `permissionStatus`, `anonymization`, and `evidenceStatus` are required before public use.
- A source can support a page, case-study hub, testimonial block, lead magnet, article, social post, or strategy report; each target asset still needs its own review.
