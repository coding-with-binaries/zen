import { Clients } from './Client';
import { Order } from './Order';

export interface StoreState {
  navDrawer: boolean;
  clients: Clients;
  draftOrders: Order[];
}
