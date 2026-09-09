# Padrão de Imagens dos Derivados (Fase 2) — RC360

> **Fonte única de verdade para imagens de Fase 2.** Aplica-se a **todos** os derivados (blog + carrossel) e a **todos os processamentos futuros**. Decidido com a Dra. Cristiane em 2026-06-24.

## Âmbito
Sempre que se gera um derivado de comunicação (Fase 2), produzem-se **também**, na mesma sessão, os prompts de imagem (em inglês, para o Gemini):

1. **Capa do artigo do blog** — 1 prompt.
2. **Carrossel** — **8 prompts, um por slide** (Hook · Contexto · 1.ª Lição · Profundidade · Detalhes que emocionam · A Virada · Lição Central · CTA).

## Regra de ouro — SEM contextos abstratos (não negociável)
Toda a imagem mostra uma **cena concreta e real** do mundo dos pais e da criança: uma criança, um pai/mãe com a criança, um momento de casa, de sono, de brincadeira, de rotina, ou de consulta de odontopediatria. **Nunca** abstrações.

**Proibido:** fundos abstratos, gradientes ou formas geométricas como tema; objetos a flutuar; metáforas visuais puras (ampulhetas, balões, engrenagens, cérebros a brilhar); diagramas anatómicos estilizados como "arte"; conceitos sem pessoas; cenários vazios ou oníricos; colagens simbólicas; setas/ícones; qualquer texto, números, logótipos ou marca de água.

**Preferir:** fotografia editorial pediátrica/familiar **fotorrealista**, com pessoas reais em situações reconhecíveis; enquadramento natural; expressões calmas e acolhedoras; ambiente integrativo e centrado na família (nunca frieza clínica).

## Estilo de marca (comum a todos os prompts)
- Fotografia limpa, **luz natural suave**, profundidade de campo curta, tons de pele suaves, fotorrealista.
- **Paleta marfim / coral quente / turquesa subtil** (ivory / warm coral / subtle turquoise).
- Atmosfera tranquila, empática, integrativa; sem frieza clínica.
- **Capa:** deixar **espaço negativo limpo** (topo ou lateral) para o título.
- Terminar **sempre** com: `No text, no logos, no watermark.`
- Crianças retratadas com **respeito e segurança** (sem sofrimento explícito, sem dramatização do medo).

## Saídas obrigatórias (ficheiros, por `slug`)
- **Blog:** `imagem_capa.prompt_geracao` (em inglês) **dentro do JSON** + ficheiro legível `imagem-capa-<slug>.md`.
- **Carrossel:** `carrossel-<slug>.md` (8 slides, texto) **+** `carrossel-<slug>-imagens.md` — **os 8 prompts**, um por slide.

Os ficheiros de imagens são feitos para **copiar e colar diretamente no Gemini ou ChatGPT**: cada prompt vai num **bloco de código próprio** (entre ```), em inglês, **completo e autossuficiente** — nada de o utilizador ter de juntar peças.

## Cada prompt é DETALHADO (nunca resumido)
Cada prompt é um **parágrafo completo em inglês (~70–110 palavras)** que desenvolve, por esta ordem:
1. **Sujeito** + idade aproximada (uma criança; ou pai/mãe + criança), traços europeus/portugueses, retratados com segurança e dignidade.
2. **Ação e expressão concretas** ligadas ao conceito do slide (o que faz, como está o rosto).
3. **Cenário real e detalhado** (quarto à noite, sala, cozinha, consultório de odontopediatria) com objetos do quotidiano.
4. **Enquadramento/composição** (plano próximo/médio, ângulo; na capa, espaço negativo limpo para o título).
5. **Luz** natural suave + profundidade de campo curta.
6. **Paleta** marfim/coral/turquesa + atmosfera calma, acolhedora, integrativa (sem frieza clínica).
7. **Render** fotorrealista, tons de pele suaves, estilo editorial pediátrico.
8. **Restrições** finais: `No text, no logos, no watermark.`

Proibido resumir a uma frase ou usar abstrações (ver Regra de ouro acima).

## Conceito-semente de cada slide (o prompt desenvolve-o em detalhe)
Hook · Contexto · 1.ª Lição · Profundidade · Detalhes que emocionam · A Virada · Lição Central · CTA. Cada semente é traduzida numa **cena humana concreta** ligada ao tema clínico do artigo — o slide 8 (CTA) mostra tipicamente o ambiente acolhedor da consulta Respira e Cresce 360 em Oliveira de Azeméis, com a Dra. (médica dentista) e a criança/pais.

## Formato do ficheiro `carrossel-<slug>-imagens.md`
```md
---
tipo: derivado-imagens-carrossel
slug: <slug>
fonte_carrossel: "carrossel-<slug>"
data: AAAA-MM-DD
tags: [derivado, imagens, gemini]
---

# Prompts de imagem — Carrossel «<título>»
> Copiar cada bloco e colar no Gemini/ChatGPT. Cenas concretas; paleta marfim/coral/turquesa.

## Slide 1 — Hook
\`\`\`
<prompt completo em inglês, ~70–110 palavras>
\`\`\`

## Slide 2 — Contexto
\`\`\`
<prompt completo>
\`\`\`

… (slides 3 a 8, mesmo formato) …
```
O `imagem-capa-<slug>.md` segue o mesmo princípio: **alt em pt-PT** + **1 bloco de código** com o prompt da capa.

## Exemplo completo (referência de profundidade)
Para o carrossel `respirar-dormir-mal-crescimento-altura-crianca` (pilar sono). **Esta é a profundidade esperada — não menos.**

### Capa do blog
```
Clean, warm, photorealistic pediatric editorial photograph for a parenting-health blog cover. A calm European child, around 6 years old, sleeping peacefully at night in their own bed, lips gently closed, breathing through the nose, face deeply relaxed and restful; soft cotton bedding, a faint nightlight glow on the wall, a blurred bedroom in the background. Medium close-up, child framed to the right, generous clean negative space on the left for a headline. Soft natural light, shallow depth of field, gentle skin tones. Brand palette of ivory, warm coral and subtle turquoise. Reassuring, family-centered, integrative mood — no clinical coldness. No text, no logos, no watermark.
```

### Slide 1 — Hook · «E se a altura dele começar à noite?»
```
Clean, warm, photorealistic pediatric editorial photograph. A European child around 6 years old asleep at night in a cozy bedroom, lying on their side under a soft duvet, mouth gently closed, chest calm, face serene and deeply rested. A small nightlight casts a soft glow; a blurred shelf with a few toys in the background. Medium close-up from a low, tender angle, with clean negative space at the top for a headline. Soft natural night light, shallow depth of field, smooth skin tones. Brand palette of ivory, warm coral and subtle turquoise. Quiet, hopeful, family-centered atmosphere. No text, no logos, no watermark.
```

### Slide 2 — Contexto · «A pergunta que costuma surgir»
```
Clean, warm, photorealistic family editorial photograph. A European mother and her 6-year-old child at home during the day, sitting together on a sofa; the mother looks at her child with gentle, thoughtful concern while the child rests against her. Bright living room with soft textiles and a window with diffused daylight in the background. Medium shot, natural candid framing, clean negative space on one side for a headline. Soft natural light, shallow depth of field. Brand palette of ivory, warm coral and subtle turquoise. Caring, everyday, reassuring mood. No text, no logos, no watermark.
```

### Slide 3 — 1.ª Lição · «O crescimento tem um horário»
```
Clean, warm, photorealistic pediatric editorial photograph. A European child around 6 years old in deep, peaceful night sleep, fully relaxed under a soft blanket, nose breathing, one hand resting near the pillow. Calm bedroom bathed in gentle moonlight through curtains; soft shadows and cozy textures. Close-up centered on the restful face, slightly overhead angle, clean negative space above for a headline. Soft natural light, shallow depth of field, tender skin tones. Brand palette of ivory, warm coral and subtle turquoise. Serene, restorative, hopeful atmosphere. No text, no logos, no watermark.
```

### Slide 4 — Profundidade · «Quando a respiração trava o sono»
```
Clean, warm, photorealistic pediatric editorial photograph, handled with dignity and no drama. A European child around 6 years old sleeping restlessly at night with the mouth open, the duvet tangled and pushed aside, head tilted back on the pillow, a slightly tired expression. Dim bedroom with a soft nightlight, a packet of tissues blurred on the bedside table suggesting congestion. Medium close-up, gentle angle, clean negative space for a headline. Soft natural low light, shallow depth of field. Brand palette of ivory, warm coral and subtle turquoise. Empathetic, never frightening. No text, no logos, no watermark.
```

### Slide 5 — Detalhes que emocionam · «O sinal que se confunde com "é só da genética"»
```
Clean, warm, photorealistic family editorial photograph. A European child around 6 years old waking up in the morning looking tired, sitting on the edge of the bed rubbing one eye, shoulders a little slumped; a parent's hand gently rests on the child's back in support. Bright bedroom with morning daylight through a window, rumpled bedding. Medium shot, intimate candid framing, clean negative space for a headline. Soft natural light, shallow depth of field, gentle skin tones. Brand palette of ivory, warm coral and subtle turquoise. Tender, understanding mood. No text, no logos, no watermark.
```

### Slide 6 — A Virada · «Parte do atraso pode recuperar»
```
Clean, warm, photorealistic pediatric editorial photograph. The same European child around 6 years old now sleeping serenely at night, lips closed, breathing calmly through a clear nose, face relaxed and healthy-looking under a soft duvet. Tidy, peaceful bedroom with a gentle warm nightlight and soft turquoise wall tones. Close-up on the restful face, slightly low tender angle, clean negative space above for a headline. Soft natural light, shallow depth of field, smooth skin tones. Brand palette of ivory, warm coral and subtle turquoise. Relieved, hopeful, restorative atmosphere. No text, no logos, no watermark.
```

### Slide 7 — Lição Central · «Honestidade antes de promessas»
```
Clean, warm, photorealistic family editorial photograph. A European parent and their 6-year-old child together in daylight at home, the child calm and well, the parent embracing them gently with a soft, trusting expression; a sense of reassurance rather than worry. Bright, airy room with soft furnishings and diffused window light. Medium shot, warm candid framing, clean negative space on one side for a headline. Soft natural light, shallow depth of field. Brand palette of ivory, warm coral and subtle turquoise. Honest, grounded, caring mood. No text, no logos, no watermark.
```

### Slide 8 — CTA · «O próximo passo»
```
Clean, warm, photorealistic pediatric dental editorial photograph in a friendly clinic in Oliveira de Azeméis. A female pediatric dentist in clean attire gently talks to a European child around 6 years old seated comfortably, while a parent sits nearby; the child looks at ease and the atmosphere is welcoming and unhurried. Bright, modern, cozy dental office with soft décor, natural light from a window. Medium shot, inviting composition, clean negative space for a headline. Soft natural light, shallow depth of field, gentle skin tones. Brand palette of ivory, warm coral and subtle turquoise. Trustworthy, integrative, family-centered mood. No text, no logos, no watermark.
```

## Conformidade
Estes prompts respeitam a [camada-conformidade-voz](camada-conformidade-voz.md) (sem alarme, sem promessa, sem julgar a família) e o registo da marca. As imagens **educam e acolhem** — não assustam nem prometem cura.

## Checklist (antes de fechar a Fase 2)
- [ ] Prompt de **capa do blog** gerado (no JSON + `imagem-capa-<slug>.md`).
- [ ] **8 prompts** do carrossel em `carrossel-<slug>-imagens.md` (1 por slide, numerados).
- [ ] Cada prompt é **detalhado (~70–110 palavras)** e está num **bloco de código** pronto a colar no Gemini/ChatGPT — nunca resumido a uma frase.
- [ ] Todas as cenas são **concretas** (pessoas/situações reais) — zero abstrações.
- [ ] Paleta marfim/coral/turquesa + luz natural suave em todos.
- [ ] Capa com espaço negativo para título; todos terminam com `No text, no logos, no watermark.`
- [ ] Sem texto/números/logo/marca de água em nenhuma imagem.

---
*Padrão definido 2026-06-24. Referenciado por Leitura e Confrontação (Fase 2) e por `prompt-gerador-artigos-RC360.md`.*
