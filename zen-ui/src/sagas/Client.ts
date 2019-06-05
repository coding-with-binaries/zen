import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/client/ActionConstants';
import {
  addClientFailed,
  addClientSuccess,
  editClientFailed,
  editClientSuccess,
  fetchClientsFailed,
  fetchClientsSuccess
} from '../actions/client/Actions';
import { AddClient, EditClient } from '../actions/client/ActionTypes';
import { addClient, editClient, getAllClients } from '../api/Client';

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

function* addClientSaga(action: AddClient) {
  try {
    const client = yield call(addClient, action.payload.client);
    yield put(addClientSuccess(client));
  } catch (error) {
    yield put(addClientFailed());
  }
}

function* watchForAddClient() {
  yield takeLatest(Actions.ADD_CLIENT, addClientSaga);
}

function* editClientSaga(action: EditClient) {
  try {
    const client = yield call(editClient, action.payload.client);
    yield put(editClientSuccess(client));
  } catch (error) {
    yield put(editClientFailed());
  }
}

function* watchForEditClient() {
  yield takeLatest(Actions.EDIT_CLIENT, editClientSaga);
}

export default function* clientSaga() {
  yield all([watchForGetClients(), watchForAddClient(), watchForEditClient()]);
}
