---
type: Log
title: Website 2026 Log
description: Registro cronológico das mudanças estruturais do projeto Website 2026.
status: active
owner: Pedro Raimundo
tags: [project, website, log]
created: 2026-08-18
updated: 2026-08-24
---

# Website 2026 Log

## 2026-08-18

- Formalizado o projeto Website 2026 e criada a área SEO.
- Criada a primeira versão do mapa do site com serviços principais, subserviços, clusters de conteúdo, landing pages e regras de intenção.
- Criada a estrutura `pages/` para manter um Markdown por página, com pastas institucionais, serviços, subserviços, landing pages e blog; criados os primeiros rascunhos de Início, Sobre e Contacto.
- Criada a pasta `references/` para preservar exports e padrões técnicos de WordPress/GenerateBlocks sem misturá-los com as páginas publicáveis.
- Criado o conteúdo V1 das páginas institucionais Início, Sobre e Contacto, com tagline, título, conteúdo, estrutura de display, cards/passos e conexões internas.
- Criadas as pastas `pages/testimonials/` e `pages/case-studies/`, com regras para classificar prova social, autorizações, especialidades relacionadas, ofertas e locais de utilização; media continuará referenciada em `workspace/6 - media_assets`.
- Atualizada a página Início para refletir a proposta de medicina dentária sistémica para a família; incluída uma secção comparativa e removidas as secções de portas de entrada, confiança/equipa e CTA final do conteúdo editorial.
- Revisto o vocabulário das páginas, referências e sitemap para manter português de Portugal (PT-PT), incluindo `Contacto`, `equipa`, `secção`, `registo`, `factos` e `marcação`.
- Refinada a página Início: mantido o título “Cuidar da boca. Compreender o todo.”, definidos os CTAs “Encontrar o cuidado adequado” e “Marcar consulta”, e substituída a proposta anterior por três caminhos simplificados: infância e desenvolvimento; dor, função e sono; saúde oral e reabilitação estética.
- Adicionadas frases de crença como quebras visuais na Início e na Sobre, e criados quatro testemunhos editoriais ilustrativos em `pages/testimonials/testimonials.md`, marcados como não publicáveis até existirem relatos autorizados.
- Criada a pasta `pages/hubs/` para páginas agregadoras de Blog e Especialidades, com regras de listagem, ligação e não duplicação de conteúdo.
- Guardada a referência `home-services-testimonials-generateblocks-reference.md`, com padrões de tabs/listagem de serviços e carousel de testemunhos em GenerateBlocks Pro.
- Guardada a referência `simple-landing-page-generateblocks-reference.md`, com padrão de landing page curta para orientação, benefícios e inscrição/reserva.
- Recolhido o estado visual do site QC Martins via Site Editor e GenerateBlocks: criada `references/design.md` com presets, CSS global e inventário das 18 classes existentes; nenhuma alteração foi aplicada ao site.
- Adicionado o workbook `references/website-section-types.xlsx` e criada a sua leitura editorial em `references/website-section-types.md`, com 19 padrões de secção e regras de adaptação ao website da clínica.
- Classificadas todas as secções actuais de Início, Sobre e Contacto com `Section type`, ligando-as ao catálogo e sinalizando adaptações híbridas ou não literais.
- Aplicada no WordPress a primeira Home GenerateBlocks V1 na página `id 13`: placeholder substituído por hero, abordagem sistémica, crença, caminhos de cuidado e metodologia; a página continua publicada para revisão.
- Corrigida a classe global `gbp-section__inner` para centralizar e preencher correctamente a largura disponível (`width: 100%`, `max-width: 1100px`, margens automáticas); CSS do GenerateBlocks regenerado.
- Actualizada a classe global `gbp-button--secondary`: mesma geometria do primário, fundo transparente, borda/texto `contrast`, radius `24px` e inversão para fundo escuro no hover/focus.
- Refinada a secção comparativa da Home na página WordPress `id 13`: cada card passou de um parágrafo para três itens curtos; a comparação mantém tom respeitoso e a abordagem sistémica explicita os seus benefícios.
- Reestruturada a secção “Como o cuidado avança” na Home `id 13`: passos em coluna vertical com dois divisores e container vazio à direita reservado para imagem.

## 2026-08-19

- Guardada a Home GenerateBlocks mais recente enviada pelo utilizador em `references/home-generateblocks-reference-2026-08-19.md`, mantendo o markup original como referência técnica.
- Estruturada e publicada a página Sobre `id 78` no WordPress com sete secções GenerateBlocks V1, classes globais existentes, dois blocos de crença e um contentor reservado sem imagem.
- Atualizado `pages/institutional/sobre.md` para `productionStatus: inProgress`, tagline em PT-PT e nota de validação da equipa/media.
- Corrigida a grelha da secção de metodologia da página Sobre `id 78`: passos em coluna vertical com dois separadores e contentor reservado à direita; em ecrãs pequenos, passa para uma coluna.
- Reduzido o documento `sobre.md` para quatro secções, removendo os blocos de processo, benefícios da experiência e a segunda frase de crença; a nova versão aguarda publicação após validação.
- Sincronizada a página Sobre `id 78` com a versão reduzida do documento: hero institucional, abordagem, uma frase de crença e equipa; removidos os três blocos repetidos.
- Criada a primeira versão da página Contacto `id 79` em GenerateBlocks: hero com CTA WhatsApp, passos verticais de orientação e espaço reservado para o mapa; dados práticos permanecem pendentes de confirmação.
- Padronizada a secção de passos da página Contacto `id 79` como três cards com borda lado a lado no desktop e uma coluna no mobile; o restante da página e os ajustes recentes do utilizador foram preservados.
- Estilizado o mapa da página Contacto `id 79`: embed responsivo em largura total com borda, raio e sombra; adicionados cartão de morada e botão `Abrir no Maps`.
- Ajustada a altura do embed do mapa para eliminar a faixa branca inferior e garantir o preenchimento visual do container.
- Convertido o cartão de morada de HTML para blocos nativos GenerateBlocks, com conteúdo à esquerda, CTA à direita e empilhamento mobile.
- Criados os primeiros documentos de páginas de serviço: `odontopediatria.md`, `respiracao-oral-infantil.md` e `dtm-dor-orofacial.md`, com estrutura SEO, conteúdo comercial, FAQs, limites clínicos e ligações internas.

## 2026-08-24

- Substituída a terminologia canónica de posicionamento por “medicina dentária integrada” nas fontes de página e referências editoriais ativas; referências brutas de GenerateBlocks continuam preservadas como snapshots históricos.
- Arquivado o sitemap V1 e ativado um sitemap V2 mais simples, com sete páginas principais e apenas três subserviços na primeira versão.
- Sincronizada a Home publicada no WordPress, substituindo a terminologia anterior por “medicina dentária integrada” sem alterar a estrutura GenerateBlocks.
- Atualizadas as referências de posicionamento nos rascunhos derivados do blog; usos clínicos legítimos como “doenças sistémicas” foram preservados porque não nomeiam a abordagem da marca.
- Arquivado o sitemap V2 e ativado o sitemap V3, que estabelece templates, macro-seções, inventário de páginas e a fronteira entre páginas estruturais e recursos/post types.
- Criado `workflow.md` para documentar as quatro fases de produção e movido o Design MD para `style-guide/design.md`.
- Removida a skill instalada no Codex; as instruções de workflow foram transformadas em documentação local na pasta `skills/`, para futura incorporação ao plugin.
- Reestruturado o projeto em `sitemap/`, `wireframes/`, `style-guide/`, `post-types/`, `references/` e `skills/`; SEO e histórico ficam em `sitemap/SEO/`.
- Renomeada a pasta `cms/` para `post-types/`; a camada pode receber novos tipos de post quando o projeto exigir.
- Removida a pasta vazia `wireframes/shared/`; blocos e contratos reutilizáveis ficam nas referências das skills.
- Achatada a área SEO para `sitemap/SEO.md` e criada `sitemap/archive/` para versões históricas e duplicados.
- Movidos os catálogos de tipos e layouts para `skills/references/`, com contrato separado para `sectionType` e `layoutId`.
- Padronizada a árvore de layout como `sectionBlock → innerContainer → contentGrid/contentStack → units`, incluindo propriedades, blocos obrigatórios, opcionais e comportamento responsive.
- Cancelada a especificação técnica extensa de layouts; o wireframe voltou ao formato simples com tipo, tagline, título, conteúdo, display e CTA, além de uma referência visual opcional.
- Adicionada a primeira ficha de sessão visual a partir de quatro prints, com estrutura, propriedades configuráveis e variações de hero/intro.
- Reorganizadas as skills locais em pastas próprias com `SKILL.md`; duplicados e versões antigas foram movidos para `skills/archive/`.
- Movidas as referências de tipos e layouts para `skills/sitemap/references/`; o Wireframe passa a consultar essas referências sem duplicá-las.
- Adicionados dez layouts-base ao Sitemap como ponto de partida para o brainstorm de sessões.

## 2026-08-30

- Analisadas visualmente as 31 imagens em `Downloads/Design sem nome/` e carregadas na Media Library do Kids & Family (IDs 567–597), com metadados em PT-PT.
- Criado `references/image-inventory-design-sem-nome-20260830.md` com leitura visual, agrupamentos, cautelas editoriais e a distribuição inicial.
- Tentativa inicial de inserir imagens nos blocos de abertura da Home, Sobre e 11 páginas de especialidade; a distribuição foi corrigida no registo de 2026-08-31 abaixo. Também foram definidas imagens destacadas para as páginas institucionais, especialidades e nove artigos prioritários em rascunho.
- Corrigida a distribuição em 2026-08-31: removidas as imagens dos heróis e restaurado o layout original. As imagens foram aplicadas apenas nos placeholders inferiores existentes da Home, Sobre e sete especialidades; quatro subserviços sem placeholder ficaram somente com imagem destacada.
- Corrigida a serialização dos placeholders em 2026-08-31: as imagens foram aninhadas dentro do contentor da coluna esquerda, restaurando o padrão imagem à esquerda e lista de passos à direita sem criar uma terceira coluna.
- Acrescentado em 2026-08-31 o bloco final de processo às quatro páginas recentes de especialidade que não o tinham, mantendo o padrão de duas colunas com imagem à esquerda e três passos numerados à direita.
- Validados em 2026-08-31 os caminhos de media desses quatro blocos; substituídos os três URLs incorretos pelos ficheiros reais e confirmado HTTP 200 para todas as imagens.
- Removidos em 2026-08-31 os segundos botões dos heróis das 11 especialidades. Mantido apenas o CTA principal de avaliação/consulta, sempre encaminhado para `/contacto/`; wireframes atualizados.
- Confirmado e atualizado no Site Editor o template `single-especialidades`: removida a parte global `botton` que acrescentava um CTA genérico após o conteúdo; o template mantém header, conteúdo e footer.
- Padronizados os CTAs finais das 11 páginas de especialidade com fundo azul, conteúdo centralizado e 3rem efetivos de espaço antes do botão dourado, sem alterar a copy específica ou os links para `/contacto/`.
- Corrigido o comportamento do espaçamento dos CTAs: os links diretos agora usam `inline-flex` com margem superior de 3rem, enquanto os wrappers flex das páginas recentes usam a mesma distância.
- Corrigido em 2026-08-31 o marcador Gutenberg incompleto no CTA final das 11 especialidades, que fazia o rodapé global ser interpretado como comentário no navegador. O template `single-especialidades` mantém agora explicitamente `cm-footer` na área `footer`, e o rodapé foi verificado visível em todas as páginas.
- Extraídos da imagem fornecida o URL, utilizador e senha do cPanel; guardados no `.env` privado do projeto e adicionada a regra global de exclusão de ficheiros `.env` ao `.gitignore`.
- Diagnóstico de infraestrutura: produção pública identificada como implantação estática na Vercel; apex → `www` é um redirecionamento HTTP 308 da Vercel, não do cPanel. O cPanel mantém apenas o domínio principal em `/public_html`, sem redirecionamentos configurados e sem instalação WordPress detetada pelo WP Toolkit.
- Diagnóstico PHP: o MultiPHP Manager confirma PHP 8.3 como padrão do sistema e para o domínio principal por herança; estão disponíveis as versões 8.1, 8.2, 8.3, 8.4 e 8.5.
- Verificação pós-DNS: zona pública confirma o domínio raiz no IP do cPanel e `www` como CNAME do raiz; o cache DNS local ainda aponta para a Vercel. O WordPress responde diretamente no Apache do cPanel e `www` redireciona para o domínio raiz.

## 2026-08-31

- Verificado no Chrome e em cPanel → SSL/TLS Certificates → Status: o certificado instalado é apenas de `autoconfig.clinicakidsefamily.pt`; o cPanel marca `clinicakidsefamily.pt` e `www.clinicakidsefamily.pt` como não cobertos, e o Chrome mostra `NET::ERR_CERT_COMMON_NAME_INVALID`.
- Emitido e instalado pelo TLS Wizard um certificado Let’s Encrypt para `clinicakidsefamily.pt` e `*.clinicakidsefamily.pt`; confirmação técnica indica cobertura no apex e no `www`, com validade até 2026-11-29. O `www` continua a redirecionar para o domínio principal via WordPress.
