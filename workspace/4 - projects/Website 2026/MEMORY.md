# Website 2026 Memory

## Active Projects and Work
- 2026-08-18: O mapa SEO V1 organiza o website em hub de especialidades, páginas de serviço principal, subserviços, clusters editoriais e landing pages de campanha.
- 2026-08-18: A fonte de conteúdo do website começou a ser organizada em `pages/`, com um arquivo Markdown por página e conexões internas declaradas.
- 2026-08-18: Referências técnicas e visuais do WordPress/GenerateBlocks ficam em `references/`; não são conteúdo publicável e devem orientar adaptações para os arquivos em `pages/`.
- 2026-08-18: As páginas institucionais Início, Sobre e Contacto têm conteúdo V1 em Markdown; cada seção declara tagline, título, conteúdo e display antes da implementação Gutenberg.
- 2026-08-18: Testimonials e case studies terão pastas próprias para intake e classificação de prova; media continuará centralizada em `workspace/6 - media_assets`.
- 2026-08-18: A página Início passou a apresentar “medicina dentária sistémica para a família” como direção de posicionamento, com explicação comparativa entre clínica dentária focada, policlínica generalista e a abordagem da Kids e Family.

## Decisions
- 2026-08-18: Usar a página WordPress `/especialidades/` como hub; manter páginas comerciais individuais no CPT `especialidades` e artigos no tipo `post`.
- 2026-08-18: Separar o nível editorial da página do tipo técnico do WordPress; serviços principais e subserviços podem compartilhar o CPT `especialidades` sem exigir URLs aninhadas.
- 2026-08-18: Cada URL terá uma intenção primária e um destino comercial; páginas de campanha quase duplicadas deverão usar `noindex` ou canonical conforme implementação.
- 2026-08-18: Cada página terá um Markdown canônico em `pages/`, frontmatter de produção/SEO e uma seção `Page Connections`; o Markdown será aprovado antes da implementação no WordPress.
- 2026-08-18: A expressão “medicina dentária sistémica” deve ser validada pela equipa clínica antes da publicação; no conteúdo, é tratada como abordagem e não como nova especialidade.
- 2026-08-18: O conteúdo público do Website 2026 deve ser redigido e revisto sempre em português de Portugal (PT-PT), incluindo grafia, vocabulário e CTAs.
- 2026-08-18: A página Início usa três caminhos simplificados para ajudar a pessoa a identificar-se: Infância e desenvolvimento; Dor, função e sono; Saúde oral e reabilitação estética. Os CTAs principais são “Encontrar o cuidado adequado” e “Marcar consulta”.
- 2026-08-18: Frases curtas de crença/valor podem funcionar como quebras visuais no conteúdo institucional; foram adicionadas uma à Início e duas à Sobre.
- 2026-08-18: Foram criados quatro testemunhos apenas como exemplos editoriais em `pages/testimonials/`, com nome ilustrativo, posição, texto e `highlightText`; não são prova social nem podem ser publicados sem relatos autorizados.
- 2026-08-18: A pasta `pages/hubs/` concentra páginas agregadoras como Blog e Especialidades; hubs listam e encaminham, sem substituir as páginas-filhas.
- 2026-08-18: A referência `home-services-testimonials-generateblocks-reference.md` documenta tabs/listagens de serviços e carousel de testemunhos; deve orientar a implementação visual, sem reutilizar conteúdo ou dados do site de origem.
- 2026-08-18: A referência `simple-landing-page-generateblocks-reference.md` documenta uma landing page curta com hero, benefícios, imagem e CTA repetido; deve orientar futuras páginas de lead magnet ou entrada, sem copiar conteúdo ou dados de origem.
- 2026-08-18: Criado `references/design.md` com a paleta, tipografia, layout, CSS global e 18 classes GenerateBlocks observadas no site QC Martins; as classes novas estão apenas propostas e não foram criadas no WordPress.
- 2026-08-18: Adicionado `references/website-section-types.xlsx` e a interpretação `website-section-types.md`, com 19 tipos de secção para orientar briefings e display; o catálogo é referência flexível e deve ser adaptado à estratégia, contexto clínico e PT-PT.
- 2026-08-18: As secções das páginas institucionais Início, Sobre e Contacto passaram a indicar o tipo correspondente do catálogo de secções, incluindo adaptações explícitas para crenças, WhatsApp e localização.
- 2026-08-18: A Home WordPress `id 13` recebeu a primeira implementação GenerateBlocks V1, substituindo o placeholder por cinco secções e mantendo imagens/refinamentos para revisão.
- 2026-08-18: Corrigido o alinhamento global de `gbp-section__inner`: adicionados `width: 100%` e margens automáticas, preservando o limite de `1100px` para centralizar as secções em ecrãs largos.
- 2026-08-18: `gbp-button--secondary` foi alinhado à geometria do primário, mas invertido: transparente por defeito, texto/borda em `contrast`, radius de `24px` e preenchimento escuro no hover/focus.
- 2026-08-18: A secção comparativa da Home foi refinada com três itens curtos por card, mantendo comparação suave e destacando os benefícios da abordagem sistémica.
- 2026-08-18: A secção “Como o cuidado avança” da Home passou para duas colunas: três passos verticais com dois divisores à esquerda e container reservado para imagem à direita.

## Scheduled Tasks
- None recorded yet.

## Core Memory
- 2026-08-18: ATM/dor orofacial e odontopediatria são as duas entradas comerciais prioritárias; as demais áreas sustentam continuidade e expansão do cuidado.
