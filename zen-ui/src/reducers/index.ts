import { combineReducers } from 'redux';
import { TOGGLE_NAV_DRAWER, ToggleNavDrawer } from '../actions/NavDrawer';
import clientState from './Clients';

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

export default combineReducers({
  navDrawer: navDrawerReducer,
  clientState
});
