import produce from 'immer';
import * as Actions from '../actions/product/ActionConstants';
import { ProductAction } from '../actions/product/ActionTypes';
import initialState from '../initial-state';
import { Products } from '../types/Product';

const productReducer = (
  state: Products = initialState.productState,
  action: ProductAction
): Products => {
  return produce<Products, Products>(state, draft => {
    switch (action.type) {
      case Actions.FETCH_PRODUCTS:
        draft.failed = false;
        draft.fetching = true;
        break;
      case Actions.FETCH_PRODUCTS_FAILED:
        draft.failed = true;
        draft.fetching = false;
        break;
      case Actions.FETCH_PRODUCTS_SUCCESS:
        draft.fetching = false;
        draft.products = action.payload.products;
        break;
      // no default
    }
  });
};

export default productReducer;
