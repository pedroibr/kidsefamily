# Website 2026

## Purpose

Orientar a produção do website da Clínica Kids e Family a partir de documentos Markdown que funcionam como fonte de verdade para arquitetura, briefing, copy, SEO e ligações internas.

## Inheritance

- Seguir as regras do root, do workspace e de `workspace/4 - projects/AGENTS.md`.
- O mapa SEO em `SEO/sitemap.md` define a arquitetura canônica, as intenções e as prioridades.
- Os documentos de contexto em `workspace/2 - context` definem negócio, audiências, jornadas, ofertas, pilares e lead magnets.

## Rules

### Source model

- Cada página canônica deve ter um arquivo Markdown próprio dentro de `pages/`.
- O nome do arquivo deve usar o slug canônico em minúsculas, com hífens e sem acentos.
- O Markdown é a fonte de conteúdo e arquitetura; a implementação visual e técnica no WordPress é uma etapa posterior.
- Não criar duas páginas para a mesma intenção primária. Se uma página servir a mais de uma navegação, manter uma URL canônica e declarar os cross-links.
- Não transformar um artigo sobre sintoma, dúvida ou comparação em subserviço sem uma oferta, audiência, mecanismo, prova ou CTA realmente distinto.

### Folder routing

- `pages/institutional/`: Início, Sobre, Equipa, Contacto e outras páginas institucionais.
- `pages/services/main/`: páginas-mãe de especialidades e hubs comerciais.
- `pages/services/subservices/`: subserviços e páginas comerciais por audiência, problema ou modalidade.
- `pages/landing-pages/`: lead magnets, campanhas pagas e landing pages de audiência.
- `pages/blog/`: artigos, guias, FAQs, comparações e checklists editoriais.
- `pages/depoimentos/`: materiais e registros de depoimentos, classificados por serviço, oferta, audiência e local de uso.
- `pages/case-studies/`: materiais e registros de estudos de caso, classificados por problema, mecanismo, resultado e oferta relacionada.
- `pages/shared/`: blocos reutilizáveis de copy, CTAs, prova, notas clínicas ou componentes de conteúdo.
- `references/`: referências técnicas ou visuais, como exports do WordPress/GenerateBlocks; não são páginas publicáveis.
- `pages/_template.md`: modelo obrigatório para uma nova página.

### Evidence and media

- Depoimentos e case studies são prova reutilizável, não páginas comerciais independentes por padrão.
- Cada registro deve apontar para as páginas e ofertas que pode apoiar, sem inventar resultados nem ampliar o relato original.
- Antes de publicar, verificar autorização de uso, consentimento, anonimização e limites de claims clínicos ou comerciais.
- Imagens, vídeos, logos e outros ficheiros de media devem ser referenciados a partir de `workspace/6 - media_assets`; não duplicar a biblioteca de media dentro do projeto do website.
- Quando um depoimento ou caso for usado numa página, declarar a ligação tanto no registro de prova quanto no documento da página, quando possível.

### Required frontmatter

Cada página deve declarar, no mínimo:

- `type`, `title` e `slug`;
- `pageType`, `contentType`, `sitemapLevel` e `wpContentType`;
- `productionStatus` e `priority`;
- `pageGoal` e `primaryIntent`;
- `primaryAudience`, `canonicalParent` e `primaryCTA`.

Os valores controlados devem seguir `SEO/sitemap.md`. `productionStatus` descreve a execução da página; `status` descreve a decisão estratégica no mapa.

### Page connections

- Toda página deve ter uma seção `## Page Connections`.
- A seção deve listar cada ligação relevante numa tabela com: destino, tipo de ligação, motivo e CTA ou âncora.
- Toda página deve declarar o próximo passo principal, mesmo quando também possui links secundários.
- Páginas institucionais devem encaminhar para Especialidades, Sobre ou Contacto conforme a intenção.
- Páginas de serviço devem ligar ao próximo passo de avaliação/marcação, a serviços relacionados e a lead magnets pertinentes.
- Subserviços devem apontar para o serviço-mãe canônico e não devem criar uma segunda URL para a mesma intenção.
- Artigos devem apontar para pelo menos uma página comercial ou lead magnet relacionado; páginas comerciais devem poder apontar de volta para os clusters que as apoiam.
- Landing pages de campanha devem indicar a página orgânica equivalente e a regra de canonical/noindex prevista.
- Ao criar ou alterar uma página, atualizar também o inventário e as conexões relevantes em `SEO/sitemap.md`.

### Production workflow

1. Confirmar a página no sitemap e definir a intenção primária.
2. Criar o arquivo a partir de `pages/_template.md` na pasta correta.
3. Preencher briefing, público, CTA, estrutura de conteúdo e `Page Connections`.
4. Redigir a página usando Context Builder, brand/strategy documents e validação clínica.
5. Rever intenção, canibalização, links, SEO, voz da marca e claims clínicos.
6. Atualizar `productionStatus` para `draft`, `review` ou `published` conforme o estado real.
7. Implementar no WordPress/GenerateBlocks somente depois de o Markdown estar aprovado.

### Status definitions

- `notStarted`: página planejada, sem conteúdo produzido.
- `inProgress`: conteúdo ou implementação em produção.
- `draft`: existe um primeiro rascunho em Markdown.
- `review`: aguarda revisão de estratégia, clínica, marca ou SEO.
- `published`: página ou shell publicado; pode continuar precisando de otimização.
- `blocked`: depende de uma decisão, prova, oferta ou recurso externo.

## Routing

- Para a ordem de criação, consultar `SEO/sitemap.md`, especialmente `Production Control`.
- Para o conteúdo factual e comercial, consultar `workspace/2 - context`.
- Para referências visuais do site anterior, consultar `Current Website/README.md`.
- Para padrões de markup, tags, classes e blocos GenerateBlocks, consultar `references/`.
- Para implementação no WordPress, usar a página Markdown aprovada como briefing técnico e de copy.
