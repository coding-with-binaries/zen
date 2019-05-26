import { all } from 'redux-saga/effects';
import authSaga from './Auth';
import clientSaga from './Client';

export default function* rootSaga() {
  yield all([clientSaga(), authSaga()]);
}
