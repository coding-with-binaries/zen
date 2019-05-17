import initialState from '../initial-state';
import { Clients } from '../types/Client';

const clientReducer = (
  state: Clients = initialState.clients,
  action: any
): Clients => {
  switch (action.type) {
    default:
      return state;
  }
};

export default clientReducer;
