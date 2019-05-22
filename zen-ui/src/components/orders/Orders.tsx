import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useTransition } from 'react-spring';
import { Order } from '../../types/Order';
import { usePrevious } from '../../utils/Hooks';
import OrderAppointment, {
  Props as AppointmentProps
} from './OrderAppointment';
import './Orders.css';

const orders: Order[] = [
  {
    appointmentDate: new Date(),
    client: {
      dateOfBirth: '1995-09-06',
      email: 'coding.with.binaries@gmail.com',
      firstName: 'Varun',
      gender: 'male',
      lastName: 'Sharma',
      phoneNumber: '9686991295',
      zenId: 1
    },
    orderDate: new Date(),
    orderItems: [],
    total: 4000,
    zenId: 1
  },
  {
    appointmentDate: new Date(),
    client: {
      dateOfBirth: '1995-09-06',
      email: 'coding.with.binaries@gmail.com',
      firstName: 'Varun',
      gender: 'male',
      lastName: 'Sharma',
      phoneNumber: '9686991295',
      zenId: 1
    },
    orderDate: new Date(),
    orderItems: [],
    total: 3000,
    zenId: 2
  },
  {
    appointmentDate: new Date(),
    client: {
      dateOfBirth: '1995-09-06',
      email: 'coding.with.binaries@gmail.com',
      firstName: 'Varun',
      gender: 'male',
      lastName: 'Sharma',
      phoneNumber: '9686991295',
      zenId: 1
    },
    orderDate: new Date(),
    orderItems: [],
    total: 4000,
    zenId: 3
  }
];

const Orders: React.FC = () => {
  const [active, setActive] = useState(0);
  const prevActive = usePrevious(active);
  const isNext = prevActive && prevActive > active;
  const onTabClick = (index: number) => () => {
    setActive(index);
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
  const appointments = orders.map(o => ({ style }: AppointmentProps) => (
    <OrderAppointment style={style}>{o.zenId}</OrderAppointment>
  ));
  return (
    <div className="zen-orders">
      <div className="zen-order-tabs">
        {orders.map((o, i) => (
          <div
            key={o.zenId}
            className={`zen-order-tab${i === active ? ' active' : ''}`}
            onClick={onTabClick(i)}
          >
            <span className="order-tab-title">{`Order#${o.zenId} ${
              o.client.firstName
            } ${o.client.lastName}`}</span>
            <FiX size="14" />
          </div>
        ))}
      </div>
      <div className="zen-order-contents">
        {transitions.map(({ item, props, key }) => {
          const Appointment = appointments[item];
          return <Appointment key={key} style={props} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
