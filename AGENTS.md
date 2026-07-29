# Client Hub: Clínica Cristiane Martins

## Purpose
- This root governs the durable knowledge workspace for Clínica Cristiane Martins.
- The workspace follows the CoworkOS Knowledge Protocol, but this folder is an active client workspace, not the protocol template itself.

## Initial Business Brief
- Treat `Clínica Cristiane Martins` as the provisional business name until the official naming is confirmed.
- The business is a multidisciplinary integrated-health clinic whose strongest dental area is pediatric dentistry.
- The preliminary dental service scope also includes general dentistry, dental implants, veneers, snoring-related care, orthodontics, and clear aligner treatment.
- Service names, clinical scope, and relative commercial importance are initial context only; confirm them before using them in public-facing strategy, positioning, or copy.

## Memory System
- Always read root `MEMORY.md` at session start.
- Always read root `ENV.md` at session start when it exists.
- Then read the `AGENTS.md` and `MEMORY.md` files from each parent folder down to the current folder.
- When `ENV.md` exists, read it from root down to the current folder and apply nearest values as overrides.
- Apply durable rules before mutable memory.
- `AGENTS.md` is for prescriptive behavior, scope, routing, and guardrails.
- `MEMORY.md` is for facts, current state, important decisions, milestones, recent changes, and open loops.
- `ENV.md` is for stable parameters and resource pointers only.
- Never store secrets, API keys, tokens, passwords, or credentials in `ENV.md`.
- If an entry says `always`, `never`, or `before/when X, do Y`, it belongs in `AGENTS.md`, not `MEMORY.md`.
- If an entry is a fact that could change later, it belongs in `MEMORY.md`.
- Root `MEMORY.md` hard ceiling: `150 lines`.
- Every memory entry should be `1-2 sentences max`.
- Every new `MEMORY.md` or `ARCHIVE.md` entry must include a date in `YYYY-MM-DD` format.
- When a `MEMORY.md` breaches its ceiling, fix it with compression and `archive/ARCHIVE.md`, never by raising the ceiling.
- `ARCHIVE.md` is cold storage and should not be read by default.

## Preferences
- Keep files concise, structured, and easy to scan.
- Prefer updating the smallest relevant scope instead of editing many files.
- Do not repeat parent rules in child folders unless the child is adding a narrower constraint.
- When ending a work session, update `MEMORY.md` only with the highest-signal restart context.
- During work, make lightweight system-file updates only when they prevent context loss; use `$session-wrap-up-v2` at session end for full housekeeping.
- Always ask for user approval before editing `AGENTS.md` or `ENV.md`.

## Rules
- Root `AGENTS.md` target size: `200-250 lines`; hard ceiling: `300 lines`.
- Child `AGENTS.md` files should stay lean; target: under `120 lines`.
- Root `MEMORY.md` uses this fixed structure:
  - `Active Projects and Work`
  - `Decisions`
  - `Scheduled Tasks`
  - `Core Memory`
- Child `MEMORY.md` files use this same fixed structure:
  - `Active Projects and Work`
  - `Decisions`
  - `Scheduled Tasks`
  - `Core Memory`
- Use `YYYY-MM-DD: ...` for any dated memory or archive entry.
- Save to `MEMORY.md` only when there is:
  - a fact that may matter later
  - an important decision
  - a milestone completion
  - a meaningful state change
  - an explicit instruction from the user to remember something
- Do not save chatter, raw transcripts, or minor execution detail.
- If a decision affects multiple sibling folders, record it at the lowest common parent.
- If a rule applies to the whole business, keep it only here.
- Use this test for new folders: `Is this a place we work or a thing we do?`
- Ongoing areas with context accumulation become folders.
- Repeatable checklists or automations should become skills or plugins, not more persistent folder context.

## Routing Map
- `workspace/1 - strategy`: business direction, positioning, offers, and priorities.
- `workspace/2 - context`: reference knowledge about the business, market, systems, and stack.
- `workspace/3 - goals`: targets, KPI definitions, and planning logic.
- `workspace/4 - projects`: bounded initiatives with clear scope or outcome.
- `workspace/5 - operation`: recurring business operations by function.
- `workspace/6 - media_assets`: reusable assets and brand/media source files.
- `workspace/7 - clients`: optional external account or client structures.

## References
- Read `workspace/AGENTS.md` for cross-workspace behavior.
- Read `MEMORY.md` for current root context.
- Use `PROJECT_CONTACTS.md` only to resolve people for communication or consultation specifically about this workspace and its projects.
- For unrelated work, other clients, external systems, or CRM tasks, resolve recipients from the relevant context instead of reusing `PROJECT_CONTACTS.md`.
- Read `archive/ARCHIVE.md` only when historical context is explicitly needed.
- The protocol source of truth is the private GitHub repository `pedroibr/knowledge-protocol`.
- Monday.com remains an execution layer; this workspace remains the durable context layer.

## Creating New Contexts
- New folders should inherit parent rules automatically and add only local context.
- Every meaningful new folder should contain:
  - `AGENTS.md`
  - `CLAUDE.md`
  - `MEMORY.md`
  - `INDEX.md`
  - `LOG.md`
  - optional `ENV.md` only when the folder needs stable parameters or resource pointers
  - optional `archive/ARCHIVE.md` only when memory needs cold storage
- Every folder containing `AGENTS.md` must also contain `CLAUDE.md` as a compatibility pointer for Claude.
- Each `CLAUDE.md` must contain only `Read and follow AGENTS.md in this folder.`; keep all durable instructions in the colocated `AGENTS.md`.
- Standard child `AGENTS.md` structure:
  - `Purpose`
  - `Inheritance`
  - `Rules`
  - `Routing`
- Standard child `MEMORY.md` structure:
  - `Active Projects and Work`
  - `Decisions`
  - `Scheduled Tasks`
  - `Core Memory`
- Standard child `INDEX.md` should map the folder's key documents, child folders, and related context.
- Standard child `LOG.md` should record chronological changes for the folder.
- Optional child `ENV.md` should contain only short stable values such as IDs, URLs, slugs, locale, limits, and expected variable names.
- Non-system Markdown files should follow the CoworkOS Knowledge Protocol typed-document rules.
- This workspace is instantiated for `Clínica Cristiane Martins`.

## Session Housekeeping
- During active work, update system files only for high-signal changes: important decisions, critical state, new stable parameters, meaningful navigation changes, and structural/document-level changes.
- `MEMORY.md`, `LOG.md`, and `INDEX.md` may be updated with minimal scoped edits when needed.
- `AGENTS.md` and `ENV.md` require explicit user approval before every edit because they control durable behavior and configuration.
- At the end of a meaningful session, use `$session-wrap-up-v2` to validate protocol fit and update `AGENTS.md`, `MEMORY.md`, `ENV.md`, `INDEX.md`, `LOG.md`, and archives as needed.
