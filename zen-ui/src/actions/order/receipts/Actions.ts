import { Order } from '../../../types/Order';
import * as Actions from './ActionConstants';
import {
  CloseOrderReceipt,
  FetchOrders,
  FetchOrdersFailed,
  FetchOrdersSuccess,
  SelectOrderReceipt,
  ViewOrderReceipt
} from './ActionTypes';

export const fetchOrders = (): FetchOrders => ({
  type: Actions.FETCH_ORDERS
});

export const fetchOrdersFailed = (): FetchOrdersFailed => ({
  type: Actions.FETCH_ORDERS_FAILED
});

export const fetchOrdersSuccess = (orders: Order[]): FetchOrdersSuccess => ({
  type: Actions.FETCH_ORDERS_SUCCESS,
  payload: { orders }
});

export const selectOrderReceipt = (index: number): SelectOrderReceipt => ({
  type: Actions.SELECT_ORDER_RECEIPT,
  payload: { index }
});

export const viewOrderReceipt = (order: Order): ViewOrderReceipt => ({
  type: Actions.VIEW_ORDER_RECEIPT,
  payload: { order }
});

export const closeOrderReceipt = (index: number): CloseOrderReceipt => ({
  type: Actions.CLOSE_ORDER_RECEIPT,
  payload: { index }
});
