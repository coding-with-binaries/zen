import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { TOGGLE_NAV_DRAWER, ToggleNavDrawer } from '../actions/NavDrawer';
import auth from './Auth';
import clientState from './Client';
import orders from './Order';

const navDrawerReducer = (
  state: boolean = false,
  action: ToggleNavDrawer
): boolean => {
  switch (action.type) {
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
    orders
  });

export default rootReducer;
