import produce from 'immer';
import * as Actions from '../actions/order/ActionConstants';
import { OrderAction } from '../actions/order/ActionTypes';
import initialState from '../initial-state';
import { initialBlueprint } from '../initial-state/Order';
import { Orders } from '../types/Order';

const orderReducer = (
  state: Orders = initialState.orderState,
  action: OrderAction
): Orders => {
  return produce<Orders, Orders>(state, draft => {
    let index: number;
    switch (action.type) {
      case Actions.FETCH_ORDERS:
      case Actions.SUBMIT_ORDER:
        draft.fetching = true;
        draft.failed = false;
        break;
      case Actions.FETCH_ORDERS_FAILED:
      case Actions.SUBMIT_ORDER_FAILED:
        draft.fetching = false;
        draft.failed = true;
        break;
      case Actions.FETCH_ORDERS_SUCCESS:
        draft.fetching = false;
        draft.orders = action.payload.orders;
        break;
      case Actions.SUBMIT_ORDER_SUCCESS:
        draft.fetching = false;
        draft.orders.push(action.payload.order);
        break;
      case Actions.SELECT_ORDER_BLUEPRINT:
        draft.blueprint.prevActive = state.blueprint.active;
        draft.blueprint.active = action.payload.index;
        break;
      case Actions.ADD_ORDER_BLUEPRINT:
        draft.blueprint.prevActive = state.blueprint.active;
        draft.blueprint.active = state.blueprint.items.length;
        draft.blueprint.items.push(initialBlueprint(action.payload.client));
        break;
      case Actions.DELETE_ORDER_BLUEPRINT:
        index = action.payload.index;
        const blueprint = state.blueprint.items.length;
        draft.blueprint.prevActive = state.blueprint.active;
        draft.blueprint.active = blueprint > 1 && index > 0 ? index - 1 : 0;
        draft.blueprint.items.splice(index, 1);
        break;
      case Actions.SAVE_ORDER_BLUEPRINT:
        index = action.payload.index;
        draft.blueprint.items[index] = action.payload.blueprint;
        break;
      case Actions.SELECT_ORDER_RECEIPT:
        draft.receipt.prevActive = state.receipt.active;
        draft.receipt.active = action.payload.index;
        break;
      case Actions.VIEW_ORDER_RECEIPT:
        draft.receipt.prevActive = state.receipt.active;
        draft.receipt.active = state.receipt.items.length;
        draft.receipt.items.push(action.payload.order);
        break;
      case Actions.CLOSE_ORDER_RECEIPT:
        index = action.payload.index;
        const receipt = state.receipt.items.length;
        draft.receipt.prevActive = state.receipt.active;
        draft.receipt.active = receipt > 1 && index > 0 ? index - 1 : 0;
        draft.receipt.items.splice(index, 1);
        break;
      // no default
    }
  });
};

export default orderReducer;
