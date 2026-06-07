import { expect, test } from 'vitest';
import { calculateAverageCost } from './stock_manager';

test('Calcula Custo Médio Ponderado corretamente', () => {
  // Entrada: 10 unidades a R$ 20.00
  // Estoque anterior: 0
  let currentAverageCost = 0;
  let currentQuantity = 0;
  
  let newCost = calculateAverageCost(currentAverageCost, currentQuantity, 10, 20.00);
  expect(newCost).toBe(20.00);

  // Segunda entrada: 10 unidades a R$ 30.00
  // Estoque atual: 10
  currentAverageCost = newCost;
  currentQuantity = 10;
  
  newCost = calculateAverageCost(currentAverageCost, currentQuantity, 10, 30.00);
  
  expect(newCost).toBe(25.00);
});
