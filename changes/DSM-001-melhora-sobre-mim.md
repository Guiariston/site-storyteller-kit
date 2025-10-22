## 1. Contexto e problema

O portifólio estava com algumas informações desatualizado. Passando desinformação, reduzindo a credibilidade, confiabilidade.

## 2. Hipótese e valor esperado (falsificável)

Se o conteúdo da seção 'Sobre Mim' for atualizado, então esperamos que o perfil transmita mais credibilidade aos visitantes, pois as informações estarão mais precisas e alinhadas com as minhas habilidades atuais.

## 3. Escopo

Arquivos afetados: `CHANGELOG.MD', 'changes/DSM-001-melhora-sobre-mim.md', 'src/components/Contact.tsx' , 'src/components/Footer.tsx' , 'src/components/Navbar.tsx' , 'src/components/Projects.tsx' , 'src/components/Skills.tsx'

## 4. Risco e mitigação

Risco: 'A atualização de conteúdo pode introduzir erros de digitação ou informações incorretas.' , 'A formatação pode ser alterada, resultando em erros visuais.'

Mitigações: 'Revisão cuidadosa do texto antes do commit para evitar erros de digitação.'

## 5. Plano de rollout e rollback

Rollout: Abrir o Pull Request (PR) da sua branch para a branch principal (main) e obter a aprovação de um par.

Rollback (gatilho): Se a página for exibida com erros visuais ou se o build no pipeline de CI/CD falhar.

Ação: Reverter o Pull Request (git revert 05b2e74) para restaurar a versão anterior do código.

## 6. Métricas, SLIs e critérios de sucesso

- **Métricas:** Sucesso do build e deploy no pipeline; Ausência de erros visuais na página; Conteúdo atualizado exibido corretamente.

- **Critérios de sucesso:** O build foi finalizado com sucesso no pipeline de CI/CD; O novo texto na seção "Sobre Mim" é exibido sem erros de formatação.

- **Janela de observação**: Verificação visual e captura de tela após o deploy.

## 7. Aprovação proporcional ao risco

Revisor: @colega. Aprovação via PR.

## 8. Rastreabilidade

- **Issue/CR:** (não aplicável)

- **Commits:** d992d2d (feat: melhora a secao 'sobre-mim'); 05b2e74 (Revert); 97d1b31 (Revert "Revert")

- **PR:** [<link>](https://github.com/Guiariston/site-storyteller-kit/pull/8) — **Release/Tag:**

## 9. Evidências (anexos)

- Prints/artefatos: logs do CI, _screenshots_, relatório Lighthouse.

## 10. Pós-mudança (review breve)

A atualização do conteúdo da seção "Sobre Mim" foi publicada com sucesso e sem erros visuais. / O processo de deploy pode ser melhorado para ser mais rápido. / Adicionar um novo tema para o portfólio e criar uma funcionalidade de troca de temas

---

### Checklist de risco (marcar)

- [x] Mudança pequena e isolada

- [x] Plano de rollback testado

- [x] Critérios de sucesso objetivos definidos

- [x] Observabilidade/evidência preparada

- [x] Aprovação de par registrada no PR
