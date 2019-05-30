export interface Product {
  zenId?: number;
  description: string;
  price: number;
  productType: string;
}

export interface Products {
  fetching: boolean;
  failed: boolean;
  products: Product[];
}
