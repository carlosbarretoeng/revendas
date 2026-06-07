import { Product } from '../db/models';

export function calculateAverageCost(
  currentAverageCost: number,
  currentQuantity: number,
  newQuantity: number,
  newPrice: number
): number {
  if (currentQuantity === 0) {
    return newPrice;
  }
  
  const totalCost = (currentQuantity * currentAverageCost) + (newQuantity * newPrice);
  const totalQuantity = currentQuantity + newQuantity;
  
  return totalCost / totalQuantity;
}
