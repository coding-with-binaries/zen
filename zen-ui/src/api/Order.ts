import axios from 'axios';
import { headers } from '../constants/ZenConstants';
import { Order } from '../types/Order';

const ORDERS_URL = `/api/orders`;

export const addOrder = async (order: Order): Promise<Order> => {
  try {
    const response = await axios.post<Order>(ORDERS_URL, order, {
      headers: headers()
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
