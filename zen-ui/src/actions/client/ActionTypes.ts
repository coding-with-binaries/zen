import { Client } from '../../types/Client';
import * as Actions from './ActionConstants';

export interface FetchClients {
  type: Actions.FETCH_CLIENTS;
}

export interface FetchClientsFailed {
  type: Actions.FETCH_CLIENTS_FAILED;
}

export interface FetchClientsSuccess {
  type: Actions.FETCH_CLIENTS_SUCCESS;
  payload: {
    clients: Client[];
  };
}

export interface AddClient {
  type: Actions.ADD_CLIENT;
  payload: {
    client: Client;
  };
}

export interface AddClientFailed {
  type: Actions.ADD_CLIENT_FAILED;
}

export interface AddClientSuccess {
  type: Actions.ADD_CLIENT_SUCCESS;
  payload: {
    client: Client;
  };
}

export interface EditClient {
  type: Actions.EDIT_CLIENT;
  payload: {
    client: Client;
  };
}

export interface EditClientFailed {
  type: Actions.EDIT_CLIENT_FAILED;
}

export interface EditClientSuccess {
  type: Actions.EDIT_CLIENT_SUCCESS;
  payload: {
    client: Client;
  };
}

export type ClientAction =
  | FetchClients
  | FetchClientsFailed
  | FetchClientsSuccess
  | AddClient
  | AddClientFailed
  | AddClientSuccess
  | EditClient
  | EditClientFailed
  | EditClientSuccess;
