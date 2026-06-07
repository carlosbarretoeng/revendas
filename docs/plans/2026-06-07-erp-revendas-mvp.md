# ERP Pequenas Revendas (Agostini) - Implementação MVP

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implementar o ERP SaaS (Online-first) com suporte a produtos compostos, fluxo de caixa, devoluções e PDV offline-first.

**Architecture:** Arquitetura SaaS centralizada com banco de dados único, interface PDV (Desktop/Mobile) com SQLite local para operação offline e fila de sincronização em background.

**Tech Stack:** Python/FastAPI (Backend), React + Tailwind (PDV Desktop/Mobile), SQLite/IndexedDB (Local storage PDV).

---

## Fase 1: Fundação (Modelo de Dados)

### Task 1: Schema de Produtos (Simples e Compostos)
- **Modify:** `src/db/models.py` (Add Product, ProductComponent tables)
- **Task:** Implementar tabela de produtos com flag `is_composite` e tabela `product_components` (link para itens do kit).

### Task 2: Custo Médio Ponderado e Logs
- **Modify:** `src/inventory/stock_manager.py`
- **Task:** Criar lógica de atualização de custo médio ponderado e tabela `inventory_audit_log` para lançamentos de correção.

---

## Fase 2: PDV & Offline-First

### Task 3: PDV Local Store (Fallback)
- **Modify:** `src/frontend/pdv/db_local.js` (IndexedDB schema)
- **Task:** Implementar storage offline para `Vendas` e `Orçamentos`.

### Task 4: Sincronização & Dashboard Sync
- **Modify:** `src/frontend/pdv/sync_worker.js`
- **Task:** Criar worker que escuta conexão, envia vendas pendentes (UUID) e resolve conflitos de estoque.

---

## Fase 3: Operação (Vendas & Reversa)

### Task 5: PDV (Troca Inteligente)
- **Modify:** `src/pdv/logic.py`
- **Task:** Implementar lógica de checagem de estoque dos componentes na venda de um composto e modal de substituição.

### Task 6: Devolução & Checkout de Avaria
- **Modify:** `src/inventory/returns.py`
- **Task:** Implementar baixa de avaria (Checkout) no ato da devolução para itens avariados e retorno de itens íntegros.

---

## Fase 4: Relatórios & Fechamento

### Task 7: Relatórios (Caixa, Curva ABC, Margem)
- **Modify:** `src/reports/engine.py`
- **Task:** Criar endpoints de consulta agregada.

### Task 8: Relatórios (PDF & Envio)
- **Modify:** `src/reports/export.py`
- **Task:** Gerar PDF nativo e integrar envio via WhatsApp/E-mail (Web API).

---

**Plan complete and saved to `docs/plans/2026-06-07-erp-revendas-mvp.md`. Two execution options:**

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration.

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints.

**Which approach?**