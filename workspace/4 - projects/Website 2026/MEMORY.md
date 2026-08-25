# Website 2026 Memory

## Active Projects and Work
- 2026-08-24: A main page de Estética dentária e restauração foi atualizada no WordPress (`especialidades` id 126; `/especialidades/estetica-dentaria-restauracao/`) com o modelo das restantes especialidades e copy inicial sobre restauração, estética, função, FAQ e CTA.
- 2026-08-24: A main page existente de Implantologia e reabilitação oral foi atualizada no WordPress (`especialidades` id 125; `/especialidades/implantologia-reabilitacao/`) com o modelo partilhado, copy de planeamento e alternativas, gatilho azul e FAQ em acordeão; falta revisão clínica.
- 2026-08-24: A main page existente de Medicina dentária geral e cuidado adulto foi atualizada no WordPress (`especialidades` id 124; `/especialidades/medicina-dentaria-adulto/`) com o modelo partilhado, copy de prevenção e continuidade, gatilho azul e FAQ em acordeão; falta revisão clínica.
- 2026-08-24: A main page existente de Sono, respiração e roncopatia foi atualizada no WordPress (`especialidades` id 123; `/especialidades/sono-respiracao-roncopatia/`) com o modelo partilhado, copy adaptada, gatilho azul e FAQ em acordeão; falta revisão clínica.
- 2026-08-24: A main page de Ortodontia foi publicada no WordPress como `especialidades` id 446, usando o modelo da Odontopediatria e copy inicial adaptada; o wireframe foi atualizado com o gatilho azul, FAQ em acordeão e estado de produção em revisão.
- 2026-08-24: O sitemap V3 é o plano canónico de arquitetura: sete serviços principais, três subserviços ativos, templates, macro-seções e três lead magnets separados; V1 e V2 estão arquivados.
- 2026-08-18: A fonte de conteúdo do website começou a ser organizada em wireframes Markdown, com um arquivo por página e conexões internas declaradas.
- 2026-08-18: Referências técnicas e visuais do WordPress/GenerateBlocks ficam em `references/`; não são conteúdo publicável e orientam adaptações para `wireframes/`.
- 2026-08-18: As páginas institucionais Início, Sobre e Contacto têm conteúdo V1 em Markdown; cada seção declara tagline, título, conteúdo e display antes da implementação Gutenberg.
- 2026-08-18: Testimonials e case studies terão pastas próprias para intake e classificação de prova; media continuará centralizada em `workspace/6 - media_assets`.
- 2026-08-24: A fonte Markdown e a Home publicada no WordPress apresentam “medicina dentária integrada”; a alteração preservou a estrutura GenerateBlocks existente.
- 2026-08-24: O processo oficial foi separado em quatro fases: Sitemap, Wireframe em Markdown, Style Guide/Design MD e implementação visual; o detalhe está em `skills/site-workflow/SKILL.md`.

## Decisions
- 2026-08-18: Usar a página WordPress `/especialidades/` como hub; manter páginas comerciais individuais no CPT `especialidades` e artigos no tipo `post`.
- 2026-08-18: Separar o nível editorial da página do tipo técnico do WordPress; serviços principais e subserviços podem compartilhar o CPT `especialidades` sem exigir URLs aninhadas.
- 2026-08-18: Cada URL terá uma intenção primária e um destino comercial; páginas de campanha quase duplicadas deverão usar `noindex` ou canonical conforme implementação.
- 2026-08-18: Cada página terá um Markdown canónico em `wireframes/`, frontmatter de produção/SEO e uma seção `Page Connections`; o Markdown será aprovado antes da implementação no WordPress.
- 2026-08-24: “Medicina dentária integrada” é o termo público canónico; descreve uma abordagem clínica e organizacional, não uma nova especialidade nem a promessa de tratar tudo ao mesmo tempo.
- 2026-08-18: O conteúdo público do Website 2026 deve ser redigido e revisto sempre em português de Portugal (PT-PT), incluindo grafia, vocabulário e CTAs.
- 2026-08-18: A página Início usa três caminhos simplificados para ajudar a pessoa a identificar-se: Infância e desenvolvimento; Dor, função e sono; Saúde oral e reabilitação estética. Os CTAs principais são “Encontrar o cuidado adequado” e “Marcar consulta”.
- 2026-08-18: Frases curtas de crença/valor podem funcionar como quebras visuais no conteúdo institucional; foram adicionadas uma à Início e uma à Sobre.
- 2026-08-18: Foram criados quatro testemunhos apenas como exemplos editoriais em `post-types/testimonials/`, com nome ilustrativo, posição, texto e `highlightText`; não são prova social nem podem ser publicados sem relatos autorizados.
- 2026-08-18: A pasta `wireframes/hubs/` concentra páginas agregadoras como Blog e Especialidades; hubs listam e encaminham, sem substituir as páginas-filhas.
- 2026-08-18: A referência `home-services-testimonials-generateblocks-reference.md` documenta tabs/listagens de serviços e carousel de testemunhos; deve orientar a implementação visual, sem reutilizar conteúdo ou dados do site de origem.
- 2026-08-18: A referência `simple-landing-page-generateblocks-reference.md` documenta uma landing page curta com hero, benefícios, imagem e CTA repetido; deve orientar futuras páginas de lead magnet ou entrada, sem copiar conteúdo ou dados de origem.
- 2026-08-18: Criado `references/design.md` com a paleta, tipografia, layout, CSS global e 18 classes GenerateBlocks observadas no site QC Martins; as classes novas estão apenas propostas e não foram criadas no WordPress.
- 2026-08-18: Adicionado `references/website-section-types.xlsx` e a interpretação `website-section-types.md`, com 19 tipos de secção para orientar briefings e display; o catálogo é referência flexível e deve ser adaptado à estratégia, contexto clínico e PT-PT.
- 2026-08-18: As secções das páginas institucionais Início, Sobre e Contacto passaram a indicar o tipo correspondente do catálogo de secções, incluindo adaptações explícitas para crenças, WhatsApp e localização.
- 2026-08-18: A Home WordPress `id 13` recebeu a primeira implementação GenerateBlocks V1, substituindo o placeholder por cinco secções e mantendo imagens/refinamentos para revisão.
- 2026-08-18: Corrigido o alinhamento global de `gbp-section__inner`: adicionados `width: 100%` e margens automáticas, preservando o limite de `1100px` para centralizar as secções em ecrãs largos.
- 2026-08-18: `gbp-button--secondary` foi alinhado à geometria do primário, mas invertido: transparente por defeito, texto/borda em `contrast`, radius de `24px` e preenchimento escuro no hover/focus.
- 2026-08-24: A secção comparativa da Home mantém três itens curtos por card e deve destacar benefícios concretos da abordagem integrada: contexto relevante, coordenação e próximo passo claro.
- 2026-08-24: O Design MD específico foi movido para `style-guide/design.md`; `references/` mantém apenas exports e referências técnicas do projeto.
- 2026-08-24: Foi testada uma skill global para o workflow, mas ela foi removida a pedido; as instruções canónicas agora vivem em `skills/` dentro do projeto.
- 2026-08-24: A skill instalada no Codex foi removida a pedido; as instruções passaram a ser documentação local em `skills/`, preparada para futura incorporação ao plugin.
- 2026-08-24: A estrutura foi separada em `sitemap/`, `wireframes/`, `style-guide/`, `post-types/` e `skills/`; os documentos SEO antigos estão em `sitemap/archive/seo-legacy-20260824/`.
- 2026-08-24: A camada antes chamada `cms/` foi renomeada para `post-types/` para refletir que reúne tipos de post extensíveis, começando por blog, testimonials e case studies.
- 2026-08-24: O catálogo técnico de layouts foi cancelado; o wireframe permanece simples e referências visuais serão criadas apenas a partir de prints aprovados.
- 2026-08-24: A primeira referência visual `section-001` foi criada a partir de quatro prints e documenta um hero com eyebrow, headline, descrição e elemento opcional.
- 2026-08-24: As skills locais passaram a viver em pastas próprias com `SKILL.md`; layouts-base e referências visuais ficam dentro da skill de Sitemap.
- 2026-08-18: A secção “Como o cuidado avança” da Home passou para duas colunas: três passos verticais com dois divisores à esquerda e container reservado para imagem à direita.
- 2026-08-19: Guardada em `references/home-generateblocks-reference-2026-08-19.md` a Home mais recente enviada pelo utilizador, com refinamentos de classes, listas, separadores e contentores reservados.
- 2026-08-19: A página Sobre (WordPress page 78) recebeu uma primeira versão GenerateBlocks V1 com sete secções, em PT-PT e sem imagem; o conteúdo da equipa permanece reservado para validação.
- 2026-08-19: A grelha de metodologia da página Sobre foi corrigida para duas colunas: passos em coluna vertical com separadores à esquerda e contentor visual reservado à direita, responsiva para uma coluna em mobile.
- 2026-08-19: O documento `sobre.md` foi reduzido para quatro secções: hero institucional, abordagem da clínica, uma frase de crença e equipa; foram removidos os blocos repetidos de processo, benefícios da experiência e segunda frase de crença. A alteração ainda aguarda publicação no WordPress.
- 2026-08-19: A versão reduzida do `sobre.md` foi sincronizada com a página WordPress 78; a página publicada agora tem quatro secções e mantém apenas a equipa como bloco exclusivo de apresentação.
- 2026-08-19: A página Contacto (WordPress page 79) recebeu a primeira versão GenerateBlocks com CTA para WhatsApp, três passos verticais e container reservado para o mapa; morada, horários e fluxo de resposta continuam por confirmar.
- 2026-08-19: A secção “O que acontece depois” da página Contacto foi padronizada como três cards lado a lado no desktop e uma coluna no mobile, mantendo o conteúdo editado pelo utilizador.

## Scheduled Tasks
- None recorded yet.

## Core Memory
- 2026-08-18: ATM/dor orofacial e odontopediatria são as duas entradas comerciais prioritárias; as demais áreas sustentam continuidade e expansão do cuidado.
