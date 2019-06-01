import { Client } from './Client';
import { Product } from './Product';

export interface Order {
  zenId?: number;
  client: Client;
  appointmentDate: number;
  orderDate: number;
  total: number;
  orderItems: OrderItem[];
}

export interface OrderItem {
  product?: Product;
  quantity: number;
  discount: number;
}

export interface Orders {
  fetching: boolean;
  failed: boolean;
  orders: Order[];
  blueprint: {
    active: number;
    prevActive?: number;
    items: Order[];
  };
  receipt: {
    active: number;
    prevActive?: number;
    items: Order[];
  };
}
