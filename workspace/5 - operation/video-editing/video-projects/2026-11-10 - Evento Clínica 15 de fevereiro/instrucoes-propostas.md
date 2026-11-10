---
type: Draft
title: Proposta de instruções do projeto de vídeo
description: Conteúdo proposto para AGENTS.md sujeito a aprovação.
status: draft
owner: workspace
tags: [video, instructions, draft]
created: 2026-11-10
updated: 2026-11-10
---

# Proposta para AGENTS.md

## Purpose
Organizar a edição do projeto Evento Clínica 15 de fevereiro, preservando o material recebido e suas versões.

## Inheritance
- Herde as regras do workspace e da área de edição de vídeo.

## Rules
- Consulte [Aprendizados](learnings.md) antes de planejar ou editar; registre feedback reutilizável com data, contexto e escopo, sem generalizar decisões deste projeto.
- Preserve as fontes em `Raw/` e a estrutura recebida; confirme a função, a versão e eventual sincronização de cada fonte antes de editar.
- Em `Clean Cuts/`, organize transcrições, decisões e cortes opcionais por fonte, identificando sua origem; reutilize materiais existentes sem movê-los ou sobrescrevê-los.
- Pranchas e prévias ficam respectivamente em `Contact Sheets/` e `Previews/` na pasta da mídia, identificadas por fonte, intervalo e finalidade; use a skill `create-video-preview` para prévias.
- Cada SRT criado ou atualizado deve ter um TXT espelho equivalente na mesma pasta e identificar o relógio e a versão da mídia. Clean cuts referem-se ao tempo original; legendas finais ao tempo da montagem correspondente.
- Clipes derivam de uma versão contínua identificada; cada clipe identificado reúne seleção SRT/TXT e pastas Raw Clip, Final Clip, Motion Graphics e Subtitles. Revise o alinhamento de legendas e gráficos após mudanças na edição.

## Routing
- Consulte o [índice de mídias](indice-midias.md) e a skill relevante no Skills MCP quando disponível.
- Use `Final Cut/` para a montagem contínua, `Motion Graphics/` para materiais gráficos e `Clips/` para clipes identificados.
