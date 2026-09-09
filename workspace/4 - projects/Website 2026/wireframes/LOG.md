---
type: Log
title: Website 2026 Wireframes Log
description: Registo das alterações à camada de wireframes.
status: active
owner: Pedro Raimundo
tags: [website, wireframes, log]
created: 2026-08-24
updated: 2026-09-01
---

# Wireframes Log

## 2026-09-01

- Criadas a Biblioteca de Wireframes e a família inicial `hero-split`; a documentação separa estrutura e conteúdo do futuro mapeamento para GenerateBlocks.
- Adicionada a família `hero-media-bottom`, com `tagline` no grupo de introdução, media `image`/`video` e ação `buttons`/`form` observadas nos prints.
- Criado o arquivo visual por família, com prints ligados aos respetivos presets; adicionada a família `hero-centered-media-bottom`.
- Adicionada a família `hero-background-overlay`, com os presets observados de imagem/botões em modo normal e vídeo/formulário em modo card.
- Consolidada a antiga família `hero-media-bottom` na família `hero-media-stack`; os novos prints validaram `layout.media_position: top`, evitando uma família duplicada.
- Refinada `hero-media-stack`: os prints confirmaram que `media_width` (`full` ou `contained`) é uma escolha independente de `media_position`; as combinações cruzadas permanecem por validar.
- Adicionadas duas variações observadas a `hero-split`: imagem à direita com botões e vídeo à esquerda com formulário em card.
- Refinada `hero-split`: os prints confirmaram `media_width` (`full` ou `contained`) como opção independente de `media_side` e `style`.
- Adicionada a família `content-split-list`, com media, introdução, lista e ações; os prints confirmaram que `media.asset_style` (`default` ou `expand`) só se aplica a `layout.style: normal` e fica `not_applicable` em `card`.
- Adicionada a família `benefits-split-grid`, com introdução, quatro benefícios em grelha e media lateral; os prints confirmaram imagem contida à direita e vídeo expandido à esquerda no modo normal.
- Definida a distinção entre opções `observed` e `approved`: um print regista um preset, enquanto uma variação estrutural aprovada pelo utilizador integra o schema mesmo antes de ter referência visual própria.
- Regra transversal aprovada: toda família com ações de botões também disponibiliza `action.type: form`; o contrato de ações mantém os parâmetros completos de ambos os modos e usa `not_applicable` no ramo não escolhido.
- Reorganizada a biblioteca reutilizável em `../references/Sections Library/`: cada família agora reúne documento MD e screenshots na própria pasta; `wireframes/` mantém apenas páginas concretas.

## 2026-08-24

- Renomeada a camada `pages/` para `wireframes/`, mantendo as categorias institucionais, hubs, serviços e landing pages.
- Criados os wireframes das cinco main pages de especialidades ainda ausentes: Ortodontia; Sono, respiração e roncopatia; Medicina dentária geral e cuidado adulto; Implantologia e reabilitação oral; Estética dentária e restauração.
- Publicado o conteúdo inicial da main page de Ortodontia no WordPress (`especialidades` id 446), usando o modelo da Odontopediatria e adaptando copy, gatilho de contexto, áreas de cuidado, FAQ e CTA.
- Atualizada a main page existente de Sono, respiração e roncopatia (`especialidades` id 123), usando o mesmo modelo e adaptando sinais, limites clínicos, encaminhamento, FAQ e CTA; o duplicado técnico criado durante a atualização foi enviado para o lixo.
- Atualizada a main page existente de Medicina dentária geral e cuidado adulto (`especialidades` id 124; `/especialidades/medicina-dentaria-adulto/`), usando o mesmo modelo e adaptando prevenção, manutenção, coordenação, FAQ e CTA.
- Atualizada a main page existente de Implantologia e reabilitação oral (`especialidades` id 125; `/especialidades/implantologia-reabilitacao/`), usando o mesmo modelo e adaptando planeamento, alternativas, manutenção, FAQ e CTA.
- Atualizada a main page existente de Estética dentária e restauração (`especialidades` id 126; `/especialidades/estetica-dentaria-restauracao/`), usando o mesmo modelo e adaptando restauração, estética, função, gatilho de contexto, FAQ e CTA.
- Publicados os conteúdos introdutórios dos hubs `Blog` (page 12; `/blog/`) e `Especialidades` (page 164; `/especialidades/`) usando o template normal de páginas; os blocos de listagem/Query Loop ficam reservados para configuração no editor.
- Atualizado o template normal de páginas (`twentytwentyfive//page`) para manter header, topo dinâmico, conteúdo e footer, removendo o CTA global `botton`.

## 2026-08-25

- Confirmada a decisão de manter `Blog` como página estática normal (page 12), sem atribuí-la como página de posts (`page_for_posts = 0`); o template especial `twentytwentyfive//home` permanece no original do tema.
- A secção de serviços da Home foi adaptada do padrão Fernanda Polli para três tabs GenerateBlocks Pro; cada tab consulta e liga as especialidades correspondentes da Clínica Kids & Family.
- A secção de tabs foi retirada da Home e aplicada ao hub `Especialidades` (page 164); a Home voltou à secção editorial estática “Três caminhos de cuidado”, enquanto o hub concentra a navegação dinâmica dos serviços.
- Restaurada a revisão nativa WordPress `426` da Home (page 13) para recuperar a ordem original e a faixa azul: Hero → Três caminhos → frase de crença → comparação → metodologia.
- O template de artigo individual (`twentytwentyfive//single`) foi ajustado a partir da referência do single da Fernanda Polli: conteúdo centralizado com largura máxima de 640px, espaçamento vertical de 2rem, imagem destacada em 3:2 e `post-content` alinhado ao eixo do artigo; o header e o footer próprios da Kids & Family foram preservados.
- Atualizado o template normal de páginas (`twentytwentyfive//page`) para incluir o mesmo bottom CTA global da Home (`botton`) antes do footer; Sobre, Especialidades, Contacto e outras páginas normais passam a terminar com “Venha cuidar de si e da sua família” sem duplicar esse bloco no conteúdo de cada página.
