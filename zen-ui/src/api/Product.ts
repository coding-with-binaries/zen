import axios from 'axios';
import { headers } from '../constants/ZenConstants';
import products from '../mocks/Products';
import { Product } from '../types/Product';

const PRODUCTS_URL = `/api/products`;

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};
