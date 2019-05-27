import axios from 'axios';
import { ZEN_AUTH_TOKEN } from '../constants/ZenConstants';
import { AuthPayload, AuthResponse, AuthUser } from '../types/Auth';

const LOGIN_URL = `/api/auth/signin`;
const GET_CURRENT_EMPLOYEE_URL = `/api/employees/current`;

export const getAuthToken = async (
  payload: AuthPayload
): Promise<AuthResponse> => {
  const response = await axios.post(LOGIN_URL, payload);
  return response.data;
};

export const getCurrentEmployee = async (): Promise<AuthUser> => {
  if (localStorage.getItem(ZEN_AUTH_TOKEN)) {
    const response = await axios.get(GET_CURRENT_EMPLOYEE_URL, {
      headers: {
        'zen-auth-token': `token:${localStorage.getItem(ZEN_AUTH_TOKEN)}`
      }
    });
    return response.data;
  } else {
    return Promise.reject('No access token set. Please signin');
  }
};
