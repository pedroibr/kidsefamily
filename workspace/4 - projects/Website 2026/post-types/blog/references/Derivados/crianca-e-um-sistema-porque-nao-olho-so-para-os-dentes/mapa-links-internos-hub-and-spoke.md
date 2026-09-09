---
tipo: mapa-links-internos
slug: crianca-e-um-sistema-porque-nao-olho-so-para-os-dentes
data: 2026-06-28
tags: [derivado, seo, links-internos, hub-and-spoke]
---

# Mapa de links internos — Hub «A criança é um sistema»

> Estrutura **hub-and-spoke** desenhada em 2026-06-28. Caminhos no formato do `url-map-schema-org.md`: artigos em `/artigos/{slug}`, serviço em `/consulta-360`, conversão em `/marcacoes/`. Os links vivem no campo `related` de cada JSON (todos revalidados contra o schema).

## Centro (hub)
**[artigo-crianca-e-um-sistema-porque-nao-olho-so-para-os-dentes](artigo-crianca-e-um-sistema-porque-nao-olho-so-para-os-dentes.md)** — `/artigos/crianca-e-um-sistema-porque-nao-olho-so-para-os-dentes`
`related` → liga aos 4 spokes (um por eixo) + serviço + conversão.

## Raios (spokes) — um por eixo do olhar sistémico
| Eixo | Spoke | Caminho |
|---|---|---|
| Respiração | [artigo-respirar-pela-boca-sinais-quando-avaliar-crianca](../respirar-pela-boca-sinais-quando-avaliar-crianca/artigo-respirar-pela-boca-sinais-quando-avaliar-crianca.md) | `/artigos/respirar-pela-boca-sinais-quando-avaliar-crianca` |
| Sono / comportamento | [artigo-crianca-agitada-desatenta-pode-ser-o-sono](../crianca-agitada-desatenta-pode-ser-o-sono/artigo-crianca-agitada-desatenta-pode-ser-o-sono.md) | `/artigos/crianca-agitada-desatenta-pode-ser-o-sono` |
| Função (oclusão ≠ função) | [artigo-dentes-direitos-resolvem-tudo-funcao-crianca](../dentes-direitos-resolvem-tudo-funcao-crianca/artigo-dentes-direitos-resolvem-tudo-funcao-crianca.md) | `/artigos/dentes-direitos-resolvem-tudo-funcao-crianca` |
| Crescimento facial | [artigo-respirar-pela-boca-crescimento-cara-maxilares-crianca](../respirar-pela-boca-crescimento-cara-maxilares-crianca/artigo-respirar-pela-boca-crescimento-cara-maxilares-crianca.md) | `/artigos/respirar-pela-boca-crescimento-cara-maxilares-crianca` |

Cada spoke tem `related` → **de volta ao hub** + **2 irmãos laterais** + `/consulta-360` + `/marcacoes/` (malha completa).

**Links laterais entre irmãos (2026-06-28):**
- Respiração ↔ Crescimento facial + Sono
- Sono ↔ Respiração + Função
- Função ↔ Crescimento facial + Respiração
- Crescimento facial ↔ Respiração + Função

## Esquema
```
                 /consulta-360   /marcacoes/
                       ▲              ▲
                       │              │
   respiração ◀────►  [ HUB: a criança é um sistema ]  ◀────► crescimento facial
                       ▲              ▲
                       │              │
                     sono         função
```

## Notas
- O hub é a **porta de entrada** (intenção: diferenciador / identidade do método). Os spokes aprofundam cada eixo.
- Spokes adicionais a considerar no futuro (quando publicados/maduros): língua/postura, palato estreito, mordida, enurese↔sono.
- ⚠️ Não incluir aqui o derivado pé↔mordida: Marchena 2018 entra **apenas** como referência de apoio dentro do hub (associação ≠ causa), sem página própria.
- Rascunhos (`draft:true`) — links a confirmar na importação, a par do mapeamento de `pilar` e CTA do `/admin` (ver `url-map-schema-org.md`).
