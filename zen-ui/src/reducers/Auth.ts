import * as Actions from '../actions/auth/ActionConstants';
import { AuthAction } from '../actions/auth/ActionTypes';
import initialState from '../initial-state';
import { Auth } from '../types/Auth';

const authReducer = (
  state: Auth = initialState.auth,
  action: AuthAction
): Auth => {
  switch (action.type) {
    case Actions.AUTHENTICATE_EMPLOYEE:
      return {
        ...state,
        failed: { status: false },
        validating: true
      };
    case Actions.AUTHENTICATE_EMPLOYEE_FAILED:
      return {
        ...state,
        failed: { status: true, message: action.payload.message },
        validating: false
      };
    case Actions.AUTHENTICATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        validating: false,
        authUser: action.payload.authUser
      };
    default:
      return state;
  }
};

export default authReducer;
