import produce from 'immer';
import * as Actions from '../actions/order/ActionConstants';
import { OrderAction } from '../actions/order/ActionTypes';
import initialState from '../initial-state';
import { initialBlueprint } from '../initial-state/Order';
import { Orders } from '../types/Order';

const orderReducer = (
  state: Orders = initialState.orders,
  action: OrderAction
): Orders => {
  return produce<Orders, Orders>(state, draft => {
    let index: number;
    switch (action.type) {
      case Actions.SELECT_ORDER_BLUEPRINT:
        draft.blueprints.prevActive = state.blueprints.active;
        draft.blueprints.active = action.payload.index;
        break;
      case Actions.ADD_ORDER_BLUEPRINT:
        draft.blueprints.prevActive = state.blueprints.active;
        draft.blueprints.active = state.blueprints.items.length;
        draft.blueprints.items.push(initialBlueprint(action.payload.client));
        break;
      case Actions.DELETE_ORDER_BLUEPRINT:
        index = action.payload.index;
        const blueprints = state.blueprints.items.length;
        draft.blueprints.prevActive = state.blueprints.active;
        draft.blueprints.active = blueprints > 1 && index > 0 ? index - 1 : 0;
        draft.blueprints.items.splice(index, 1);
        break;
      case Actions.SAVE_ORDER_BLUEPRINT:
        index = action.payload.index;
        draft.blueprints.items[index] = action.payload.blueprint;
        break;
      // no default
    }
  });
};

export default orderReducer;
