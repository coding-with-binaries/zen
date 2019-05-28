import { Auth } from './Auth';
import { Clients } from './Client';
import { Orders } from './Order';

export interface StoreState {
  navDrawer: boolean;
  auth: Auth;
  clientState: Clients;
  orders: Orders;
}
