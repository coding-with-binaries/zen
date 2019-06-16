import { ArrayHelpers, FieldArray, Form, Formik, FormikProps } from 'formik';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { animated, AnimatedValue, ForwardedProps } from 'react-spring';
import {
  saveOrderBlueprint,
  submitOrder
} from '../../../actions/order/blueprints/Actions';
import { StoreState } from '../../../types';
import { Client } from '../../../types/Client';
import { Order, OrderItem } from '../../../types/Order';
import { Product, Products } from '../../../types/Product';
import { debounce } from '../../../utils/Helpers';
import { ZenField, ZenSearch } from '../../common/custom-inputs';
import './OrderBlueprint.css';

export interface Props {
  style: AnimatedValue<ForwardedProps<React.CSSProperties>>;
  index: number;
  client: Client;
}

interface OrderBlueprintValues {
  appointmentDate: string;
  orderItems: OrderItem[];
}

const OrderBlueprint: React.FC<Props> = (props, ref) => {
  const { style, index, client } = props;

  const blueprint = useSelector<StoreState, Order>(
    state => state.orderState.blueprint.items[index]
  );

  const productState = useSelector<StoreState, Products>(
    state => state.productState
  );

  const [filteredProducts, setFilteredProducts] = useState(
    productState.products
  );
  const dropdownItems = filteredProducts.map(p => ({
    id: p.zenId!,
    value: p.description
  }));

  const datetime = useRef(
    new Date(blueprint.orderDate).toLocaleDateString() +
      ', ' +
      new Date(blueprint.orderDate).toLocaleTimeString()
  );

  const [total, setTotal] = useState(blueprint.total);
  const initialOrderItem: OrderItem = {
    discount: 0,
    quantity: 0,
    product: { description: '', price: 0, productType: 'undefined' }
  };

  const initialValues: OrderBlueprintValues = {
    appointmentDate: new Date(blueprint.appointmentDate)
      .toISOString()
      .substring(0, 16),
    orderItems: blueprint.orderItems
  };

  const valuesRef = useRef(initialValues);
  const arrayHelpersRef = useRef<ArrayHelpers>();
  const setFieldValueRef = useRef<(field: string, value: any) => void>();
  const debouncedChangeRef = useRef(debounce(() => onOrderItemChange(), 100));

  const dispatch = useDispatch();

  const addProduct = () => {
    if (arrayHelpersRef.current) {
      arrayHelpersRef.current.push(initialOrderItem);
    }
  };

  useImperativeHandle(ref, () => ({
    saveOrderBlueprint: () => {
      const order: Order = {
        appointmentDate: new Date(valuesRef.current.appointmentDate).getTime(),
        client,
        orderDate: blueprint.orderDate,
        orderItems: valuesRef.current.orderItems,
        total
      };
      dispatch(saveOrderBlueprint(index, order));
    }
  }));

  const submitProducts = (values: OrderBlueprintValues) => {
    const order: Order = {
      appointmentDate: new Date(values.appointmentDate).getTime(),
      client,
      orderDate: blueprint.orderDate,
      orderItems: values.orderItems,
      total
    };
    dispatch(submitOrder(order, index));
  };

  const removeOrderItem = (i: number) => () => {
    if (arrayHelpersRef.current) {
      arrayHelpersRef.current.remove(i);
      debouncedChangeRef.current();
    }
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredProducts(
      productState.products.filter(p =>
        p.description.toLowerCase().includes(e.target.value)
      )
    );
  };

  const onProductClick = (i: number) => (id: string | number) => {
    const selectedProduct = productState.products.find(
      p => p.zenId === id
    ) as Product;
    if (setFieldValueRef.current) {
      setFieldValueRef.current(`orderItems.${i}.product`, {
        ...selectedProduct
      });
    }
  };

  const onOrderItemChange = () => {
    const items = valuesRef.current.orderItems;
    let sum = 0;
    items.forEach(item => {
      sum = sum + (item.product!.price * item.quantity - item.discount);
    });
    setTotal(sum);
  };

  const renderProducts = (formProps: FormikProps<OrderBlueprintValues>) => (
    arrayHelpers: ArrayHelpers
  ) => {
    const { values, setFieldValue } = formProps;
    valuesRef.current = values;
    arrayHelpersRef.current = arrayHelpers;
    setFieldValueRef.current = setFieldValue;
    return (
      <>
        <tbody>
          {values.orderItems.map((p, i) => (
            <tr key={i} className="invoice-product">
              <td>{i + 1}</td>
              <td>
                <ZenSearch
                  visible={dropdownItems.length > 0}
                  items={dropdownItems}
                  onItemClick={onProductClick(i)}
                  name={`orderItems.${i}.product.description`}
                  placeholder="Type and Select from List"
                  autoComplete="off"
                  onChange={onDescriptionChange}
                />
              </td>
              <td>
                <ZenField
                  name={`orderItems.${i}.quantity`}
                  type="number"
                  onChange={debouncedChangeRef.current}
                />
              </td>
              <td>
                <ZenField
                  name={`orderItems.${i}.product.price`}
                  type="number"
                  step=".01"
                  onChange={debouncedChangeRef.current}
                />
              </td>
              <td>
                <ZenField
                  name={`orderItems.${i}.discount`}
                  type="number"
                  step=".01"
                  onChange={debouncedChangeRef.current}
                />
              </td>
              <td>
                <FiTrash2
                  size="18"
                  style={{ cursor: 'pointer' }}
                  onClick={removeOrderItem(i)}
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
        <Formik initialValues={initialValues} onSubmit={submitProducts}>
          {formProps => {
            return (
              <Form>
                {productState.fetching ? null : productState.failed ? null : (
                  <div className="blueprint-invoice">
                    <div className="invoice-header">
                      <div className="invoice-dates">
                        <span className="invoice-receipt-date">
                          Receipt Date: {datetime.current}
                        </span>
                        <div className="invoice-appointment-date">
                          Appointment Date:{' '}
                          <ZenField
                            name="appointmentDate"
                            type="datetime-local"
                          />
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
                      <span>
                        Name: {`${client.firstName} ${client.lastName}`}
                      </span>
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
                          <th />
                        </tr>
                      </thead>
                      <FieldArray
                        name="orderItems"
                        render={renderProducts(formProps)}
                      />
                    </table>
                    <div className="product-actions">
                      <button
                        className="add-product"
                        type="button"
                        onClick={addProduct}
                      >
                        Add Product
                      </button>
                      <button className="save-order" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </animated.div>
  );
};

export default forwardRef(OrderBlueprint);
