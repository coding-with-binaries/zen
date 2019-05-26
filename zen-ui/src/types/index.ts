import { Auth } from './Auth';
import { Clients } from './Client';
import { Order } from './Order';

export interface StoreState {
  navDrawer: boolean;
  auth: Auth;
  clientState: Clients;
  orderBlueprints: Order[];
}
