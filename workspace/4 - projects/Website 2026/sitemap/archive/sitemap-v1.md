---
type: Project Archive
title: SEO Sitemap V1 — Arquivado
description: Primeira arquitetura SEO do website, preservada apenas como registo histórico e não utilizada como plano ativo.
status: archived
owner: Pedro Raimundo
tags: [website, seo, sitemap, information-architecture]
created: 2026-08-18
updated: 2026-08-24
---

# SEO Sitemap V1 — Arquivado

> **Estado:** arquivado em 2026-08-24. Este documento não orienta produção, navegação, URLs ou prioridades. O plano canónico está em [`../sitemap.md`](../sitemap.md).

## Purpose

Organizar cada URL do website em torno de uma intenção primária, conectando descoberta, consideração e conversão sem duplicar páginas comerciais nem fazer o blog competir com os serviços.

Este mapa parte das dez ofertas registradas no Context Builder e da estrutura atual do WordPress: página `/especialidades/`, CPT `especialidades`, taxonomia `area_cuidado` e tipo `post` para artigos.

## Content Model

| Dimension | Controlled values | Meaning |
| --- | --- | --- |
| `sitemapLevel` | `hub`, `mainService`, `subservice`, `blogPost`, `campaignLanding` | Papel da URL dentro da arquitetura do site. |
| `wpContentType` | `page`, `especialidades`, `post` | Tipo técnico usado no WordPress. |
| `contentType` | `directory`, `serviceHub`, `servicePage`, `audienceServicePage`, `guide`, `comparison`, `faq`, `signsChecklist`, `leadMagnetLanding`, `campaignLanding`, `proofHub`, `testimonial`, `caseStudy` | Formato e função editorial da página. |
| `pageGoal` | `awareness`, `consideration`, `conversion` | Etapa principal que a página deve fazer avançar. Uma página pode apoiar uma segunda etapa, mas deve ter uma prioridade. |
| `status` | `existing`, `new`, `candidateForValidation` | Estado atual no plano. |
| `productionStatus` | `notStarted`, `inProgress`, `draft`, `review`, `published`, `blocked` | Estado da produção no website. `published` indica que existe uma página publicada ou um shell do CPT; não significa que o conteúdo final esteja aprovado. |
| `priority` | `high`, `medium`, `low` | Ordem de produção definida pela estratégia comercial e pela prontidão da oferta. |

## Architecture Rules

1. Cada URL deve responder a uma intenção primária e ter um próximo passo claro.
2. Uma página de serviço principal apresenta a área, organiza possibilidades e encaminha para avaliação ou para um subserviço adequado.
3. Um subserviço só ganha URL própria quando existe uma diferença real de oferta, audiência, problema, mecanismo, prova ou CTA.
4. Sintomas, dúvidas, mitos e perguntas isoladas começam como artigos; não devem virar páginas comerciais apenas para aumentar o número de URLs.
5. Um artigo responde e educa; uma página de serviço explica a solução oferecida e converte.
6. Uma página pode receber links de várias áreas, mas deve ter um único serviço pai canônico no sitemap.
7. A hierarquia inicial será editorial e de links internos. Os slugs das especialidades podem continuar planos em `/especialidades/{slug}/`.
8. Landing pages de anúncios podem adaptar mensagem, prova e CTA para uma campanha. Se repetirem substancialmente uma página orgânica, devem usar `noindex` ou canonical na implementação.
9. Termos clínicos, escopo, profissionais, provas e promessas exigem validação antes da publicação.

## Top-Level Site

| Page | Sitemap level | WordPress type | Content type | Page goal | Primary intent | Briefing |
| --- | --- | --- | --- | --- | --- | --- |
| Início | `hub` | `page` | `directory` | `consideration` | compreender a proposta da clínica | Apresentar medicina dentária sistémica, explicar a abordagem, mostrar três caminhos simplificados de cuidado e conduzir à escolha do serviço ou à marcação. |
| Sobre | `hub` | `page` | `guide` | `consideration` | avaliar confiança, abordagem e equipa | Explicar a clínica, a abordagem sistémica, coordenação, limites, equipa e razões para confiar. |
| Especialidades | `hub` | `page` | `directory` | `consideration` | encontrar o serviço adequado | Organizar os sete serviços principais, explicar como escolher e listar subserviços por audiência ou situação. Página WordPress existente, ID 164. |
| Equipa | `hub` | `page` | `directory` | `consideration` | conhecer profissionais e competências | Apresentar autoridade por área, mantendo a Clínica Kids e Family como marca-mãe. |
| Blog | `hub` | `page` | `directory` | `awareness` | encontrar orientação sobre dúvidas de saúde oral | Distribuir artigos pelos clusters e tornar visível o caminho editorial até o serviço relacionado. |
| Contacto | `hub` | `page` | `campaignLanding` | `conversion` | contactar ou marcar avaliação | Reduzir fricção, encaminhar directamente para o WhatsApp, explicar o que acontece depois do contacto e disponibilizar a localização. |

## Commercial Tree

```text
/especialidades/ [HUB]
├── Odontopediatria [MAIN SERVICE]
│   ├── Respiração oral infantil [SUBSERVICE]
│   │   └── Avaliação Respiração Oral Infantil [LEAD MAGNET LANDING]
│   └── Primeira consulta de odontopediatria [LEAD MAGNET LANDING]
├── ATM e dor orofacial [MAIN SERVICE]
│   └── Mapa de Sinais de Dor e Função Mandibular [LEAD MAGNET LANDING]
├── Ortodontia [MAIN SERVICE HUB — new]
│   ├── Ortodontia infantil e desenvolvimento [SUBSERVICE]
│   ├── Ortodontia funcional [SUBSERVICE — validation]
│   └── Ortodontia e alinhadores transparentes para adultos [SUBSERVICE]
├── Sono, respiração e função orofacial [MAIN SERVICE HUB — new]
│   ├── Respiração oral infantil [CROSS-LINK; canonical parent: Odontopediatria]
│   └── Sono, respiração e roncopatia [SUBSERVICE]
├── Medicina dentária geral e cuidado adulto [MAIN SERVICE]
├── Implantologia e reabilitação oral [MAIN SERVICE]
│   └── Implantes dentários [CANDIDATE]
└── Estética dentária e restauração [MAIN SERVICE]
    └── Facetas dentárias [CANDIDATE]
```

A árvore representa propriedade editorial, não URLs obrigatoriamente aninhadas. `Respiração oral infantil` terá uma única página canônica e poderá receber links de Odontopediatria e de Sono/Respiração.

## Production Control

Esta tabela controla a execução das páginas. A prioridade alta concentra o primeiro ciclo em Odontopediatria e ATM/dor orofacial. Os estados `published` abaixo referem-se aos shells ou páginas de especialidade já existentes no WordPress; ainda podem precisar de copy, prova, SEO on-page e CTA finais.

| Page | Area | Priority | Production status | Next action |
| --- | --- | --- | --- | --- |
| Odontopediatria | Odontopediatria | `high` | `published` | Revisar copy, prova, CTA e ligação com respiração oral. |
| Respiração oral infantil | Odontopediatria | `high` | `published` | Transformar o shell em página comercial completa e conectar ao autoassessment. |
| Avaliação Respiração Oral Infantil | Lead magnet | `high` | `notStarted` | Criar landing page, fluxo do autoassessment e encaminhamento para marcação. |
| Primeira consulta de odontopediatria | Odontopediatria | `high` | `notStarted` | Criar página curta de preparação, benefícios, expectativas e CTA de marcação. |
| Conteúdo: primeira consulta, prevenção e sinais infantis | Odontopediatria | `high` | `notStarted` | Criar briefs e calendário do primeiro cluster editorial. |
| DTM e dor orofacial relacionada à ATM | ATM | `high` | `published` | Revisar copy, prova, limites clínicos e CTA de avaliação. |
| Mapa de Sinais de Dor e Função Mandibular | Lead magnet | `high` | `notStarted` | Construir landing, assessment, orientação e encaminhamento. |
| Conteúdo: sinais, dúvidas e DTM/ATM | ATM | `high` | `notStarted` | Criar briefs e calendário de apoio à página e ao lead magnet. |
| Ortodontia | Ortodontia | `medium` | `notStarted` | Definir página-mãe e relação entre infância, função e adultos. |
| Ortodontia infantil e desenvolvimento | Ortodontia | `medium` | `published` | Revisar e posicionar como subserviço da nova página-mãe. |
| Ortodontia funcional | Ortodontia | `medium` | `notStarted` | Validar nome, escopo e oferta antes da produção. |
| Ortodontia e alinhadores transparentes para adultos | Ortodontia | `medium` | `published` | Revisar copy e integração com a página-mãe. |
| Sono, respiração e função orofacial | Sono e respiração | `medium` | `notStarted` | Definir página-mãe, escopo e limites de encaminhamento. |
| Sono, respiração e roncopatia | Sono e respiração | `medium` | `published` | Revisar conteúdo e relação com a página-mãe. |
| Medicina dentária geral e cuidado adulto | Cuidado adulto | `medium` | `published` | Revisar proposta de continuidade, prevenção e CTA. |
| Implantologia e reabilitação oral | Reabilitação | `medium` | `published` | Revisar página principal antes de criar subpáginas. |
| Implantes dentários | Reabilitação | `low` | `notStarted` | Validar capacidade, provas, alternativas e prioridade comercial. |
| Estética dentária e restauração | Estética | `medium` | `published` | Revisar conteúdo, limites e ligação com restauração. |
| Facetas dentárias | Estética | `low` | `notStarted` | Validar oferta, indicação, provas e prioridade comercial. |

### Priority logic

- `high`: primeiro ciclo de produção; corresponde às entradas estratégicas de Odontopediatria e ATM/dor orofacial.
- `medium`: páginas importantes para completar a arquitetura comercial depois do primeiro ciclo.
- `low`: páginas candidatas ou de menor prioridade imediata, dependentes de validação de oferta, capacidade ou procura.

## 1. Odontopediatria

| Page or cluster | Level | WP type | Content type | Goal | Primary intent | Briefing | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Odontopediatria | `mainService` | `especialidades` | `serviceHub` | `consideration`, `conversion` | encontrar odontopediatria e avaliar a clínica | Explicar o cuidado de bebés, crianças e adolescentes, a experiência acolhedora, prevenção, tratamento, acompanhamento por fase e marcação. Deve distribuir para respiração oral, ortodontia infantil e conteúdos de primeira consulta. | `existing` |
| Respiração oral infantil | `subservice` | `especialidades` | `audienceServicePage` | `consideration`, `conversion` | procurar avaliação para sinais de respiração oral na criança | Organizar sinais observáveis, papel da medicina dentária, limites diagnósticos, avaliação, coordenação e próximo passo. | `existing` |
| Avaliação Respiração Oral Infantil | `campaignLanding` | `page` | `leadMagnetLanding` | `conversion` | fazer uma autoavaliação orientativa sobre sinais de respiração oral infantil | Apresentar o autoassessment, recolher respostas e oferecer orientação inicial sobre possíveis sinais e próximos passos, sem substituir diagnóstico. Deve encaminhar para a página canônica de Respiração oral infantil e para marcação quando indicado. | `existing` |
| Primeira consulta de odontopediatria | `campaignLanding` | `page` | `leadMagnetLanding` | `conversion` | preparar-se para a primeira consulta de odontopediatria da criança | Página curta para responsáveis que procuram a primeira avaliação: explicar preparação, o que acontece, benefícios, expectativas realistas e próximo passo. Funciona como recurso de readiness e conduz à marcação, sem substituir consulta ou diagnóstico. | `new` |
| Primeira consulta e prevenção infantil | `blogPost` | `post` | `guide`, `faq` | `awareness`, `consideration` | esclarecer quando e como começar | Cluster sobre idade da primeira consulta, preparação, medo, rotina, higiene, dentes de leite e frequência de acompanhamento. Cada artigo conduz para Odontopediatria. | `new` |
| Crescimento, hábitos e sinais infantis | `blogPost` | `post` | `guide`, `signsChecklist` | `awareness`, `consideration` | entender sinais no desenvolvimento oral | Cluster sobre hábitos orais, mastigação, deglutição, desenvolvimento dentário e sinais que justificam avaliação, sem autodiagnóstico. | `new` |

## 2. ATM e dor orofacial

| Page or cluster | Level | WP type | Content type | Goal | Primary intent | Briefing | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DTM e dor orofacial relacionada à ATM | `mainService` | `especialidades` | `servicePage` | `consideration`, `conversion` | encontrar avaliação para dor, ruídos ou limitação mandibular | Explicar quais queixas são avaliadas, como decorre a consulta, por que causas simples não devem ser presumidas, quais são os limites e como avançar. É uma das duas entradas comerciais prioritárias. | `existing` |
| Mapa de Sinais de Dor e Função Mandibular | `campaignLanding` | `page` | `leadMagnetLanding` | `conversion` | realizar triagem orientativa sobre sinais de ATM | Capturar o contacto no início, conduzir assessment condicional, apresentar orientação revista e encaminhar para marcação sem oferecer diagnóstico. O conceito está aprovado, mas a landing e o fluxo ainda precisam ser construídos. | `new` |
| Sinais e dúvidas sobre ATM/DTM | `blogPost` | `post` | `guide`, `faq`, `signsChecklist` | `awareness`, `consideration` | compreender estalidos, dor, travamento e limitação | Cluster sobre sinais, função mandibular, quando procurar avaliação e limites da autointerpretação. Conduz para a página de DTM ou para o lead magnet. | `new` |
| DTM, bruxismo e outras explicações | `blogPost` | `post` | `comparison`, `guide` | `awareness`, `consideration` | diferenciar conceitos frequentemente confundidos | Conteúdo responsável sobre diferenças e possíveis relações, sem afirmar causalidade ou substituir avaliação. | `new` |

## 3. Ortodontia

| Page or cluster | Level | WP type | Content type | Goal | Primary intent | Briefing | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ortodontia | `mainService` | `especialidades` | `serviceHub` | `consideration`, `conversion` | compreender opções de tratamento ortodôntico | Nova página-mãe para explicar avaliação, crescimento, alinhamento, função, modalidades, etapas e diferenças entre infância e vida adulta. Distribui para os três subserviços. | `new` |
| Ortodontia infantil e desenvolvimento | `subservice` | `especialidades` | `audienceServicePage` | `consideration`, `conversion` | avaliar crescimento, mordida ou alinhamento da criança | Explicar avaliação por fase, monitorização, quando acompanhar e quando tratar, participação da família e modalidades possíveis. | `existing` |
| Ortodontia funcional | `subservice` | `especialidades` | `servicePage` | `consideration`, `conversion` | procurar uma avaliação ortodôntica orientada à função | Explicar oclusão, alinhamento e função, limites da abordagem e critérios para tratamento. Manter como rascunho estratégico até validar nome e oferta. | `candidateForValidation` |
| Ortodontia e alinhadores transparentes para adultos | `subservice` | `especialidades` | `audienceServicePage` | `consideration`, `conversion` | encontrar tratamento ortodôntico na vida adulta | Explicar aparelhos e alinhadores como alternativas dependentes de avaliação, etapas, adesão, duração individual e retenção. | `existing` |
| Ortodontia na infância | `blogPost` | `post` | `guide`, `faq`, `signsChecklist` | `awareness`, `consideration` | saber quando avaliar a mordida da criança | Cluster sobre crescimento, sinais, idade de avaliação, acompanhamento e momento de intervenção. | `new` |
| Ortodontia para adultos | `blogPost` | `post` | `guide`, `comparison`, `faq` | `awareness`, `consideration` | comparar opções e preparar uma decisão | Cluster sobre aparelho versus alinhadores, duração, higiene, rotina, retenção e limites. Conduz ao subserviço adulto. | `new` |

## 4. Sono, respiração e função orofacial

| Page or cluster | Level | WP type | Content type | Goal | Primary intent | Briefing | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sono, respiração e função orofacial | `mainService` | `especialidades` | `serviceHub` | `consideration` | compreender o papel da medicina dentária em sinais de sono, respiração e função | Nova página-mãe para explicar o âmbito dentário, coordenação interdisciplinar e diferenças entre criança e adulto. Distribui sem prometer diagnóstico médico. | `new` |
| Respiração oral infantil | `subservice` | `especialidades` | `audienceServicePage` | `consideration`, `conversion` | procurar avaliação para a criança | Reutilizar a página canônica vinculada a Odontopediatria; não criar uma segunda URL. | `existing` |
| Sono, respiração e roncopatia | `subservice` | `especialidades` | `servicePage` | `consideration`, `conversion` | compreender sinais de sono ou roncopatia e procurar avaliação | Explicar o possível papel dentário e orofacial, limites, necessidade de outros profissionais e percurso de avaliação. | `existing` |
| Respiração oral e desenvolvimento | `blogPost` | `post` | `guide`, `signsChecklist`, `faq` | `awareness`, `consideration` | entender sinais de respiração oral | Cluster infantil ligado à página Respiração oral infantil e à Odontopediatria. | `new` |
| Sono, ronco e papel da medicina dentária | `blogPost` | `post` | `guide`, `faq` | `awareness`, `consideration` | entender quando a medicina dentária participa do cuidado | Cluster adulto que diferencia orientação, avaliação dentária, diagnóstico médico e encaminhamento. | `new` |

## 5. Medicina dentária geral e cuidado adulto

| Page or cluster | Level | WP type | Content type | Goal | Primary intent | Briefing | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Medicina dentária geral e cuidado adulto | `mainService` | `especialidades` | `serviceHub` | `consideration`, `conversion` | encontrar acompanhamento dentário geral para adultos | Explicar avaliação, prevenção, prioridades, tratamentos gerais, manutenção e encaminhamento interno. Deve funcionar como porta de continuidade familiar. | `existing` |
| Primeira avaliação e manutenção adulta | `blogPost` | `post` | `guide`, `faq` | `awareness`, `consideration` | saber como retomar ou manter o cuidado | Cluster sobre consulta de avaliação, prevenção, frequência, higiene profissional, plano e retorno sem culpa. | `new` |
| Problemas dentários comuns | `blogPost` | `post` | `guide`, `faq` | `awareness`, `consideration` | compreender uma dúvida comum antes de marcar | Cluster sobre cárie, sensibilidade, restaurações e sinais para avaliação. Cada artigo deve encaminhar para a página geral ou para uma especialidade mais adequada. | `new` |

## 6. Implantologia e reabilitação oral

| Page or cluster | Level | WP type | Content type | Goal | Primary intent | Briefing | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Implantologia e reabilitação oral | `mainService` | `especialidades` | `serviceHub` | `consideration`, `conversion` | recuperar dentes, função e estrutura | Explicar avaliação, alternativas, exames, planeamento por etapas, cirurgia/prótese quando indicadas, recuperação e manutenção. | `existing` |
| Implantes dentários | `subservice` | `especialidades` | `servicePage` | `consideration`, `conversion` | avaliar possibilidade de implante dentário | Candidata a página própria por intenção de busca e valor comercial. Criar somente após confirmar escopo, equipa, provas, alternativas e capacidade. | `candidateForValidation` |

## 7. Estética dentária e restauração

| Page or cluster | Level | WP type | Content type | Goal | Primary intent | Briefing | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Estética dentária e restauração | `mainService` | `especialidades` | `serviceHub` | `consideration`, `conversion` | restaurar dentes ou melhorar aparência com responsabilidade | Explicar saúde e função antes da estética, possibilidades restauradoras, planeamento, naturalidade, limites e manutenção. | `existing` |
| Facetas dentárias | `subservice` | `especialidades` | `servicePage` | `consideration`, `conversion` | avaliar indicação e alternativas a facetas | Candidata por intenção específica. Explicar avaliação, indicação, alternativas, preservação, expectativas, manutenção e ausência de resultado universal. | `candidateForValidation` |
| Restaurações, facetas e decisões estéticas | `blogPost` | `post` | `guide`, `comparison`, `faq` | `awareness`, `consideration` | comparar soluções e compreender critérios | Cluster sobre diferenças, indicação, durabilidade variável, manutenção e escolhas proporcionais. | `new` |

## Landing Page Layer

| Landing type | Use | Goal | Indexing direction |
| --- | --- | --- | --- |
| Lead magnet | Assessment, mapa de sinais, checklist ou ferramenta com valor próprio | `conversion` | Indexar quando tiver procura e conteúdo original; caso contrário, avaliar `noindex`. |
| Paid campaign | Adaptar promessa, prova, objeções e CTA para um público ou criativo específico | `conversion` | Usar `noindex` ou canonical quando duplicar substancialmente a página orgânica. |
| Audience landing | Adaptar um serviço para uma audiência com necessidade e linguagem próprias | `consideration`, `conversion` | Indexar apenas quando existir intenção orgânica distinta e conteúdo suficiente. |
| Local landing | Serviço + localização atendida | `conversion` | Criar apenas com presença, prova e conteúdo local reais; evitar páginas geográficas artificiais. |

## Proof and Evidence Layer

| Page or asset | Sitemap level | Content type | Primary use | Priority | Production status |
| --- | --- | --- | --- | --- | --- |
| Testimonials | `hub` | `proofHub` | Organizar testemunhos por serviço, audiência, oferta e contexto de uso | `medium` | `notStarted` |
| Case studies | `hub` | `proofHub` | Organizar histórias estruturadas de problema, percurso, mecanismo e resultado observado | `medium` | `notStarted` |
| Registos individuais | `blogPost` or `shared` | `testimonial` or `caseStudy` | Alimentar páginas de serviço, subserviço, landing pages e páginas institucionais | Conforme a página apoiada | `notStarted` |

Testimonials e case studies só devem receber uma URL pública individual quando houver intenção de pesquisa ou valor narrativo suficiente. Caso contrário, permanecem como registos de prova reutilizáveis ligados às páginas comerciais.

## Recommended Inventory Fields

Cada URL planejada deve registrar:

| Field | Purpose |
| --- | --- |
| `pageName` | Nome canônico da página. |
| `sitemapLevel` | Hub, serviço principal, subserviço, artigo ou landing. |
| `wpContentType` | `page`, `especialidades` ou `post`. |
| `contentType` | Serviço, guia, comparação, FAQ, checklist ou landing. |
| `primaryIntent` | Uma frase descrevendo o que a pessoa quer alcançar na busca. |
| `pageGoal` | Awareness, consideration ou conversion. |
| `primaryAudience` | Perfil prioritário, sem excluir outras pessoas clinicamente elegíveis. |
| `canonicalParent` | Página principal que recebe e distribui autoridade. |
| `primaryCTA` | Próximo passo principal. |
| `briefing` | Escopo, promessa, limites e função da página. |
| `status` | Existing, new ou candidateForValidation. |
| `productionStatus` | Not started, in progress, draft, review, published ou blocked. |
| `priority` | High, medium ou low, conforme a ordem estratégica de produção. |
| `relatedService` | Serviço principal ou subserviço que a prova apoia. |
| `relatedOffer` | Oferta específica relacionada, quando houver. |
| `relatedAudience` | Perfil de audiência que reconhece o contexto do relato. |
| `permissionStatus` | Estado de autorização, consentimento e anonimização. |
| `candidatePlacements` | Páginas onde a prova pode ser utilizada. |
| `sourceAsset` | Caminho para o material original ou media em `workspace/6 - media_assets`. |

## Avoiding Cannibalization

- A página de serviço busca termos de contratação ou avaliação; o artigo busca responder uma pergunta.
- O hub “Ortodontia” explica a categoria; “Ortodontia infantil” e “Ortodontia para adultos” tratam audiências e percursos diferentes.
- “Estalidos na mandíbula” deve começar como artigo e apontar para DTM; não precisa ser uma nova oferta.
- “Aparelho ou alinhadores?” deve ser comparação editorial e apontar para a página de ortodontia adulta.
- “Respiração oral infantil” terá uma URL canônica, mesmo aparecendo em mais de um caminho de navegação.
- Facetas e implantes só ganham subpáginas após validar oferta e intenção; até lá permanecem dentro das páginas principais e do blog.

## Priority Order

1. Validar a árvore e os nomes dos sete serviços principais.
2. Definir a página-mãe Ortodontia e a página-mãe Sono, respiração e função orofacial.
3. Finalizar as páginas prioritárias de ATM/dor orofacial e Odontopediatria.
4. Finalizar o lead magnet de ATM e a sua landing page.
5. Rever os dez registos atuais do CPT e atribuir `mainService` ou `subservice`.
6. Validar os candidatos: Ortodontia funcional, Implantes dentários e Facetas dentárias.
7. Realizar pesquisa de palavras-chave e ajustar nomes, slugs, intenção e prioridade.
8. Criar briefs individuais e calendário dos clusters de blog.

## Open Questions

- “Ortodontia funcional” é um nome de serviço aprovado e compreendido pela audiência?
- Implantologia e facetas têm capacidade, provas e prioridade suficientes para subpáginas próprias?
- Quais termos são realmente usados em Portugal e na área regional para ATM, odontopediatria, alinhadores, respiração oral e roncopatia?
- Quais páginas devem receber investimento de anúncios no primeiro ciclo além de ATM e Odontopediatria?
