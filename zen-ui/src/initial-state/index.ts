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
  orders: {
    blueprints: {
      active: 0,
      items: []
    },
    receipts: []
  },
  productState: {
    fetching: true,
    failed: false,
    products: []
  }
};

export default initialState;
