import axios from 'axios';
import { headers } from '../constants/ZenConstants';
import { Product } from '../types/Product';

const PRODUCTS_URL = `/api/products`;

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(PRODUCTS_URL, {
      headers: headers()
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
