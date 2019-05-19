import axios from 'axios';
import { Client } from '../types/Client';

const CLIENTS_URL = `/clients`;
const GET_CLIENT_URL = (id: number) => `${CLIENTS_URL}/${id}`;

export const getAllClients = async (): Promise<Client[]> => {
  const response = await axios.get<Client[]>(CLIENTS_URL);
  return response.data;
};

export const getClient = async (id: number): Promise<Client> => {
  const response = await axios.get<Client>(GET_CLIENT_URL(id));
  return response.data;
};

export const addClient = async (client: Client): Promise<Client> => {
  const response = await axios.post<Client>(CLIENTS_URL, client);
  return response.data;
};
