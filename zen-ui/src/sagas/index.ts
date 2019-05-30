import { all } from 'redux-saga/effects';
import authSaga from './Auth';
import clientSaga from './Client';
import orderSaga from './Order';
import productSaga from './Product';

export default function* rootSaga() {
  yield all([clientSaga(), authSaga(), productSaga(), orderSaga()]);
}
