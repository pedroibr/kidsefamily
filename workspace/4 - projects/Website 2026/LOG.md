---
type: Log
title: Website 2026 Log
description: Registro cronológico das mudanças estruturais do projeto Website 2026.
status: active
owner: Pedro Raimundo
tags: [project, website, log]
created: 2026-08-18
updated: 2026-08-18
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
