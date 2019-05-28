import React from 'react';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useTransition } from 'react-spring';
import {
  deleteOrderBlueprint,
  selectOrderBlueprint
} from '../../actions/order/Actions';
import { StoreState } from '../../types';
import { Order } from '../../types/Order';
import OrderBlueprint, { Props as BlueprintProps } from './OrderBlueprint';
import './Orders.css';

const Orders: React.FC = () => {
  const active: number = useSelector(
    (state: StoreState) => state.orders.blueprints.active
  );

  const prevActive: number | undefined = useSelector(
    (state: StoreState) => state.orders.blueprints.prevActive
  );

  const isNext = prevActive && prevActive > active;

  const dispatch = useDispatch();

  const onTabClick = (index: number) => () => {
    dispatch(selectOrderBlueprint(index));
  };

  const onCloseTab = (index: number) => () => {
    dispatch(deleteOrderBlueprint(index));
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
    (state: StoreState) => state.orders.blueprints.items
  );

  const blueprints = orders.map(o => ({ style, index }: BlueprintProps) => (
    <OrderBlueprint style={style} index={index} />
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
            const Blueprint = blueprints[item];
            return (
              Blueprint && <Blueprint key={key} style={props} index={item} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
