import { Client } from '../../types/Client';
import { Order } from '../../types/Order';
import * as Actions from './ActionConstants';

export interface SelectOrderBlueprint {
  type: Actions.SELECT_ORDER_BLUEPRINT;
  payload: {
    index: number;
  };
}

export interface AddOrderBlueprint {
  type: Actions.ADD_ORDER_BLUEPRINT;
  payload: {
    client: Client;
  };
}

export interface DeleteOrderBlueprint {
  type: Actions.DELETE_ORDER_BLUEPRINT;
  payload: {
    index: number;
  };
}

export interface SaveOrderBlueprint {
  type: Actions.SAVE_ORDER_BLUEPRINT;
  payload: {
    index: number;
    blueprint: Order;
  };
}

export interface SubmitOrder {
  type: Actions.SUBMIT_ORDER;
  payload: {
    order: Order;
  };
}

export interface SubmitOrderFailed {
  type: Actions.SUBMIT_ORDER_FAILED;
}

export interface SubmitOrderSuccess {
  type: Actions.SUBMIT_ORDER_SUCCESS;
}

export type OrderAction =
  | SelectOrderBlueprint
  | AddOrderBlueprint
  | DeleteOrderBlueprint
  | SaveOrderBlueprint;
