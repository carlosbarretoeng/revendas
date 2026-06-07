export interface Product {
  id: string;
  name: string;
  isComposite: boolean;
  averageCost: number;
}

export interface ProductComponent {
  id: string;
  parentProductId: string;
  componentProductId: string;
  quantity: number;
}
