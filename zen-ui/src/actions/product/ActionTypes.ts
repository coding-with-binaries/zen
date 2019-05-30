import { Product } from '../../types/Product';
import * as Actions from './ActionConstants';

export interface FetchProducts {
  type: Actions.FETCH_PRODUCTS;
}

export interface FetchProductsFailed {
  type: Actions.FETCH_PRODUCTS_FAILED;
}

export interface FetchProductsSuccess {
  type: Actions.FETCH_PRODUCTS_SUCCESS;
  payload: {
    products: Product[];
  };
}

export type ProductAction =
  | FetchProducts
  | FetchProductsFailed
  | FetchProductsSuccess;
