export interface InventoryAuditLog {
  id: string;
  productId: string;
  type: 'ENTRY' | 'CORRECTION' | 'SALE' | 'RETURN';
  quantity: number;
  cost: number;
  timestamp: Date;
  reason?: string;
}
