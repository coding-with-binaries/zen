import React, { useRef } from 'react';
import { animated, AnimatedValue, ForwardedProps } from 'react-spring/web.cjs';
import './OrderDraft.css';

export interface Props {
  style: AnimatedValue<ForwardedProps<React.CSSProperties>>;
}

const OrderDraft: React.FC<Props> = props => {
  const dateNow = new Date();
  const datetime = useRef(
    dateNow.toLocaleDateString() + ', ' + dateNow.toLocaleTimeString()
  );
  return (
    <animated.div className="zen-order-draft" style={props.style}>
      <div className="draft-invoice-wrapper">
        <div className="draft-invoice">
          <div className="invoice-header">
            <div className="invoice-dates">
              <span className="invoice-receipt-date">
                Receipt Date: {datetime.current}
              </span>
              <div className="invoice-appointment-date">
                Appointment Date: <input type="datetime-local" />
              </div>
            </div>
            <div className="invoice-logo">
              <img
                className="invoice-logo-image"
                src="/assets/images/zen-app-logo.png"
                alt="Zen Medi Spa"
              />
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default OrderDraft;
