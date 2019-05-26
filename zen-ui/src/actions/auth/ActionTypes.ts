import { AuthPayload, AuthUser } from '../../types/Auth';
import * as Actions from './ActionConstants';

export interface AuthenticateEmployee {
  type: Actions.AUTHENTICATE_EMPLOYEE;
  payload: {
    authPayload: AuthPayload;
  };
}

export interface AuthenticateEmployeeFailed {
  type: Actions.AUTHENTICATE_EMPLOYEE_FAILED;
  payload: {
    message: string;
  };
}

export interface AuthenticateEmployeeSuccess {
  type: Actions.AUTHENTICATE_EMPLOYEE_SUCCESS;
  payload: {
    authUser: AuthUser;
  };
}

export interface GetCurrentEmployee {
  type: Actions.GET_CURRENT_EMPLOYEE;
}

export interface GetCurrentEmployeeFailed {
  type: Actions.GET_CURRENT_EMPLOYEE_FAILED;
  payload: {
    message: string;
  };
}

export interface GetCurrentEmployeeSuccess {
  type: Actions.GET_CURRENT_EMPLOYEE_SUCCESS;
  payload: {
    authUser: AuthUser;
  };
}

export type AuthAction =
  | AuthenticateEmployee
  | AuthenticateEmployeeFailed
  | AuthenticateEmployeeSuccess
  | GetCurrentEmployee
  | GetCurrentEmployeeFailed
  | GetCurrentEmployeeSuccess;
