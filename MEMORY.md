# Client Hub Memory: Clínica Kids e Family

## Active Projects and Work
- 2026-10-03: Na planilha [lista clínica k&F](https://docs.google.com/spreadsheets/d/1_hS6cHtHbat2uBV_mLLERfoKRLFz7Z6GTuZ2N3aD65k/edit#gid=1178573147), aba `Folha1`, 8.648 telefones nacionais de nove dígitos da coluna C (`telfc1`) foram padronizados com `+351` como texto; valores ambíguos foram preservados para revisão. A exportação CSV e a importação no FluentCRM ainda não foram executadas.
- 2026-10-03: O usuário criou a caixa `cristiane@clinicakidsefamily.pt` no cPanel, confirmada como irrestrita e com cota de 1 GB; o MX público aponta para o próprio domínio e o roteamento está configurado como servidor de mensagens local. O recebimento de uma mensagem externa ainda não foi testado.
- 2026-10-03: O tópico SNS Standard `kidsefamily-email-feedback` em `us-east-1` recebeu a política de publicação restrita ao SES da conta e à identidade `clinicakidsefamily.pt`; a assinatura HTTPS do bounce handler do FluentCRM está `Confirmed`, com raw delivery ativado. Bounce e Complaint foram vinculados ao tópico na identidade SES do domínio; o envio por FluentSMTP e um teste real de evento continuam pendentes.
- 2026-10-03: O usuário IAM `fluentsmtp-kidsefamily` foi criado sem acesso ao console e recebeu a política inline `FluentSMTP-KidsFamily-Send`, com envio restrito a `clinicakidsefamily.pt` em `us-east-1`, mais `ListIdentities` e `GetSendQuota`. As chaves de acesso ainda não foram criadas e a conexão no FluentSMTP continua pendente.
- 2026-10-03: A identidade `clinicakidsefamily.pt` foi criada e verificada no Amazon SES em `us-east-1`, com Easy DKIM de 2048 bits; os três CNAMEs foram publicados no cPanel e confirmados no DNS público. O SES mostra `Verified` e DKIM `Successful`; a conexão Amazon SES no FluentSMTP ainda está por configurar, sem remetente ou credenciais preenchidos.
- 2026-10-02: A propriedade de domínio `clinicakidsefamily.pt` foi conectada ao Google Search Console por TXT; o bloqueio `noindex` da Home foi removido e o índice do sitemap Yoast foi processado com sucesso. A revisão das URLs antigas e dos redirecionamentos da migração continua pendente.
- 2026-09-29: Added the 11 GenerateBlocks Global Classes missing from `cristianemartins.pt` to `clinicakidsefamily.pt`; the destination now has 36 classes, with six same-name style variants preserved.
- 2026-08-26: The 26 August strategy meeting notes/transcript from Gemini were moved from `3 - Meet Recordings` to the shared `CM Meetings` folder; no separate recording was found.
- 2026-08-24: A main page de Estética dentária e restauração foi atualizada no WordPress (`especialidades` id 126; `/especialidades/estetica-dentaria-restauracao/`) com o modelo das restantes especialidades e copy inicial sobre restauração, estética, função, FAQ e CTA.
- 2026-08-24: Odontopediatria FAQ accordion spacing is controlled by the reusable `faq-item-compact` Global Class with 8px top/bottom padding, applied to all five accordion toggles.
- 2026-08-24: The `single-especialidades` template now renders only the shared header, post content, and shared footer; its global title/excerpt shell and `botton` CTA part were removed. Odontopediatria FAQ content uses the GenerateBlocks Pro accordion recipe.
- 2026-08-24: The published Odontopediatria entry (`especialidades` id 118) now has an initial six-section GenerateBlocks content draft (hero, family moments, care areas, three-step method, FAQ accordion, CTA) in the Kids & Family WordPress connection; copy remains for clinical review.
- 2026-08-24: The published DTM/ATM entry (`especialidades` id 120) now uses the Odontopediatria page model with adapted pain, function and mandibular-joint copy, including FAQ accordion and dark-blue context trigger; copy remains for clinical review.
- 2026-08-24: The published Ortodontia entry (`especialidades` id 446; `/especialidades/ortodontia/`) now uses the Odontopediatria page model with adapted alignment, bite, growth and function copy, including FAQ accordion and dark-blue context trigger; copy remains for clinical review.
- 2026-08-24: The existing Sono, respiração e roncopatia entry (`especialidades` id 123; `/especialidades/sono-respiracao-roncopatia/`) was updated with the shared specialty-page model, adapted sleep/respiration copy, dark-blue context trigger and FAQ accordion; copy remains for clinical review.
- 2026-08-24: The existing Medicina dentária geral e cuidado adulto entry (`especialidades` id 124; `/especialidades/medicina-dentaria-adulto/`) was updated with the shared specialty-page model, adapted prevention/continuity copy, dark-blue context trigger and FAQ accordion; copy remains for clinical review.
- 2026-08-24: The existing Implantologia e reabilitação oral entry (`especialidades` id 125; `/especialidades/implantologia-reabilitacao/`) was updated with the shared specialty-page model, adapted planning/alternatives copy, dark-blue context trigger and FAQ accordion; copy remains for clinical review.
- 2026-08-24: The Odontopediatria method section now uses the Home pattern: two columns with an image placeholder on the left and three vertically stacked steps with dividers on the right.
- 2026-08-24: Odontopediatria now includes a dark-blue prevention trigger section between the family-moments section and the care-area section; the local wireframe documents its copy and placement.
- 2026-08-19: Contact page `id 79` now includes a full-width responsive map container, visible clinic address, and an `Abrir no Maps` link; copy and layout remain under review.
- 2026-08-19: The Contact map embed height was fine-tuned to remove a visible white strip at the bottom of the map frame.
- 2026-08-19: The Contact address card was converted from raw HTML to native GenerateBlocks with a two-column desktop layout and mobile stacking.
- 2026-07-26: The client workspace was instantiated from the canonical CoworkOS Knowledge Protocol template and is ready for initial discovery and organization.
- 2026-07-29: The root workspace is versioned in the private GitHub repository `pedroibr/cristianemartins`, with `main` as the default branch.
- 2026-08-04: The initial Context Builder baseline is complete in `workspace/2 - context`, covering business info, journeys, audience profiles, offers, pillars, and lead magnets; the next step is review with Cristiane Martins and Leonardo Machado.

## Decisions
- 2026-08-04: The official business name is confirmed as `Clínica Kids e Family`; Cristiane Martins is the owner.

## Scheduled Tasks
- None recorded yet.

## Core Memory
- 2026-07-26: The clinic is based in Oliveira de Azeméis, Portugal, and serves a relatively broad regional catchment.
- 2026-07-26: The clinic is understood provisionally as a multidisciplinary integrated-health practice led by pediatric dentistry; the service details in root `AGENTS.md` still require validation.
