import { StoreState } from '../types';

const initialState: StoreState = {
  navDrawer: false,
  auth: {
    validating: false,
    failed: {
      status: false
    },
    authUser: null
  },
  clientState: {
    fetching: true,
    failed: false,
    clients: []
  },
  orderBlueprints: []
};

export default initialState;
