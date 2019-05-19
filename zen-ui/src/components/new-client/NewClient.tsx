import { Field, Form, Formik, FormikActions, FormikValues } from 'formik';
import React, { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import * as Yup from 'yup';
import { addClient } from '../../api/Client';
import { Client } from '../../types/Client';
import { ZenInput, ZenRadioGroup } from '../common/custom-inputs';
import Spinner from '../common/spinner';
import './NewClient.css';

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
  phoneNumber: Yup.number().required('Phone Number is required')
});

const NewClient: React.FC = () => {
  const initialClient = {
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'male',
    phoneNumber: ''
  };

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

  const [status, setStatus] = useState({ submitting: false, failed: false });

  const submitClientData = (
    values: FormikValues,
    actions: FormikActions<Client>
  ) => {
    setStatus({ submitting: true, failed: false });
    addClient(values as Client)
      .then(res => {
        setStatus({ submitting: false, failed: false });
        actions.resetForm();
      })
      .catch(err => {
        setStatus({ submitting: false, failed: true });
      });
  };

  return (
    <div className="zen-nav-drawer">
      <div className="nav-drawer-header">
        <span className="nav-drawer-title">Add a New Client</span>
      </div>
      <div className="zen-new-client">
        <Formik
          initialValues={initialClient}
          onSubmit={submitClientData}
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
                className={
                  errors.firstName && touched.firstName ? 'has-error' : ''
                }
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                label="First Name"
                component={ZenInput}
              />
              <Field
                className={
                  errors.lastName && touched.lastName ? 'has-error' : ''
                }
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
                  disabled={!isValid || status.submitting}
                >
                  {status.submitting ? (
                    <Spinner size="sm" />
                  ) : status.failed ? (
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
                    'Add'
                  )}
                </button>
                <button className="reset-client" type="reset">
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewClient;
