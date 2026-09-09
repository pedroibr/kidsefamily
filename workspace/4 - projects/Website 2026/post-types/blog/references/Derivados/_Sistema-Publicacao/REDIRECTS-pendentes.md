# Redirects e decisões de slug pendentes — site Cristiane Martins

> Ações de SEO a executar no site, fora do `/admin`.
> Os redirects 301 configuram-se na plataforma do site (ex.: `vercel.json` campo `redirects`, ou config do CMS/Astro/WordPress).

## Redirects 301 a criar

| De (slug antigo) | Para (slug destino) | Motivo |
|---|---|---|
| _(vazio — preencher quando se mudar/consolidar um slug)_ | | |

### Exemplo de configuração (vercel.json)
```json
{
  "redirects": [
    {
      "source": "/slug-antigo",
      "destination": "/slug-novo",
      "permanent": true
    }
  ]
}
```

## Notas
- Sempre que se muda o slug de um artigo já publicado, criar **301** do antigo para o novo, para preservar o posicionamento e os backlinks (~90% da equity).
- Migrar artigos por cima (mesmo slug, via «Atualizar o existente» no `/admin`) **não** precisa de redirect.
- Evitar conteúdo duplicado: se dois artigos perseguem a mesma `pergunta_alvo`, consolidar num só e redirecionar o outro.
