import axios from 'axios';
import { headers } from '../constants/ZenConstants';
import { AuthPayload, AuthResponse, AuthUser } from '../types/Auth';

const LOGIN_URL = `/api/auth/signin`;
const GET_CURRENT_EMPLOYEE_URL = `/api/employees/current`;

export const getAuthToken = async (
  payload: AuthPayload
): Promise<AuthResponse> => {
  try {
    const response = await axios.post(LOGIN_URL, payload);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCurrentEmployee = async (): Promise<AuthUser> => {
  try {
    const response = await axios.get(GET_CURRENT_EMPLOYEE_URL, {
      headers: headers()
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
