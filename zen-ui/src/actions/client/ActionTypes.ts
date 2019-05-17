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

export type ClientAction =
  | FetchClients
  | FetchClientsFailed
  | FetchClientsSuccess;
