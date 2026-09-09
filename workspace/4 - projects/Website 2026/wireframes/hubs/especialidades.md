---
type: Website Page
title: "Especialidades"
slug: "especialidades"
pageType: hub
contentType: directory
sitemapLevel: hub
wpContentType: page
status: existing
productionStatus: contentDraftOnSite
priority: high
pageGoal: consideration
primaryIntent: "encontrar o serviço adequado"
primaryAudience: "pessoas e famílias que procuram compreender qual é o cuidado mais indicado"
canonicalParent: "/"
primaryCTA: "Encontrar o cuidado adequado"
updated: 2026-08-24
---

# Especialidades

## Page Brief

Organizar os sete serviços principais da Clínica Kids e Family e ajudar cada pessoa a identificar o caminho mais próximo da sua necessidade. O hub deve funcionar como listagem e orientação inicial, não como substituto das páginas de serviço. Os três caminhos de cuidado são grupos de navegação, não páginas adicionais.

## Content Architecture

### Section 1 — Introdução

- **Display:** introdução curta com tagline, título e texto de orientação.
- **Tagline:** ENCONTRE O SEU PONTO DE PARTIDA
- **Title:** Diferentes necessidades. Um próximo passo mais claro.
- **Content:** Explore os principais caminhos de cuidado da clínica e escolha a área que mais se aproxima do que está a viver. Se ainda não souber por onde começar, pode falar connosco pelo WhatsApp.

### Section 2 — Listagem de serviços

- **Display:** bloco `generateblocks-pro/tabs`, com menu vertical no desktop e scroll horizontal no mobile; cada tab mostra um Query Loop filtrado do CPT `especialidades`.
- **Groups:** Infância e desenvolvimento; Dor, função e sono; Saúde oral e reabilitação estética.
- **Main services:** Odontopediatria; ATM e dor orofacial; Ortodontia; Sono, respiração e roncopatia; Medicina dentária geral e cuidado adulto; Implantologia e reabilitação oral; Estética dentária e restauração.
- **Active subservices:** Respiração oral infantil; Ortodontia infantil e desenvolvimento; Ortodontia e alinhadores transparentes para adultos.
- **Item display:** título, excerpt curto e ligação “Conhecer especialidade”; imagens permanecem opcionais até as páginas receberem imagens destacadas.
- **Listing rules:** cada item deve apontar para a página canónica do serviço. Subserviços aparecem apenas dentro do grupo ou da página-mãe pertinente; lead magnets não entram como especialidades.

## Page Connections

| Destino | Tipo de ligação | Motivo | CTA ou âncora |
| --- | --- | --- | --- |
| `/especialidades/odontopediatria/` | `priority` | Entrada prioritária para infância e desenvolvimento | Ver Odontopediatria |
| `/especialidades/dtm-dor-orofacial/` | `priority` | Entrada prioritária para dor e função | Ver ATM e dor orofacial |
| `/especialidades/ortodontia/` | `service` | Organizar ortodontia infantil e adulta | Ver Ortodontia |
| `/especialidades/sono-respiracao-roncopatia/` | `service` | Explicar o papel dentário em sinais de sono e respiração | Ver Sono, respiração e roncopatia |
| `/especialidades/medicina-dentaria-geral-adultos/` | `service` | Continuidade, prevenção e cuidado adulto | Ver Medicina dentária geral |
| `/especialidades/implantologia-reabilitacao-oral/` | `service` | Recuperação de dentes, estrutura e função | Ver Implantologia e reabilitação |
| `/especialidades/estetica-dentaria-restauracao/` | `service` | Restauração e estética responsável | Ver Estética e restauração |
| `/contacto/` | `conversion` | Facilitar a marcação | Marcar consulta |
| `/` | `navigation` | Retornar à proposta geral | Voltar ao início |

## SEO Notes

- Indexação: indexar.
- O hub deve encaminhar para páginas de serviço canónicas e evitar competir com artigos sobre sintomas ou dúvidas.

## Production Notes

- Conteúdo introdutório publicado na página WordPress `Especialidades` (id 164; `/especialidades/`) usando o template normal de páginas.
- A listagem de serviços foi publicada como tabs GenerateBlocks Pro com Query Loops filtrados por IDs e ordem editorial.
