# Design de Produto v3.1 - ERP Pequenas Revendas (Consolidado)

## 1. Visão Geral
Sistema ERP SaaS para pequenas revendas, com arquitetura "Online-first" e fallback local para PDV. Foco em SKUs explícitos e gerador de variações.

## 2. Gestão de Produtos (BOM Simples)
- **Composição:** Nível único de composição (Kit contém itens).
- **Preço (Soberania do Lojista):** Totalmente livre. O sistema sugere a soma dos custos/preços como referência, mas permite alteração total pelo lojista sem travas. O sistema não possui travas de preço; a responsabilidade pela margem é 100% do lojista.
- **Venda:** O sistema verifica a disponibilidade de todos os componentes no PDV.
- **Troca Inteligente:** Se faltar componente, o PDV permite a substituição imediata e faz a reserva lógica do novo item.

## 3. Fluxo de Venda e PDV
- **Arquitetura:** Online-first. Offline apenas para PDV (Venda/Orçamento). Administração/Financeiro bloqueados se offline.
- **Sync:** Dashboard de Sincronização no topo do PDV mostra vendas pendentes de sync.
- **Reserva de Orçamento:** O bloqueio de estoque em orçamentos offline é uma reserva de conveniência. Se o estoque real esgotar antes da sincronização, a *Venda Real* tem prioridade sobre o *Orçamento* no servidor, notificando o vendedor.
- **Resolução de Conflitos:** Vendas offline são validadas pelo servidor; caso haja erro de estoque, o gestor é notificado para correção.

## 4. Financeiro e Auditoria
- **Pagamentos:** Registro manual no PDV. Conciliação manual pós-venda.
- **Custo:** Custo Médio Ponderado.
- **Auditoria:** Log imutável de entradas. Correções de custo exigem "lançamento de correção" para manter rastro.

## 5. Logística Reversa (Devolução)
- **Regra:** Devolução sempre do SKU Composto completo.
- **Checkout de Avaria:**
    - **Online:** No ato da devolução, o lojista marca avarias. O sistema baixa a peça avariada e devolve as boas ao estoque automaticamente.
    - **Offline:** O fluxo estorna a venda, transfere o item para "Em Conferência" e o checkout de avaria é realizado no backoffice após sincronização.

## 6. PDV e Orçamentos
- **PDV Híbrido:** Desktop (Agilidade) e Mobile (Vendedores/Orçamentos).
- **Comprovante:** Geração de PDF (nativo do SO) + Botões de envio opcional (WhatsApp/E-mail).

## 7. Usuários e Permissões
- **Permissões:** Sistema permissivo (sem travas de senha no PDV).
- **Visibilidade:** Custo de produto oculto no perfil Vendedor (Mobile).

## 8. Relatórios Vitais (Dia 1)
- **Fluxo de Caixa:** Entradas/Saídas/Sangrias.
- **Curva ABC:** Giro de produtos.
- **Margem:** Lucratividade real baseada no Custo Médio.
