# Website 2026 SEO Memory

## Active Projects and Work
- 2026-08-24: `sitemap.md` contém a arquitetura V3 canónica; V2 e V1 estão preservados em `archive/sitemap-v2.md` e `archive/sitemap-v1.md` e não devem orientar produção.

## Decisions
- 2026-08-24: A primeira versão usa sete serviços principais e apenas três subserviços ativos: Respiração oral infantil, Ortodontia infantil e desenvolvimento e Ortodontia/alinhadores para adultos.
- 2026-08-24: Sono, respiração e roncopatia passa a uma única página principal; Ortodontia funcional, Implantes e Facetas permanecem dentro das páginas-mãe até validação.
- 2026-08-24: Infância e desenvolvimento; Dor, função e sono; e Saúde oral e reabilitação estética são grupos de navegação, não páginas adicionais.
- 2026-08-24: O sitemap separa template de página e sequência de macro-secções; cada secção pode declarar `sectionType :: layoutId`, e o wireframe expande a combinação sem redefinir a estrutura.
- 2026-08-24: O conteúdo de blog, testemunhos e case studies fica numa camada de recursos/post types, fora da árvore estrutural salvo decisão explícita de indexação.
- 2026-08-18: O hub `/especialidades/` será uma página; serviços principais e subserviços usarão o CPT `especialidades`; conteúdos educativos usarão `post`.
- 2026-08-18: A hierarquia será conceitual e de links internos, sem exigir URLs aninhadas no primeiro ciclo.
- 2026-08-18: Uma subpágina comercial só deve existir quando houver oferta, audiência ou mecanismo suficientemente distinto; sintomas e dúvidas isoladas devem começar como conteúdo editorial.
- 2026-08-18: Terapia da fala/motricidade orofacial foi retirada do escopo comercial atual; a subpágina de Implantes dentários e a candidata de Facetas dentárias permanecem para validação.
- 2026-08-18: O controlo de produção usa `productionStatus` e `priority`; Odontopediatria e ATM/dor orofacial são o primeiro ciclo de produção.
- 2026-08-18: A arquitectura de páginas inclui uma camada `hubs/` para listagens agregadoras de Blog e Especialidades, além das áreas técnicas `testimonials/` e `case-studies/` para prova.

## Scheduled Tasks
- None recorded yet.

## Core Memory
- 2026-08-24: A árvore comercial usa sete páginas principais: Odontopediatria; ATM e dor orofacial; Ortodontia; Sono, respiração e roncopatia; Medicina dentária geral; Implantologia e reabilitação; Estética e restauração. A sequência macro de cada uma está no sitemap V3.
