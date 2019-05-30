import { Client } from '../types/Client';
import { Order } from '../types/Order';

export const initialBlueprint = (client: Client): Order => ({
  appointmentDate: new Date().getTime(),
  client,
  orderDate: new Date().getTime(),
  orderItems: [],
  total: 0
});
