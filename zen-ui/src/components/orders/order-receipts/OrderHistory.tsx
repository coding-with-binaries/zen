import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useTransition } from 'react-spring';
import {
  closeOrderReceipt,
  fetchOrders,
  selectOrderReceipt
} from '../../../actions/order/receipts/Actions';
import { StoreState } from '../../../types';
import { Order } from '../../../types/Order';
import '../Orders.css';
import OrderReceipt, { Props as ReceiptProps } from './OrderReceipt';

const OrderHistory: React.FC = () => {
  const active: number = useSelector(
    (state: StoreState) => state.orderState.receipt.active
  );

  const prevActive: number | undefined = useSelector(
    (state: StoreState) => state.orderState.receipt.prevActive
  );

  const isNext = prevActive && prevActive > active;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const onTabClick = (index: number) => () => {
    dispatch(selectOrderReceipt(index));
  };

  const onCloseTab = (index: number) => () => {
    dispatch(closeOrderReceipt(index));
  };

  const transitions = useTransition(active, p => p, {
    from:
      prevActive !== undefined
        ? {
            opacity: 0,
            transform: `translate3d(${isNext ? '-' : ''}100%,0,0)`
          }
        : {},
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: {
      opacity: 0,
      transform: `translate3d(${isNext ? '' : '-'}100%,0,0)`
    }
  });

  const orders: Order[] = useSelector(
    (state: StoreState) => state.orderState.receipt.items
  );

  const receipts = orders.map(o => ({ style, index }: ReceiptProps) => (
    <OrderReceipt style={style} index={index} />
  ));

  return (
    <div className="zen-orders">
      <div className="zen-order-tabs">
        {orders.map((o, i) => (
          <div
            key={i}
            className={`zen-order-tab${i === active ? ' active' : ''}`}
          >
            <div className="order-tab-container" onClick={onTabClick(i)}>
              <span className="order-tab-title">{`Order#${i + 1} ${
                o.client.firstName
              } ${o.client.lastName}`}</span>
            </div>
            <span className="order-tab-close" onClick={onCloseTab(i)}>
              <FiX size="12" />
            </span>
          </div>
        ))}
      </div>
      {orders && orders.length > 0 && (
        <div className="zen-order-contents">
          {transitions.map(({ item, props, key }) => {
            const Receipt = receipts[item];
            return Receipt && <Receipt key={key} style={props} index={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
