# Website 2026 Wireframes Memory

## Active Projects and Work
- 2026-09-08: A biblioteca declarativa de famílias foi movida deste projeto para `Cristiane Martins/Website 2026/skills/wireframe/references/sections-library/`; os links ativos deste projeto agora apontam para a localização atual.
- 2026-09-01: Criada a biblioteca declarativa de wireframes com as famílias iniciais `hero-split`, `hero-media-stack`, `hero-centered-media-bottom`, `hero-background-overlay`, `content-split-list` e `benefits-split-grid`; a biblioteca foi posteriormente organizada em `../references/Sections Library/`, sem acoplamento ao GenerateBlocks.
- 2026-08-24: Os documentos de páginas foram movidos de `pages/` para `wireframes/`.
- 2026-08-24: Foram criados os cinco wireframes de main services que faltavam; todos seguem o Sitemap V4 e permanecem como `notStarted` no WordPress.
- 2026-08-24: O wireframe e a página de ATM/DTM foram alinhados ao modelo da Odontopediatria, com gatilho de contexto, blocos de sinais/clareza, método em duas colunas, FAQ e CTA.

## Decisions
- 2026-09-01: A biblioteca de wireframes precede as bibliotecas de componentes, secções e páginas-template; wireframes usam nomes semânticos e parâmetros completos, enquanto o mapeamento técnico para GenerateBlocks fica para uma fase posterior.
- 2026-09-01: Prints validam presets, não limitam o schema: opções estruturalmente compatíveis e explicitamente aprovadas pelo utilizador são registadas como `approved`, distintas das opções `observed`.
- 2026-09-01: Toda família com ação de botões também suporta `action.type: form` como opção `approved`; os valores do formulário permanecem no schema mesmo se o print mostrar apenas botões.
- 2026-08-24: Wireframes expandem o sitemap, mas não criam novas páginas nem post types.

## Scheduled Tasks
- None recorded yet.

## Core Memory
- 2026-08-24: Páginas institucionais, hubs, serviços e landing pages ficam nesta camada.
