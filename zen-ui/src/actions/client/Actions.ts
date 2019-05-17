import { Client } from '../../types/Client';
import * as Actions from './ActionConstants';
import {
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
