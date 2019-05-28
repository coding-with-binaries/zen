import { Client } from '../types/Client';
import { Order } from '../types/Order';

export const initialBlueprint = (client: Client): Order => ({
  appointmentDate: new Date(),
  client,
  orderDate: new Date(),
  orderItems: [],
  total: 0
});
