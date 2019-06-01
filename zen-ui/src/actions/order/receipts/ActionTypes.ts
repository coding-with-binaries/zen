import { Order } from '../../../types/Order';
import * as Actions from './ActionConstants';

export interface FetchOrders {
  type: Actions.FETCH_ORDERS;
}

export interface FetchOrdersFailed {
  type: Actions.FETCH_ORDERS_FAILED;
}

export interface FetchOrdersSuccess {
  type: Actions.FETCH_ORDERS_SUCCESS;
  payload: {
    orders: Order[];
  };
}

export interface SelectOrderReceipt {
  type: Actions.SELECT_ORDER_RECEIPT;
  payload: {
    index: number;
  };
}

export interface ViewOrderReceipt {
  type: Actions.VIEW_ORDER_RECEIPT;
  payload: {
    order: Order;
  };
}

export interface CloseOrderReceipt {
  type: Actions.CLOSE_ORDER_RECEIPT;
  payload: {
    index: number;
  };
}

export type OrderReceiptAction =
  | FetchOrders
  | FetchOrdersFailed
  | FetchOrdersSuccess
  | SelectOrderReceipt
  | ViewOrderReceipt
  | CloseOrderReceipt;
