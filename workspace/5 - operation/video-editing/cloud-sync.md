---
type: Guide
title: Sincronização de mídia para edição de vídeo
description: Orientações para localizar, recuperar e guardar mídia de projetos de vídeo.
status: active
owner: workspace
tags: [video, storage, sync]
created: 2026-11-10
updated: 2026-11-10
---

# Sincronização de mídia

Esta pasta do workspace está no Google Drive local. A disponibilidade dos arquivos em outro computador ou runtime depende da sincronização e das permissões efetivas; nenhuma integração de transferência foi configurada ou testada neste setup. Escolha o armazenamento persistente adequado para cada projeto e confirme acesso e retenção antes de depender dele.

## Índice por projeto

Mantenha no projeto um índice de mídia com caminho relativo esperado, identificador persistente ou origem, versão, tamanho e checksum quando disponíveis, além do estado de sincronização e pendências. Um caminho temporário de runtime não permite recuperar arquivos após seu encerramento. Não registre credenciais nem URLs assinadas nos documentos ou no Git.

## Fluxo de retomada

1. Sincronize os documentos e consulte o índice do projeto.
2. Confirme acesso, disponibilidade, retenção e espaço; recupere somente a mídia necessária para os caminhos esperados e verifique tamanho e checksum quando possível.
3. Trabalhe com cópias, preservando os originais. Mantenha projetos e arquivos temporários locais enquanto necessário.
4. Quando autorizado ou solicitado, envie as versões necessárias ao armazenamento persistente, verifique a transferência e atualize o índice antes de sincronizar os documentos.
5. Se a transferência ou verificação falhar, preserve a cópia disponível e registre a pendência; não marque como sincronizada.

Um runtime temporário ou armazenamento com retenção não verificada não constitui backup permanente. Escolha e teste a solução de backup separadamente.
