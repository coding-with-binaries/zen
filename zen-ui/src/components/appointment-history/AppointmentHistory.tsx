import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { viewOrderReceipt } from '../../actions/order/receipts/Actions';
import { StoreState } from '../../types';
import { Order, Orders } from '../../types/Order';
import Spinner from '../common/spinner';
import './AppointmentHistory.css';

const AppointmentHistory: React.FC = () => {
  const orderState = useSelector<StoreState, Orders>(state => state.orderState);
  const dispatch = useDispatch();

  const onOrderClick = (order: Order) => () => {
    dispatch(viewOrderReceipt(order));
  };

  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">Appointment History</span>
        {orderState.fetching ? (
          <Spinner size="sm" />
        ) : (
          orderState.failed && (
            <FiAlertCircle
              size="32"
              fill="honeydew"
              color="39983d"
              title="Failed to fetch client list"
            />
          )
        )}
      </div>
      <div className="zen-appointment-history">
        {orderState.orders.map((o, i) => (
          <div key={i} className="zen-order" onClick={onOrderClick(o)}>
            <span className="order-id">{`Order#${o.zenId}`}</span>
            <div className="order-client">
              <span className="client-name">
                <strong>Name: </strong>
                {`${o.client.firstName} ${o.client.lastName}`}
              </span>
              <span className="client-phone">
                <strong>Phone: </strong>
                {o.client.phoneNumber}
              </span>
            </div>
            <div className="order-dates">
              <span className="appointment-date">
                <strong>Appointment Date: </strong>
                {new Date(o.appointmentDate).toLocaleDateString()}
              </span>
              <span className="order-date">
                <strong>Order Date: </strong>
                {new Date(o.orderDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentHistory;
