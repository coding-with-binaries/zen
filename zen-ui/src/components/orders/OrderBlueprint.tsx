import {
  ArrayHelpers,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikProps,
  FormikValues
} from 'formik';
import React, { useRef } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { animated, AnimatedValue, ForwardedProps } from 'react-spring';
import { StoreState } from '../../types';
import { Order, OrderItem } from '../../types/Order';
import './OrderBlueprint.css';

export interface Props {
  style: AnimatedValue<ForwardedProps<React.CSSProperties>>;
  index: number;
}

interface OrderBlueprintValues {
  orderItems: OrderItem[];
}

const OrderBlueprint: React.FC<Props> = props => {
  const { style, index } = props;
  const blueprint: Order = useSelector(
    (state: StoreState) => state.orders.blueprints.items[index]
  );

  const datetime = useRef(
    blueprint.orderDate.toLocaleDateString() +
      ', ' +
      blueprint.orderDate.toLocaleTimeString()
  );

  const total = 0;
  const initialOrderItem: OrderItem = {
    discount: 0,
    quantity: 0,
    product: { zenId: 0, description: '', price: 0, productType: '' }
  };

  const initialValues: OrderBlueprintValues = {
    orderItems: [initialOrderItem]
  };

  const arrayHelpers = useRef<ArrayHelpers>();

  const addProduct = () => {
    if (arrayHelpers.current) {
      arrayHelpers.current.push(initialOrderItem);
    }
  };

  const submitProducts = (values: FormikValues) => {
    console.log(values); // tslint:disable-line
  };

  const renderProducts = (formProps: FormikProps<OrderBlueprintValues>) => (
    helpers: ArrayHelpers
  ) => {
    const { values } = formProps;
    arrayHelpers.current = helpers;
    return (
      <>
        <tbody>
          {values.orderItems.map((p, i) => (
            <tr key={i} className="invoice-product">
              <td>{i + 1}</td>
              <td>
                <Field
                  name={`orderItems.${i}.product.description`}
                  placeholder="Type and Select from List"
                />
              </td>
              <td>
                <Field name={`orderItems.${i}.quantity`} type="number" />
              </td>
              <td>
                <Field
                  name={`orderItems.${i}.product.price`}
                  type="number"
                  step=".01"
                />
              </td>
              <td>
                <Field
                  name={`orderItems.${i}.discount`}
                  type="number"
                  step=".01"
                />
              </td>
              <td>
                <FiTrash2
                  size="18"
                  style={{ cursor: 'pointer' }}
                  onClick={() => helpers.remove(i)}
                />
              </td>
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
    <animated.div className="zen-order-blueprint" style={style}>
      <div className="blueprint-invoice-wrapper">
        <div className="blueprint-invoice">
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
          <div className="invoice-details">
            <span>Registration No: </span>
            <span className="right-aligned">
              Zen Medi Spa and Dental Clinic
            </span>
            <span>Name: </span>
            <span className="right-aligned">Address Lane 1 </span>
            <span>Contact Number: </span>
            <span className="right-aligned">Jammu 123456</span>
          </div>
          <Formik initialValues={initialValues} onSubmit={submitProducts}>
            {formProps => (
              <Form>
                <table className="invoice-products">
                  <thead className="invoice-products-header">
                    <tr>
                      <th>S.No.</th>
                      <th className="description">Description</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th />
                    </tr>
                  </thead>
                  <FieldArray
                    name="orderItems"
                    render={renderProducts(formProps)}
                  />
                </table>
                <div className="product-actions">
                  <button className="add-product" onClick={addProduct}>
                    Add Product
                  </button>
                  <button className="save-order" type="submit">
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </animated.div>
  );
};

export default OrderBlueprint;
