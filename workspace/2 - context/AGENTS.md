# Workspace: Context

## Purpose

This folder is the canonical Context Builder library for the business. It holds durable reference knowledge needed to understand the business and create strategy, content, campaigns, pages, ads, offers, and related assets consistently.

## Inheritance

- Inherit all root and workspace-layer rules automatically.
- Keep this file focused on local document contracts; generation, diagnosis, ideation, and optimization procedures belong in reusable skills.

## Canonical Documents

Use these exact filenames and frontmatter titles:

- `business_info.md` — `Business Info`
- `journeys.md` — `Journeys`
- `audience_profiles.md` — `Audience Profiles`
- `offers.md` — `Offers`
- `pillars.md` — `Pillars`
- `lead_magnets.md` — `Lead Magnets`

Do not prefix filenames with the business name, workflow name, or date.

## Document Structure

- Use Knowledge Protocol frontmatter with `type`, `title`, `description`, `status`, `owner`, `tags`, `created`, and `updated`.
- Use `## Item: Item Name` for each record, followed by a two-column `Field | Value` Markdown table.
- Use the exact field names defined below and never leave required fields empty.
- When information is unknown or unconfirmed, use an explicit qualified value appropriate to the field instead of a blank cell.
- Keep values concise enough to scan but complete enough to support downstream asset creation.

## Required Fields

### `business_info.md`

`businessName`, `businessDescription`, `brandVoiceGuidelines`, `excludedWordsPhrases`, `writingGradeLevel`, `language`, `clientID`.

### `journeys.md`

`businessAssets`, `profiles`, `mechanismINPUT`, `multiStepINPUT`, `journeyDescription`.

### `audience_profiles.md`

`businessAssets`, `journeys`, `audienceDescription`, `reasonToEngage`.

### `offers.md`

`businessAssets`, `profiles`, `journeys`, `offerType`, `offerFormat`, `offerAttention`, `offerEffort`, `offerHowToGetIt`, `offerCore`, `offerValueEquation`, `offerStack`, `offerGuarantees`, `offerActivation`, `offerValueProposition`, `offerCustomName`.

### `pillars.md`

`businessAssets`, `profiles`, `journeys`, `offers`, `pillarDescription`, `coreTopics`, `offerBridge`.

### `lead_magnets.md`

`businessAssets`, `profiles`, `journeys`, `offers`, `leadMagnetType`, `leadMagnetScope`, `deliveryMechanism`, `offerFormat`, `offerAttention`, `offerEffort`, `offerHowToGetIt`, `offerCore`, `offerValueEquation`, `offerStack`, `offerValueProposition`, `offerCustomName`, `bridgeToOffer`.

Do not add `offerType`, `offerPaymentType`, or `offerPrice` to lead magnet records.

## Relationship and Evidence Rules

- Use exact item names in relation fields; separate multiple related items with commas.
- Connect each profile to at least one journey.
- Connect each offer to at least one profile and journey.
- Connect each pillar to at least one offer, profile, and journey.
- Connect each lead magnet to at least one target offer, profile, and journey.
- Keep `businessAssets` consistent with the canonical business name.
- Keep unapproved ideas outside canonical fields. Use `suggestedForValidation` until the user explicitly registers or approves them.
- Use `noneConfirmed` for unconfirmed offer bonuses, guarantees, scarcity, or urgency; never present them as existing components.
- Distinguish existing assets from approved concepts that still need implementation.
- For clinical or regulated content, preserve professional-review requirements, evidence limits, and the distinction between education or triage and diagnosis.

## Maintenance

- Update `INDEX.md` whenever a canonical document is added, removed, or renamed.
- Update `LOG.md` for document-level and structural changes.
- Update `MEMORY.md` only for high-signal current state or durable decisions.
- Keep reusable generator skills synchronized when this contract's filenames or required fields change.
- Do not use this folder for live project execution or transient drafts.

## Routing

- Keep explanations of the business, audiences, journeys, offers, pillars, lead magnets, market, systems, and stack here.
- Route strategic reports and brand reports to `workspace/1 - strategy`.
- Route bounded execution initiatives to `workspace/4 - projects` and recurring work to `workspace/5 - operation`.
