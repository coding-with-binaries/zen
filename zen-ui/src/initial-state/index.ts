import clients from '../mocks/Clients';
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
    submitting: false,
    submitFailed: false,
    clients
  },
  orderState: {
    fetching: true,
    failed: false,
    orders: [],
    blueprint: {
      active: 0,
      items: []
    },
    receipt: {
      active: 0,
      items: []
    }
  },
  productState: {
    fetching: true,
    failed: false,
    products: []
  }
};

export default initialState;
