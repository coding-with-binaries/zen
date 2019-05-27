import axios from 'axios';
import { ZEN_AUTH_TOKEN } from '../constants/ZenConstants';
import { Client } from '../types/Client';

const CLIENTS_URL = `/api/clients`;
const GET_CLIENT_URL = (id: number) => `${CLIENTS_URL}/${id}`;
const SEARCH_CLIENT_URL = (pattern: string) =>
  `${CLIENTS_URL}/search/${pattern}`;

export const getAllClients = async (): Promise<Client[]> => {
  const response = await axios.get<Client[]>(CLIENTS_URL, {
    headers: {
      'zen-auth-token': `token:${localStorage.getItem(ZEN_AUTH_TOKEN)}`
    }
  });
  return response.data;
};

export const getClient = async (id: number): Promise<Client> => {
  const response = await axios.get<Client>(GET_CLIENT_URL(id), {
    headers: {
      'zen-auth-token': `token:${localStorage.getItem(ZEN_AUTH_TOKEN)}`
    }
  });
  return response.data;
};

export const addClient = async (client: Client): Promise<Client> => {
  const response = await axios.post<Client>(CLIENTS_URL, client, {
    headers: {
      'zen-auth-token': `token:${localStorage.getItem(ZEN_AUTH_TOKEN)}`
    }
  });
  return response.data;
};

export const searchClient = async (pattern: string): Promise<Client[]> => {
  const response = await axios.get<Client[]>(SEARCH_CLIENT_URL(pattern), {
    headers: {
      'zen-auth-token': `token:${localStorage.getItem(ZEN_AUTH_TOKEN)}`
    }
  });
  return response.data;
};
