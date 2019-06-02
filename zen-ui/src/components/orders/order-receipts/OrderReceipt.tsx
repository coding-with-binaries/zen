import React, { createRef } from 'react';
import { useSelector } from 'react-redux';
import { animated, AnimatedValue, ForwardedProps } from 'react-spring';
import ReactToPrint from 'react-to-print';
import { StoreState } from '../../../types';
import { Order } from '../../../types/Order';
import './OrderReceipt.css';

export interface Props {
  style: AnimatedValue<ForwardedProps<React.CSSProperties>>;
  index: number;
}

const OrderReceipt: React.FC<Props> = props => {
  const { style, index } = props;

  const receipt: Order = useSelector(
    (state: StoreState) => state.orderState.receipt.items[index]
  );

  const printRef = createRef<HTMLDivElement>();
  const { client, orderItems, total, zenId } = receipt;
  const orderDate =
    new Date(receipt.orderDate).toLocaleDateString() +
    ', ' +
    new Date(receipt.orderDate).toLocaleTimeString();

  const appointmentDate =
    new Date(receipt.appointmentDate).toLocaleDateString() +
    ', ' +
    new Date(receipt.appointmentDate).toLocaleTimeString();

  const renderProducts = () => {
    return (
      <>
        <tbody>
          {orderItems.map((p, i) => (
            <tr key={i} className="invoice-product">
              <td>{i + 1}</td>
              <td>{p.product!.description}</td>
              <td>{p.quantity}</td>
              <td>{p.product!.price}</td>
              <td>{p.discount}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3} />
            <td className="order-total" colSpan={3}>
              Total: INR {total}
            </td>
          </tr>
        </tbody>
      </>
    );
  };

  return (
    <animated.div className="zen-order-receipt" style={style}>
      <div className="receipt-invoice-wrapper">
        <div className="receipt-invoice">
          <div className="printable-receipt" ref={printRef}>
            <div className="invoice-header">
              <div className="invoice-dates">
                <span className="invoice-receipt-date">
                  Receipt Date: {orderDate}
                </span>
                <div className="invoice-appointment-date">
                  Appointment Date: {appointmentDate}
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
            <div className="invoice-details">
              <span>Registration No: {zenId}</span>
              <span className="right-aligned">
                Zen Medi Spa and Dental Clinic
              </span>
              <span>Name: {`${client.firstName} ${client.lastName}`}</span>
              <span className="right-aligned">Address Lane 1 </span>
              <span>Contact Number: {client.phoneNumber}</span>
              <span className="right-aligned">Jammu 123456</span>
            </div>
            <table className="invoice-products">
              <thead className="invoice-products-header">
                <tr>
                  <th>S.No.</th>
                  <th className="description">Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Discount</th>
                </tr>
              </thead>
              {renderProducts()}
            </table>
          </div>
          <ReactToPrint
            bodyClass="print"
            trigger={() => (
              <button className="print-receipt">Print Receipt</button>
            )}
            content={() => printRef.current!}
          />
        </div>
      </div>
    </animated.div>
  );
};

export default OrderReceipt;
