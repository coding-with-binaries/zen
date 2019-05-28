import { Client } from '../../types/Client';
import { Order } from '../../types/Order';
import * as Actions from './ActionConstants';
import {
  AddOrderBlueprint,
  DeleteOrderBlueprint,
  SaveOrderBlueprint,
  SelectOrderBlueprint
} from './ActionTypes';

export const selectOrderBlueprint = (index: number): SelectOrderBlueprint => ({
  type: Actions.SELECT_ORDER_BLUEPRINT,
  payload: { index }
});

export const addOrderBlueprint = (client: Client): AddOrderBlueprint => ({
  type: Actions.ADD_ORDER_BLUEPRINT,
  payload: { client }
});

export const deleteOrderBlueprint = (index: number): DeleteOrderBlueprint => ({
  type: Actions.DELETE_ORDER_BLUEPRINT,
  payload: { index }
});

export const saveOrderBlueprint = (
  index: number,
  blueprint: Order
): SaveOrderBlueprint => ({
  type: Actions.SAVE_ORDER_BLUEPRINT,
  payload: { index, blueprint }
});
