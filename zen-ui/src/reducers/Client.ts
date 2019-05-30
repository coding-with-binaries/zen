import produce from 'immer';
import * as Actions from '../actions/client/ActionConstants';
import { ClientAction } from '../actions/client/ActionTypes';
import initialState from '../initial-state';
import { Clients } from '../types/Client';

const clientReducer = (
  state: Clients = initialState.clientState,
  action: ClientAction
): Clients => {
  return produce<Clients, Clients>(state, draft => {
    switch (action.type) {
      case Actions.FETCH_CLIENTS:
        draft.failed = false;
        draft.fetching = true;
        break;
      case Actions.FETCH_CLIENTS_FAILED:
        draft.failed = true;
        draft.fetching = false;
        break;
      case Actions.FETCH_CLIENTS_SUCCESS:
        draft.fetching = false;
        draft.clients = action.payload.clients;
        break;
      // no default
    }
  });
};

export default clientReducer;
