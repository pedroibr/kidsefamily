---
type: Project Archive
title: SEO Sitemap V2 — Plano Inicial Simplificado — Arquivado
description: Plano anterior de arquitetura e inventário SEO, preservado como histórico.
status: archived
owner: Pedro Raimundo
tags: [website, seo, sitemap, information-architecture]
created: 2026-08-24
updated: 2026-08-24
---

# SEO Sitemap V2 — Plano Inicial Simplificado — Arquivado

> **Estado:** arquivado em 2026-08-24. O plano ativo agora define templates, macro-seções, páginas e sequências de seção; consulte [`../sitemap.md`](../sitemap.md).

## Status

Este é o plano SEO canónico para a primeira versão do website. Substitui o mapa anterior, preservado apenas como histórico em [`sitemap-v1.md`](sitemap-v1.md).

## Strategic Direction

O website apresenta a Kids e Family como uma clínica de **medicina dentária integrada para a família**. A Medicina Dentária permanece no centro; crescimento, respiração, sono, dor, função e outras áreas entram apenas quando são clinicamente relevantes para compreender o caso, coordenar o cuidado ou encaminhar de forma responsável.

“Integrada” descreve uma forma de avaliar e organizar o cuidado. Não é uma nova especialidade, não significa tratar tudo ao mesmo tempo e não autoriza promessas amplas sobre saúde geral.

## First-Version Principles

1. Começar com menos páginas, mais claras e com intenção distinta.
2. Criar uma página principal para cada área efetivamente oferecida pela clínica.
3. Criar subpágina apenas quando houver procura, audiência ou percurso comercial claramente diferente.
4. Usar artigos para sintomas, dúvidas, comparações e perguntas específicas; não criar páginas comerciais artificiais.
5. Manter uma única URL canónica quando um tema pertence a mais de um caminho de navegação.
6. Ligar cada artigo a uma página de serviço e cada serviço ao próximo passo de contacto ou avaliação.
7. Validar escopo, profissionais, provas, terminologia clínica e claims antes de publicar.

## Simplified Architecture

```text
/
├── /sobre/
├── /especialidades/ [HUB]
│   ├── /especialidades/odontopediatria/
│   │   └── /especialidades/respiracao-oral-infantil/
│   ├── /especialidades/dtm-dor-orofacial/
│   ├── /especialidades/ortodontia/
│   │   ├── /especialidades/ortodontia-infantil-desenvolvimento/
│   │   └── /especialidades/ortodontia-alinhadores-adultos/
│   ├── /especialidades/sono-respiracao-roncopatia/
│   ├── /especialidades/medicina-dentaria-geral-adultos/
│   ├── /especialidades/implantologia-reabilitacao-oral/
│   └── /especialidades/estetica-dentaria-restauracao/
├── /blog/
└── /contacto/
```

Os slugs são direções canónicas para planeamento. Antes de alterar URLs já publicadas, confirmar os slugs atuais e preparar redirecionamentos quando necessários.

## Navigation Groups

Os três caminhos abaixo organizam o hub, a Home e a navegação. **Não são páginas adicionais nesta versão.**

| Navigation group | Services included | Role |
| --- | --- | --- |
| Infância e desenvolvimento | Odontopediatria; Respiração oral infantil; Ortodontia infantil e desenvolvimento | Ajudar responsáveis a encontrar cuidado por fase, crescimento ou sinais infantis. |
| Dor, função e sono | ATM e dor orofacial; Sono, respiração e roncopatia | Reunir necessidades relacionadas com dor, movimento, função, respiração e sono sem presumir causalidade. |
| Saúde oral e reabilitação estética | Medicina dentária geral; Ortodontia adulta; Implantologia; Estética e restauração | Organizar prevenção, alinhamento, recuperação de função e estética responsável ao longo da vida adulta. |

## Institutional and Hub Pages

| Page | Type | Goal | Primary intent | Production status | Briefing |
| --- | --- | --- | --- | --- | --- |
| Início | institutional hub | consideration | compreender a proposta e encontrar o cuidado adequado | `implemented-v1` | Apresentar medicina dentária integrada, os três caminhos de navegação e a forma como o cuidado avança. |
| Sobre | institutional | consideration | conhecer clínica, abordagem e equipa | `inProgress` | Construir confiança, explicar origem, valores, equipa e âmbito do cuidado sem repetir a Home. |
| Especialidades | service hub | consideration | identificar a área adequada | `notStarted` | Listar os sete serviços principais nos três grupos e tornar visíveis apenas as subpáginas ativas. |
| Blog | editorial hub | awareness | encontrar orientação confiável | `notStarted` | Organizar artigos pelos mesmos três grupos e encaminhar para serviços relacionados. |
| Contacto | institutional | conversion | falar com a clínica ou marcar | `inProgress` | Direcionar para WhatsApp, explicar o próximo passo e mostrar a localização. |

## Main Service Pages

| Page | Primary intent | Goal | Priority | Production status | Briefing |
| --- | --- | --- | --- | --- | --- |
| Odontopediatria | iniciar ou acompanhar o cuidado oral da criança | consideration + conversion | `high` | `inProgress` | Página prioritária e mais completa: primeira consulta, prevenção, crescimento, hábitos e encaminhamento para respiração oral ou ortodontia infantil quando relevante. |
| ATM e dor orofacial | procurar avaliação para dor, ruídos ou limitação mandibular | consideration + conversion | `high` | `inProgress` | Página prioritária: sinais, âmbito da avaliação, limites, possíveis percursos e CTA para avaliação. |
| Ortodontia | compreender opções de alinhamento e acompanhamento ortodôntico | consideration + conversion | `medium` | `notStarted` | Página-mãe curta que explica avaliação, fases e modalidades e distribui para infância e adultos. |
| Sono, respiração e roncopatia | compreender o papel da Medicina Dentária perante sinais de respiração, sono ou ronco | consideration + conversion | `medium` | `notStarted` | Uma única página principal nesta versão, com limites claros e coordenação com outras áreas quando necessária. |
| Medicina dentária geral e cuidado adulto | encontrar prevenção, avaliação e cuidado dentário geral | consideration + conversion | `medium` | `notStarted` | Página compacta sobre avaliação, prioridades, tratamentos gerais, manutenção e continuidade familiar. |
| Implantologia e reabilitação oral | avaliar formas de recuperar dentes, estrutura e função | consideration + conversion | `medium` | `notStarted` | Página compacta com avaliação, alternativas, planeamento por etapas e manutenção; implantes permanecem dentro dela nesta versão. |
| Estética dentária e restauração | avaliar restauração ou melhoria estética com responsabilidade | consideration + conversion | `medium` | `notStarted` | Página compacta que prioriza saúde, função, naturalidade, alternativas e expectativas; facetas permanecem dentro dela nesta versão. |

## Active Subservice Pages

| Page | Canonical parent | Distinct intent | Priority | Production status | Briefing |
| --- | --- | --- | --- | --- | --- |
| Respiração oral infantil | Odontopediatria | compreender sinais na criança e saber que avaliação pode fazer sentido | `high` | `inProgress` | Página própria por audiência, sinais e percurso infantil distintos; pode receber links de Sono e Respiração, mas tem Odontopediatria como pai canónico. |
| Ortodontia infantil e desenvolvimento | Ortodontia | avaliar crescimento, mordida ou alinhamento na criança | `medium` | `notStarted` | Explicar acompanhamento por fase, quando observar, quando avaliar e quando tratar. |
| Ortodontia e alinhadores transparentes para adultos | Ortodontia | comparar e avaliar opções ortodônticas na vida adulta | `medium` | `notStarted` | Explicar aparelhos e alinhadores como possibilidades dependentes de avaliação, adesão e objetivos. |

## Topics Kept Inside Main Pages

Estes temas não terão URL comercial própria na primeira versão. Podem aparecer como secções da página-mãe e como artigos educativos.

| Topic | Current placement | Condition for a future page |
| --- | --- | --- |
| Ortodontia funcional | Ortodontia | Nome, oferta, procura e mecanismo validados como intenção distinta. |
| Implantes dentários | Implantologia e reabilitação oral | Procura orgânica, capacidade, provas e conteúdo suficientes para justificar separação. |
| Facetas dentárias | Estética dentária e restauração | Oferta, procura, provas e diferenciação suficientes para evitar uma página superficial. |

## Lead Magnet Layer

Lead magnets ficam fora da árvore de especialidades e conectam-se às páginas canónicas correspondentes.

| Lead magnet | Related service | Status | Role |
| --- | --- | --- | --- |
| Avaliação Respiração Oral Infantil | Respiração oral infantil / Odontopediatria | planned | Ajudar responsáveis a organizar sinais e decidir o próximo passo, sem diagnóstico automático. |
| Primeira Consulta de Odontopediatria | Odontopediatria | planned | Preparar responsáveis para a primeira consulta e reduzir incerteza antes da marcação. |
| Mapa de Sinais de Dor e Função Mandibular | ATM e dor orofacial | planned | Organizar sinais e orientar a procura de avaliação, sem autodiagnóstico. |

## Blog Support Model

No primeiro ciclo, o blog apoia as quatro áreas estratégicas com maior potencial de diferenciação.

| Cluster | Commercial destination | Initial topics |
| --- | --- | --- |
| Primeira consulta, prevenção e desenvolvimento infantil | Odontopediatria | quando começar; preparação; hábitos; higiene; sinais que justificam avaliação. |
| Respiração oral infantil | Respiração oral infantil | sinais observáveis; desenvolvimento; limites do autodiagnóstico; quando procurar avaliação. |
| ATM, dor e função mandibular | ATM e dor orofacial | estalidos; travamento; dor; limitação; diferenças entre ATM, DTM e bruxismo. |
| Ortodontia por fase da vida | Ortodontia e subpáginas | quando avaliar a criança; aparelhos e alinhadores; higiene; retenção; expectativas. |
| Sono, respiração e roncopatia | Sono, respiração e roncopatia | sinais; papel dentário; limites; coordenação e encaminhamento. |

As três páginas adultas compactas podem receber artigos mais tarde, conforme procura real e prioridade comercial.

## Integrated-Care Signature for Service Pages

Todas as páginas de serviço devem tornar a proposta integrada concreta, sem repetir o mesmo bloco textual:

1. começar pela necessidade dentária que trouxe a pessoa;
2. observar contexto, fase de vida e sinais relacionados apenas quando relevantes;
3. explicar o que pertence ao âmbito da clínica e o que precisa de confirmação;
4. conectar profissionais, serviços ou encaminhamentos quando isso melhora o percurso;
5. definir tratamento, acompanhamento ou próximo passo de forma clara.

Cada página deve aplicar esta lógica ao seu próprio tema. A integração aparece na experiência e na coordenação, não apenas no uso repetido do termo.

## Production Order

1. Atualizar a Home e o hub Especialidades para a nova terminologia e esta árvore.
2. Finalizar Odontopediatria, ATM e dor orofacial e Respiração oral infantil.
3. Criar Ortodontia e as duas subpáginas por fase de vida.
4. Criar Sono, respiração e roncopatia como página única.
5. Criar as três páginas adultas compactas: Medicina dentária geral, Implantologia e Estética/restauração.
6. Produzir os três lead magnets e os primeiros artigos de apoio.
7. Rever procura, desempenho e dúvidas reais antes de abrir novas subpáginas.

## Validation Before Publication

- confirmar nomes, slugs, oferta e profissionais de cada área;
- confirmar se os serviços já publicados exigem redirecionamentos;
- validar linguagem clínica, claims, provas e limites;
- realizar pesquisa de palavras-chave local para ajustar títulos e prioridades, sem aumentar a arquitetura por volume;
- verificar links entre hub, serviços, artigos, lead magnets e Contacto.
