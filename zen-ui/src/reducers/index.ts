import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { AUTHENTICATE_EMPLOYEE_SUCCESS } from '../actions/auth/ActionConstants';
import { AuthenticateEmployeeSuccess } from '../actions/auth/ActionTypes';
import { TOGGLE_NAV_DRAWER, ToggleNavDrawer } from '../actions/NavDrawer';
import auth from './Auth';
import clientState from './Client';
import orderState from './Order';
import productState from './Product';

const navDrawerReducer = (
  state: boolean = false,
  action: ToggleNavDrawer | AuthenticateEmployeeSuccess
): boolean => {
  switch (action.type) {
    case AUTHENTICATE_EMPLOYEE_SUCCESS:
      return false;
    case TOGGLE_NAV_DRAWER:
      return !state;
    default:
      return state;
  }
};

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    navDrawer: navDrawerReducer,
    clientState,
    auth,
    orderState,
    productState
  });

export default rootReducer;
