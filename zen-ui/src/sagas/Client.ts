import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/client/ActionConstants';
import {
  fetchClientsFailed,
  fetchClientsSuccess
} from '../actions/client/Actions';
import { getAllClients } from '../api/Client';

function* getClientsSaga() {
  try {
    const clients = yield call(getAllClients);
    yield put(fetchClientsSuccess(clients));
  } catch (error) {
    yield put(fetchClientsFailed());
  }
}

function* watchForGetClients() {
  yield takeLatest(Actions.FETCH_CLIENTS, getClientsSaga);
}

export default function* clientSaga() {
  yield all([watchForGetClients()]);
}
