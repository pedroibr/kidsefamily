# Environment

```yaml
identity:
  name: Clínica Cristiane Martins
  slug: cristiane-martins

locale:
  language: pt-BR
  timezone: America/Sao_Paulo

limits:
  root_memory_max_lines: 150
  root_agents_target_lines: 250
  root_agents_hard_ceiling: 300
  child_agents_target_lines: 120

resources:
  knowledge_protocol:
    repository_url: https://github.com/pedroibr/knowledge-protocol

variables:
  expected: []
```

## Rules

- Use only stable parameters and resource pointers.
- Do not store secrets, API keys, tokens, passwords, or credentials.
- Put explanations, schemas, and operating rules in typed documents or `AGENTS.md`.
