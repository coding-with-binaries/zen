import * as Actions from '../actions/client/ActionConstants';
import { ClientAction } from '../actions/client/ActionTypes';
import initialState from '../initial-state';
import { Clients } from '../types/Client';

const clientReducer = (
  state: Clients = initialState.clients,
  action: ClientAction
): Clients => {
  switch (action.type) {
    case Actions.FETCH_CLIENTS:
      return {
        ...state,
        failed: false,
        fetching: true
      };
    case Actions.FETCH_CLIENTS_FAILED:
      return {
        ...state,
        failed: true,
        fetching: false
      };
    case Actions.FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        payload: {
          data: action.payload.clients
        }
      };
    default:
      return state;
  }
};

export default clientReducer;
