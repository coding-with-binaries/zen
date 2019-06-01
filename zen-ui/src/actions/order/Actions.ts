import { Client } from '../../types/Client';
import { Order } from '../../types/Order';
import * as Actions from './ActionConstants';
import {
  AddOrderBlueprint,
  DeleteOrderBlueprint,
  SaveOrderBlueprint,
  SelectOrderBlueprint,
  SubmitOrder,
  SubmitOrderFailed,
  SubmitOrderSuccess
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

export const submitOrder = (order: Order, index: number): SubmitOrder => ({
  type: Actions.SUBMIT_ORDER,
  payload: { order, index }
});

export const submitOrderFailed = (): SubmitOrderFailed => ({
  type: Actions.SUBMIT_ORDER_FAILED
});

export const submitOrderSuccess = (): SubmitOrderSuccess => ({
  type: Actions.SUBMIT_ORDER_SUCCESS
});
