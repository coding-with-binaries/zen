import products from '../mocks/Products';
import { Product } from '../types/Product';

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};
