# Design de Produto v2 - ERP Pequenas Revendas

## Visão Geral
O sistema utiliza um modelo de **SKUs Explícitos** com funcionalidade de clonagem/geração em massa para facilitar o cadastro.

## Estrutura do Registro de Produto
- Nome, Categoria, Preço de Custo, Preço de Venda, Fornecedor, Atributos, SKU, Estoque Atual.

## 1. Gestão de Produtos Compostos (Kits)
- **Nível:** Simples (1 nível).
- **Preço:** Independente, definido livremente pelo lojista. O sistema exibe custo/preço de venda da soma como apoio, mas não trava.
- **PDV:** Ao vender um composto, o sistema verifica a disponibilidade de todos os componentes.
- **Troca Inteligente:** Se um componente faltar, o PDV sugere substitutos compatíveis.
- **Devolução:** Sempre do SKU Composto completo. Não há devolução parcial de componentes.

## 2. Fluxo Financeiro e Caixa
- **Liquidação:** Configuração por meio (cartão/Pix) com registro de taxas.
- **Fechamento de Caixa:** Conferência com saldo inicial, sangrias, suprimentos e registro de diferenças.
- **Auditoria de Custo:** Custo Médio Ponderado. Entrada de notas permite adicionar custos acessórios (frete/imposto) para compor o custo médio. Ajustes manuais permitidos.

## 3. Logística Reversa (Devoluções)
- **PDV:** Estorno simples no PDV sem exigência de recibo impresso.
- **Estoque:** Retorno imediato do SKU Composto ao saldo disponível.
- **Backoffice:** Gestão de avarias pós-devolução feita manualmente pelo lojista no estoque, removendo o composto e dando baixa na peça avariada se necessário.

## 4. PDV e Orçamentos
- **PDV Híbrido:** Desktop (Agilidade/Barras) e Mobile (Vendedores/Orçamentos).
- **Orçamentos:** Reserva lógica sem baixa de estoque ou financeiro. Conversão facilitada para venda final.

## 5. Usuários e Permissões
- **Permissões:** Sistema permissivo (sem travas de supervisor por enquanto).
- **Visibilidade:** Custo de produto oculto para perfil de Vendedor (Mobile).
