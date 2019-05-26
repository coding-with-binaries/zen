import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/auth/ActionConstants';
import {
  authenticateEmployeeSuccess,
  getCurrentEmployeeFailed,
  getCurrentEmployeeSuccess
} from '../actions/auth/Actions';
import { AuthenticateEmployee } from '../actions/auth/ActionTypes';
import { getAuthToken, getCurrentEmployee } from '../api/Employee';
import { ZEN_AUTH_TOKEN } from '../constants/ZenConstants';
import { AuthResponse, AuthUser } from '../types/Auth';

function* getCurrentEmployeeSaga() {
  try {
    const authUser: AuthUser = yield call(getCurrentEmployee);
    yield put(getCurrentEmployeeSuccess(authUser));
  } catch (error) {
    yield put(getCurrentEmployeeFailed(error));
  }
}

function* watchForGetCurrentEmployee() {
  yield takeLatest(Actions.GET_CURRENT_EMPLOYEE, getCurrentEmployeeSaga);
}

function* authenticateEmployeeSaga(action: AuthenticateEmployee) {
  try {
    const authResponse: AuthResponse = yield call(
      getAuthToken,
      action.payload.authPayload
    );
    localStorage.setItem(ZEN_AUTH_TOKEN, authResponse.accessToken);
    const authUser: AuthUser = yield call(getCurrentEmployee);
    yield put(authenticateEmployeeSuccess(authUser));
  } catch (error) {
    // Error
  }
}

function* watchForEmployeeAuthentication() {
  yield takeLatest(Actions.AUTHENTICATE_EMPLOYEE, authenticateEmployeeSaga);
}

export default function* AuthSaga() {
  yield all([watchForGetCurrentEmployee(), watchForEmployeeAuthentication()]);
}
