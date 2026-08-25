# Project: Context Architect

## Purpose

Evoluir o Context Architect e os seus contratos de documentação para que o Context Builder preserve não só o modelo do negócio, mas também as experiências que dão origem a prova, conteúdo, autoridade e aprendizagem.

## Inheritance

- Inherit all root, workspace, and projects rules automatically.
- The Business Architect plugin source remains in `marketplaces/strategy/plugins/business-architect`.
- The reusable skill library mirror remains in `workspace/4 - projects/skill_workflow_library/skills/business-architect`.

## Rules

- `Experiences` is an optional evidence layer of Context Builder, not a replacement for business info, journeys, profiles, offers, pillars, or lead magnets.
- Use exactly three controlled experience types: `testimonial`, `caseStudy`, and `learning`.
- Preserve source fidelity. Never invent a quote, result, clinical claim, business impact, or transformation.
- Every experience record must connect to the relevant offers, profiles, journeys, pillars, and candidate content placements when known.
- Separate raw source, structured interpretation, evidence status, permission status, and publication status.
- Use explicit values such as `notCapturedInSource`, `notApplicable`, `pending`, or `needsReview`; never hide uncertainty in an empty field.
- Client stories require permission and appropriate anonymization before public use.
- The experience skill may classify and structure material, but it must not turn unapproved material into public-facing proof automatically.

## Routing

- Canonical client records live in each business's `workspace/2 - context/experiences.md`.
- Reusable generation and classification rules live in `skills/experience-architect/SKILL.md` in the plugin and skill library mirrors.
- Experience records can inform pages, case-study hubs, testimonials, landing pages, blog posts, social content, and strategy reports, but the target asset remains responsible for its own editorial review.
