import * as Actions from '../actions/order/ActionConstants';
import { OrderAction } from '../actions/order/ActionTypes';
import initialState from '../initial-state';
import { initialBlueprint } from '../initial-state/Order';
import { Orders } from '../types/Order';

const orderReducer = (
  state: Orders = initialState.orders,
  action: OrderAction
): Orders => {
  let index: number;
  switch (action.type) {
    case Actions.SELECT_ORDER_BLUEPRINT:
      return {
        ...state,
        blueprints: {
          ...state.blueprints,
          prevActive: state.blueprints.active,
          active: action.payload.index
        }
      };
    case Actions.ADD_ORDER_BLUEPRINT:
      return {
        ...state,
        blueprints: {
          ...state.blueprints,
          prevActive: state.blueprints.active,
          active: state.blueprints.items.length,
          items: [
            ...state.blueprints.items,
            initialBlueprint(action.payload.client)
          ]
        }
      };
    case Actions.DELETE_ORDER_BLUEPRINT:
      index = action.payload.index;
      const blueprints = state.blueprints.items.length;
      return {
        ...state,
        blueprints: {
          ...state.blueprints,
          prevActive: state.blueprints.active,
          active: blueprints > 1 && index > 0 ? index - 1 : 0,
          items: [
            ...state.blueprints.items.slice(0, index),
            ...state.blueprints.items.slice(index + 1)
          ]
        }
      };
    case Actions.SAVE_ORDER_BLUEPRINT:
      index = action.payload.index;
      return {
        ...state,
        blueprints: {
          ...state.blueprints,
          items: [
            ...state.blueprints.items.slice(0, index),
            action.payload.blueprint,
            ...state.blueprints.items.slice(index + 1)
          ]
        }
      };
    default:
      return state;
  }
};

export default orderReducer;
