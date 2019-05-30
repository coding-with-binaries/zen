import { Product } from '../../types/Product';
import * as Actions from './ActionConstants';
import {
  FetchProducts,
  FetchProductsFailed,
  FetchProductsSuccess
} from './ActionTypes';

export const fetchProducts = (): FetchProducts => ({
  type: Actions.FETCH_PRODUCTS
});

export const fetchProductsFailed = (): FetchProductsFailed => ({
  type: Actions.FETCH_PRODUCTS_FAILED
});

export const fetchProductsSuccess = (
  products: Product[]
): FetchProductsSuccess => ({
  type: Actions.FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});
