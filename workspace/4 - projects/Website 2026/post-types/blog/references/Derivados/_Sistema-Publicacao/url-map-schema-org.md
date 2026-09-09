# URL map + Schema.org — RC360

> **Camada C (Publicação).** SEO **local pediátrico** (Oliveira de Azeméis). Substituir `cristianemartins.pt` pelo domínio real **‹confirmar›**.

## Mapa de URLs

| Página | URL | Tipo | Indexável | Schema principal |
|---|---|---|---|---|
| Home | `/` | Landing | Sim | WebSite + **Dentist/MedicalClinic** (pediátrica, NAP de Oliveira de Azeméis) |
| A Consulta 360º | `/consulta-360` | Cornerstone / serviço | Sim | MedicalWebPage + MedicalProcedure |
| Sobre (autora) | `/sobre` | Entidade | Sim | **Person** (Dra. Cristiane, odontopediatra) + ProfilePage |
| A rede 360º | `/rede-360` | Autoridade | Sim | MedicalWebPage *(E-E-A-T: equipa interdisciplinar)* |
| Índice de artigos | `/artigos` | Hub raiz | Sim | CollectionPage |
| Pilar (×5) | `/artigos/{pilar}` | Hub | Sim | CollectionPage + BreadcrumbList |
| Artigo | `/artigos/{slug}` | Artigo | Sim | MedicalWebPage + Article + FAQPage + BreadcrumbList |
| Marcação | `/marcacao` | Form | **Não** | — |
| Legais | `/privacidade` · `/termos` · `/cookies` | Legal | Sim | — |

**Notas:** SEO local (`Dentist` pediátrico + NAP + Google Business em Oliveira de Azeméis). `/consulta-360` é o hub de autoridade e conversão. `/rede-360` (rede interdisciplinar — ORL, fisioterapia, miofuncional) vale ouro em E-E-A-T.

## Pilares: editorial (pais) ↔ slug do site (JSON)

São **4 pilares editoriais**. (A "Postura" foi fundida — continua a ser pilar de observação clínica, mas o seu conteúdo entra em "Crescimento facial".)

| # | Pilar editorial (navegação) | slug editorial | `pilar` no JSON (site) | Intenção |
|---|---|---|---|---|
| 1 | Respiração | `respiracao` | `respiracao` | Alto volume — entrada |
| 2 | Sono | `sono` | `sono` | Alto volume — entrada |
| 3 | Crescimento facial | `crescimento-facial` | `crescimento-craniofacial` | Diferenciador (*cedo é fácil*) |
| 4 | Sinais e comportamento | `sinais-comportamento` | `desenvolvimento-integrado` | Diferenciador + alto volume |

**Slugs do site sem hub editorial dedicado:** `cavidade-oral` e `funcao-oral` — usar para temas de oclusão/função quando necessário.

> O campo `pilar` do JSON tem de usar **o slug do site** (coluna da direita), senão a importação falha. Ver o aviso de compatibilidade no `README.md`.
