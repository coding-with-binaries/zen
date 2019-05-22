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
  products: Product[];
  quantity: number;
  discount: number;
}

export interface Product {
  zenId: number;
  description: string;
  price: number;
  productType: string;
}
