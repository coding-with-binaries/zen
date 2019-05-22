import React from 'react';
import { animated, AnimatedValue, ForwardedProps } from 'react-spring';
import './OrderAppointment.css';

export interface Props {
  style: AnimatedValue<ForwardedProps<React.CSSProperties>>;
}

const OrderAppointment: React.FC<Props> = props => {
  return (
    <animated.div className="zen-order-appointment" style={props.style}>
      <div className="appointment-invoice-wrapper">
        <div className="appointment-invoice" />
      </div>
    </animated.div>
  );
};

export default OrderAppointment;
