---
type: Log
title: Website Update — Log
description: Registo curto das mudanças relevantes no projeto.
status: active
owner: Clínica Kids e Family
tags: [project, website, log]
created: 2026-09-29
updated: 2026-09-30
---

# Website Update — Log

## 2026-09-29

- Regravadas as classes globais GenerateBlocks `.gbp-button--primary` e `.gbp-button--secondary` com largura móvel de 100%; o ficheiro CSS público passou a incluir as regras e os dois botões da Home foram conferidos com 350 px num contentor de 350 px a 390 px de viewport.
- Criado o projeto separado de Website 2026, com AGENTS.md e os ficheiros mínimos de contexto.
- Confirmada a conexão WordPress Kids & Family e registado o levantamento inicial de páginas, especialidades e artigos.
- Consultado o conteúdo completo da Home e criada uma proposta de nova narrativa e copy para revisão.
- Definido o plano de sete secções para nove especialidades, com revisão sequencial de cada página; a entrada de Respiração oral infantil sairá apenas do catálogo.
- Publicada e revista a página DTM e dor orofacial (ID 120), incluindo alinhamento no desktop/telemóvel, validação GenerateBlocks sem erros e abertura do acordeão FAQ.
- Publicada e revista a página Odontopediatria (ID 118): sete secções, CTAs de contacto, benefícios responsivos e FAQ funcional, com validação GenerateBlocks sem erros.
- Consolidada e revista Ortodontia infantil e desenvolvimento (ID 121) em sete secções; corrigidos os IDs duplicados da FAQ e testadas duas respostas no telemóvel.
- Consolidada e revista Ortodontia funcional (ID 122) em sete secções; corrigidos IDs duplicados e pontuação da FAQ, com testes de interação e layout desktop/móvel.
- Atualizada e revista Sono, respiração e roncopatia (ID 123): âmbito dentário explícito, sete secções, três CTAs e FAQ funcional; conferido no desktop/telemóvel.
- Atualizada e revista Medicina dentária geral e cuidado adulto (ID 124): prevenção, queixas e continuidade diferenciadas, sete secções e FAQ funcional; conferido no desktop/telemóvel.
- Atualizada e revista Implantologia e reabilitação oral (ID 125): alternativas e etapas explícitas, faixa azul refinada e layout/FAQ conferidos.
- Atualizada e revista Estética dentária e restauração (ID 126): saúde, função e aparência organizadas em sete secções; removida menção não confirmada a branqueamento na FAQ.
- Consolidada e revista Ortodontia e alinhadores para adultos (ID 127) em sete secções; FAQs receberam IDs únicos e interação conferida no desktop/telemóvel.
- Atualizado o catálogo (ID 164) para nove especialidades, removendo apenas ID 119 da consulta da aba Infância; abas e cartões conferidos no desktop/telemóvel e URL do ID 119 confirmada ativa.
- Ajustado o cabeçalho global `twentytwentyfive//cm-header` (ID 43): menu móvel azul com contorno dourado e itens centrados; hambúrguer e X dourados, transparentes e sem moldura. CSS GenerateBlocks regenerado; Home conferida no desktop e telemóvel, incluindo abrir/fechar o menu.

## 2026-09-30

- Corrigida a grelha inicial da página Contacto (ID 79): no mobile, `grid-template-columns` passou a `minmax(0, 1fr)`, preservando o desktop. Página pública conferida a 390 px e 320 px, sem overflow horizontal.
- Alinhada a secção de benefícios da DTM (ID 120) ao padrão das outras especialidades: adicionadas as legendas “Na história”, “Na avaliação” e “No próximo passo” acima dos três benefícios. Títulos, descrições, imagem, grelha, FAQ e CTAs preservados; preview GenerateBlocks, readback byte idêntico e visualização pública confirmados.
- Corrigido o hero de Ortodontia infantil (121) e Ortodontia funcional (122): o `alt` dinâmico vazio fazia o GenerateBlocks omitir a imagem, substituído por `alt` literal vazio conforme a referência 118. Uniformizados os três CTAs de conteúdo em cada uma das nove especialidades (118, 120–127) para “Agendar avaliação”, com destino preservado em Contacto; corrigido também o item “Agendar Avaliação” do menu principal (ID 199), antes apontado para `#`. Todas as páginas tiveram preview/apply e readback byte idêntico; as nove imagens e 27 CTAs foram confirmados no HTML publicado, e 121/122 tiveram inspeção visual.
- Centrados no mobile os links de Navegação e Especialidades no rodapé global: neutralizado o `left:-18px` das duas listas e usado `justify-content:center` nos links abaixo de 768 px; conferidos 390 e 515 px sem overflow.
- Padronizadas as outras oito páginas de especialidades (IDs 120–127) pela referência Odontopediatria: CTA/hero com imagem destacada própria, fundo branco e centragem das secções explicativa e de cartões, imagem de benefícios responsiva sem wrapper redundante e títulos sem margem superior; conteúdo, CTAs, FAQs e media próprios preservados. Todas passaram validação GenerateBlocks, preview/apply CAS e readback byte idêntico; inspeções visuais desktop/móvel em DTM (120) e alinhadores (127), sem overflow móvel visível.
- Ajustado o rodapé global `twentytwentyfive//cm-footer` (ID 44): margens laterais com `box-sizing:border-box` no tablet e mobile, alinhamento central no mobile e menu legal sem toggle/hambúrguer. Links preservados; conferidos 390 px, 812 px e 1280 px, sem overflow horizontal.
- Alinhado para `#ffffff` o fundo da secção FAQ das páginas IDs 118, 120, 121, 122, 124, 125, 126 e 127 com a referência 123 (inalterada); preview/apply guarded, readback byte a byte e regra CSS nas oito URLs públicas confirmados.
