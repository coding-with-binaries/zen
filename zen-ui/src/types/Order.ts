import { Client } from './Client';

export interface Order {
  zenId?: number;
  client: Client;
  appointmentDate: Date;
  orderDate: Date;
  total: number;
  orderItems: OrderItem[];
}

export interface OrderItem {
  product?: Product;
  quantity: number;
  discount: number;
}

export interface Product {
  zenId: number;
  description: string;
  price: number;
  productType: string;
}

export interface Orders {
  blueprints: {
    active: number;
    prevActive?: number;
    items: Order[];
  };
  receipts: Order[];
}
