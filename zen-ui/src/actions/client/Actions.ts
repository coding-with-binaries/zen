import { Client } from '../../types/Client';
import * as Actions from './ActionConstants';
import {
  AddClient,
  AddClientFailed,
  AddClientSuccess,
  EditClient,
  EditClientFailed,
  EditClientSuccess,
  FetchClients,
  FetchClientsFailed,
  FetchClientsSuccess
} from './ActionTypes';

export const fetchClients = (): FetchClients => ({
  type: Actions.FETCH_CLIENTS
});

export const fetchClientsFailed = (): FetchClientsFailed => ({
  type: Actions.FETCH_CLIENTS_FAILED
});

export const fetchClientsSuccess = (
  clients: Client[]
): FetchClientsSuccess => ({
  type: Actions.FETCH_CLIENTS_SUCCESS,
  payload: { clients }
});

export const addClient = (client: Client): AddClient => ({
  type: Actions.ADD_CLIENT,
  payload: { client }
});

export const addClientFailed = (): AddClientFailed => ({
  type: Actions.ADD_CLIENT_FAILED
});

export const addClientSuccess = (client: Client): AddClientSuccess => ({
  type: Actions.ADD_CLIENT_SUCCESS,
  payload: { client }
});

export const editClient = (client: Client): EditClient => ({
  type: Actions.EDIT_CLIENT,
  payload: { client }
});

export const editClientFailed = (): EditClientFailed => ({
  type: Actions.EDIT_CLIENT_FAILED
});

export const editClientSuccess = (client: Client): EditClientSuccess => ({
  type: Actions.EDIT_CLIENT_SUCCESS,
  payload: { client }
});
