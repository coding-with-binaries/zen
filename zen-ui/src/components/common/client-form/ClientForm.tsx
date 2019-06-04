import { Field, Form, Formik, FormikActions } from 'formik';
import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import * as Yup from 'yup';
import { Client } from '../../../types/Client';
import { ZenInput, ZenRadioGroup } from '../custom-inputs';
import Spinner from '../spinner';
import './ClientForm.css';

interface Props {
  initialValues: Client;
  resetable?: boolean;
  cancelable?: boolean;
  submitting?: boolean;
  failed?: boolean;
  onCancel?: () => void;
  onSubmit: (values: Client, actions: FormikActions<Client>) => void;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required'),
  gender: Yup.string()
    .oneOf(['male', 'female'])
    .required('Gender is required'),
  phoneNumber: Yup.number()
    .typeError('Phone number should be a number')
    .required('Phone Number is required')
});

const radioOptions = [
  {
    id: 'male',
    value: 'male',
    label: 'Male'
  },
  {
    id: 'female',
    value: 'female',
    label: 'Female'
  }
];

const ClientForm: React.FC<Props> = props => {
  const {
    initialValues,
    resetable,
    cancelable,
    submitting,
    failed,
    onCancel,
    onSubmit
  } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isValid, errors, touched }) => (
        <Form className="zen-client-form">
          <Field
            className={errors.email && touched.email ? 'has-error' : ''}
            type="email"
            name="email"
            placeholder="Enter Email"
            label="Email"
            component={ZenInput}
          />
          <Field
            className={errors.firstName && touched.firstName ? 'has-error' : ''}
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            label="First Name"
            component={ZenInput}
          />
          <Field
            className={errors.lastName && touched.lastName ? 'has-error' : ''}
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            label="Last Name"
            component={ZenInput}
          />
          <Field
            className={
              errors.dateOfBirth && touched.dateOfBirth ? 'has-error' : ''
            }
            type="date"
            name="dateOfBirth"
            label="Date of Birth"
            component={ZenInput}
          />
          <Field
            className={errors.gender && touched.gender ? 'has-error' : ''}
            name="gender"
            label="Gender"
            component={ZenRadioGroup}
            options={radioOptions}
          />
          <Field
            className={
              errors.phoneNumber && touched.phoneNumber ? 'has-error' : ''
            }
            type="phone"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            label="Phone No."
            component={ZenInput}
          />
          <div className="form-buttons">
            <button
              className="submit-client"
              type="submit"
              disabled={!isValid || submitting}
            >
              {submitting ? (
                <Spinner size="sm" />
              ) : failed ? (
                <>
                  <FiAlertCircle
                    size="32"
                    fill="honeydew"
                    color="39983d"
                    title="Failed to add client"
                  />
                  Retry
                </>
              ) : (
                'Submit'
              )}
            </button>
            {resetable && (
              <button className="reset-client" type="reset">
                Reset
              </button>
            )}
            {cancelable && (
              <button className="reset-client" onClick={onCancel}>
                Cancel
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ClientForm;
