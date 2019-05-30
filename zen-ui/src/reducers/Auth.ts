import produce from 'immer';
import * as Actions from '../actions/auth/ActionConstants';
import { AuthAction } from '../actions/auth/ActionTypes';
import initialState from '../initial-state';
import { Auth } from '../types/Auth';

const authReducer = (
  state: Auth = initialState.auth,
  action: AuthAction
): Auth => {
  return produce<Auth, Auth>(state, draft => {
    switch (action.type) {
      case Actions.AUTHENTICATE_EMPLOYEE:
        draft.failed.status = false;
        draft.validating = true;
        break;
      case Actions.AUTHENTICATE_EMPLOYEE_FAILED:
        draft.failed = { status: true, message: action.payload.message };
        draft.validating = false;
        break;
      case Actions.AUTHENTICATE_EMPLOYEE_SUCCESS:
        draft.authUser = action.payload.authUser;
        draft.validating = false;
        break;
      // no default
    }
  });
};

export default authReducer;
