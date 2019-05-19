import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './NewClient.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required')
});

const NewClient: React.FC = () => {
  const initialClient = {
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: ''
  };

  const submitClientData = (values: FormikValues) => {
    console.log(values); // tslint:disable-line
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
                placeholder="Email"
              />
              <span className="client-field-error">
                <ErrorMessage name="email" />
              </span>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewClient;
