import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/order/ActionConstants';
import {
  submitOrderFailed,
  submitOrderSuccess
} from '../actions/order/Actions';
import { SubmitOrder } from '../actions/order/ActionTypes';
import { addOrder } from '../api/Order';

function* submitOrderSaga(action: SubmitOrder) {
  try {
    yield call(addOrder, action.payload.order);
    yield put(submitOrderSuccess());
  } catch (error) {
    yield put(submitOrderFailed());
  }
}

function* watchForSubmitOrder() {
  yield takeLatest(Actions.SUBMIT_ORDER, submitOrderSaga);
}

export default function* orderSaga() {
  yield all([watchForSubmitOrder()]);
}
