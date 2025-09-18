# DSM-<id> — <Título curto da mudança>

**Tipo de mudança:** Padrão | Normal | Emergencial  
**Repositório:** <link>  
**Branch:** <nome-da-branch>  
**Responsável:** <nome> — **Data:** <AAAA-MM-DD>

## 1. Contexto e problema

Descreva a dor/risco/oportunidade. Evite “subir versão” sem contexto.

## 2. Hipótese e valor esperado (falsificável)

Se <ação>, então esperamos <efeito mensurável> pois <racional>.

## 3. Escopo

Arquivos/Componentes afetados. Limitar _blast radius_ (apenas x/y).

## 4. Risco e mitigação

- Principais riscos (técnicos/operacionais).
- Mitigações (pequenos lotes, _flag_, canário, janela controlada).

## 5. Plano de rollout e rollback

- **Rollout:** passos objetivos (ex.: habilitar _workflow_ / ativar flag).
- **Rollback:** passos objetivos e **gatilho** (ex.: falha no build, métrica < alvo).

## 6. Métricas, SLIs e critérios de sucesso

- Métricas (ex.: sucesso do _build_, Lighthouse, tempo de _pipeline_).
- **Critérios de sucesso:** (ex.: 3 execuções consecutivas verdes; tempo ≤ 120s).
- Janela de observação (ex.: 24h / 3 execuções).

## 7. Aprovação proporcional ao risco

Quem revisa (par independente). _Checklist_ de risco abaixo.

## 8. Rastreabilidade

- **Issue/CR:** <link>
- **Commits:** <hash1>, <hash2>
- **PR:** <link> — **Release/Tag:** <opcional>

## 9. Evidências (anexos)

- Prints/artefatos: logs do CI, _screenshots_, relatório Lighthouse.

## 10. Pós-mudança (review breve)

O que funcionou / o que melhorar / decisões futuras.

---

### Checklist de risco (marcar)

- [] Mudança pequena e isolada
- [] Plano de rollback testado
- [] Critérios de sucesso objetivos definidos
- [] Observabilidade/evidência preparada
- [] Aprovação de par registrada no PR
