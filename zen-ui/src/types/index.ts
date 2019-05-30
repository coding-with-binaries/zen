import { Auth } from './Auth';
import { Clients } from './Client';
import { Orders } from './Order';
import { Products } from './Product';

export interface StoreState {
  navDrawer: boolean;
  auth: Auth;
  clientState: Clients;
  orders: Orders;
  productState: Products;
}
