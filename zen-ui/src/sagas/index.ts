import { all } from 'redux-saga/effects';
import clientSaga from './Client';

export default function* rootSaga() {
  yield all([clientSaga()]);
}
