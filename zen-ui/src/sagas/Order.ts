import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/order/ActionConstants';
import {
  deleteOrderBlueprint,
  submitOrderFailed,
  submitOrderSuccess
} from '../actions/order/Actions';
import { SubmitOrder } from '../actions/order/ActionTypes';
import { addOrder } from '../api/Order';

function* submitOrderSaga(action: SubmitOrder) {
  try {
    yield call(addOrder, action.payload.order);
    yield put(submitOrderSuccess());
    yield put(deleteOrderBlueprint(action.payload.index));
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
