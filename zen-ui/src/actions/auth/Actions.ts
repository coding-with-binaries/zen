import { AuthPayload, AuthUser } from '../../types/Auth';
import * as Actions from './ActionConstants';
import {
  AuthenticateEmployee,
  AuthenticateEmployeeFailed,
  AuthenticateEmployeeSuccess,
  GetCurrentEmployee,
  GetCurrentEmployeeFailed,
  GetCurrentEmployeeSuccess
} from './ActionTypes';

export const authenticateEmployee = (
  authPayload: AuthPayload
): AuthenticateEmployee => ({
  type: Actions.AUTHENTICATE_EMPLOYEE,
  payload: { authPayload }
});

export const authenticateEmployeeFailed = (
  message: string
): AuthenticateEmployeeFailed => ({
  type: Actions.AUTHENTICATE_EMPLOYEE_FAILED,
  payload: { message }
});

export const authenticateEmployeeSuccess = (
  authUser: AuthUser
): AuthenticateEmployeeSuccess => ({
  type: Actions.AUTHENTICATE_EMPLOYEE_SUCCESS,
  payload: { authUser }
});

export const getCurrentEmployee = (): GetCurrentEmployee => ({
  type: Actions.GET_CURRENT_EMPLOYEE
});

export const getCurrentEmployeeFailed = (
  message: string
): GetCurrentEmployeeFailed => ({
  type: Actions.GET_CURRENT_EMPLOYEE_FAILED,
  payload: { message }
});

export const getCurrentEmployeeSuccess = (
  authUser: AuthUser
): GetCurrentEmployeeSuccess => ({
  type: Actions.GET_CURRENT_EMPLOYEE_SUCCESS,
  payload: { authUser }
});
