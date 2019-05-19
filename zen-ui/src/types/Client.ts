export interface Client {
  clientId?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
}

export interface Clients {
  fetching: boolean;
  failed: boolean;
  payload: {
    data: Client[];
  };
}
