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
      case Actions.ADD_CLIENT:
      case Actions.EDIT_CLIENT:
        draft.submitting = true;
        draft.submitFailed = false;
        break;
      case Actions.ADD_CLIENT_FAILED:
      case Actions.EDIT_CLIENT_FAILED:
        draft.submitting = false;
        draft.submitFailed = true;
        break;
      case Actions.ADD_CLIENT_SUCCESS:
        draft.submitting = false;
        draft.clients.push(action.payload.client);
        break;
      case Actions.EDIT_CLIENT_SUCCESS:
        const index = state.clients.findIndex(
          c => c.email === action.payload.client.email
        );
        draft.submitting = false;
        draft.clients[index] = action.payload.client;
        break;
      // no default
    }
  });
};

export default clientReducer;
