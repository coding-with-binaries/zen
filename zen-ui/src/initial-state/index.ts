import { StoreState } from '../types';

const initialState: StoreState = {
  navDrawer: false,
  clients: {
    fetching: true,
    failed: false,
    payload: {
      data: []
    }
  }
};

export default initialState;
