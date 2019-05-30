import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/product/ActionConstants';
import {
  fetchProductsFailed,
  fetchProductsSuccess
} from '../actions/product/Actions';
import { getAllProducts } from '../api/Product';

function* getProductsSaga() {
  try {
    const products = yield call(getAllProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailed());
  }
}

function* watchForGetProducts() {
  yield takeLatest(Actions.FETCH_PRODUCTS, getProductsSaga);
}

export default function* productSaga() {
  yield all([watchForGetProducts()]);
}
