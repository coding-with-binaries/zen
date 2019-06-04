import axios from 'axios';
import { headers } from '../constants/ZenConstants';
import { Client } from '../types/Client';

const CLIENTS_URL = `/api/clients`;
const GET_CLIENT_URL = (id: number) => `${CLIENTS_URL}/${id}`;
const SEARCH_CLIENT_URL = (pattern: string) =>
  `${CLIENTS_URL}/search/${pattern}`;

export const getAllClients = async (): Promise<Client[]> => {
  try {
    const response = await axios.get<Client[]>(CLIENTS_URL, {
      headers: headers()
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getClient = async (id: number): Promise<Client> => {
  try {
    const response = await axios.get<Client>(GET_CLIENT_URL(id), {
      headers: headers()
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addClient = async (client: Client): Promise<Client> => {
  try {
    const response = await axios.post<Client>(CLIENTS_URL, client, {
      headers: headers()
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editClient = async (client: Client): Promise<Client> => {
  try {
    const response = await axios.put<Client>(CLIENTS_URL, client, {
      headers: headers()
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const searchClient = async (pattern: string): Promise<Client[]> => {
  try {
    const response = await axios.get<Client[]>(SEARCH_CLIENT_URL(pattern), {
      headers: headers()
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
