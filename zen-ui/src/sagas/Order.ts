import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchClientsFailed } from '../actions/client/Actions';
import * as Actions from '../actions/order/ActionConstants';
import {
  deleteOrderBlueprint,
  submitOrderFailed,
  submitOrderSuccess
} from '../actions/order/blueprints/Actions';
import { SubmitOrder } from '../actions/order/blueprints/ActionTypes';
import { fetchOrdersSuccess } from '../actions/order/receipts/Actions';
import { addOrder, getAllOrders } from '../api/Order';

function* getOrdersSaga() {
  try {
    const orders = yield call(getAllOrders);
    yield put(fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(fetchClientsFailed());
  }
}

function* watchForGetOrders() {
  yield takeLatest(Actions.FETCH_ORDERS, getOrdersSaga);
}

function* submitOrderSaga(action: SubmitOrder) {
  try {
    const order = yield call(addOrder, action.payload.order);
    yield put(submitOrderSuccess(order));
    yield put(deleteOrderBlueprint(action.payload.index));
  } catch (error) {
    yield put(submitOrderFailed());
  }
}

function* watchForSubmitOrder() {
  yield takeLatest(Actions.SUBMIT_ORDER, submitOrderSaga);
}

export default function* orderSaga() {
  yield all([watchForGetOrders(), watchForSubmitOrder()]);
}
