# Design de Produto v1 - ERP Pequenas Revendas

## Visão Geral
O sistema utiliza um modelo de **SKUs Explícitos**, onde cada combinação de atributos (ex: cor, material) gera um registro de produto independente no banco de dados. Para mitigar a carga de cadastro, implementamos uma funcionalidade de clonagem/geração em massa.

## Estrutura do Registro de Produto
Cada produto possui os seguintes campos principais:
- Nome
- Categoria
- Preço de Custo
- Preço de Venda
- Fornecedor
- Atributos (e.g., Cor, Material, Tamanho)
- SKU (Único por combinação)
- Estoque Atual

## Fluxo de Cadastro Agilizado (Gerador de Variações)
1. **Definição de Template:** O lojista define os dados comuns (preço, categoria, etc.) para um novo modelo.
2. **Seleção de Atributos:** O lojista define as opções disponíveis (ex: Cor: Branco, Preto; Tampo: Branco, Preto).
3. **Geração:** O sistema calcula o produto cartesiano das combinações.
4. **Criação de SKUs:** O sistema cria os registros individuais (ex: Ravana-B-B, Ravana-B-P, etc.) para controle granular de estoque e vendas.

## Fluxo Financeiro (Pagamentos e Caixa)

1. **Regras de Liquidação (Cartão/Pix):**
   - Configuração por bandeira/meio (ex: "Débito" -> D+1, "Crédito" -> D+30).
   - O sistema cria o `Contas a Receber` com a data futura calculada.
   - **Registro de Taxas:** O sistema deve registrar taxas (percentual e/ou valor fixo) cobradas pela operadora, permitindo um balanço financeiro líquido (valor da venda - taxa = valor a receber).

2. **Fechamento de Caixa:**
   - **Saldo Inicial:** Definido na abertura do turno/dia.
   - **Movimentações:** Registro de Sangrias (retiradas) e Suprimentos (adições).
   - **Valor Final:** O lojista informa o valor total que sobrou fisicamente.
   - **Conferência:** Sistema calcula `(Inicial + Vendas_Dinheiro + Suprimentos - Sangrias)` e compara com o `Valor Final`, registrando eventuais diferenças.

## PDV e Orçamentos (Pré-Venda)

1. **PDV Híbrido:**
   - **PDV Desktop (Caixa):** Interface focada em agilidade, com suporte a leitor de código de barras, atalhos de teclado e interface de alta densidade de informação.
   - **PDV Mobile (Modo Vendedor):** Interface minimalista e rápida, exclusiva para captura de pré-vendas/orçamentos em dispositivos móveis.

2. **Orçamentos (Pré-Venda):**
   - **Comportamento:** Atua como uma reserva lógica sem baixar estoque ou registrar financeiro.
   - **Conversão:** Botão de "Converter em Venda" que finaliza o processo no Desktop.
   - **Validade:** Prazo customizável (padrão configurável pelo lojista, ajustável por orçamento).
   - **Cliente:** Cadastro incentivado para venda final, mas opcional; no orçamento (mobile), aceita apelido/nome simples para agilizar o atendimento.
