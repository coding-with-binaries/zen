import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthPayload } from '../../types/Auth';
import './Login.css';

type Props = RouteComponentProps;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login: React.FC<Props> = props => {
  const initialPayload: AuthPayload = {
    email: '',
    password: ''
  };

  const login = (values: FormikValues) => {
    console.log(values); //tslint:disable-line
  };

  return (
    <div className="zen-login">
      <div className="left-panel">
        <img
          className="zen-logo"
          src="/assets/images/zen-app-logo.png"
          alt="Zen App Logo"
        />
      </div>
      <div className="right-panel">
        <Formik
          initialValues={initialPayload}
          validationSchema={validationSchema}
          onSubmit={login}
        >
          {({ isValid, errors, touched }) => (
            <Form className="login-form">
              <div className="login-form-title">Login</div>
              <Field
                className={errors.email && touched.email ? 'has-error' : ''}
                type="email"
                name="email"
                placeholder="Email"
              />
              <span className="login-field-error">
                <ErrorMessage name="email" />
              </span>
              <Field
                className={
                  errors.password && touched.password ? 'has-error' : ''
                }
                type="password"
                name="password"
                placeholder="Password"
              />
              <span className="login-field-error">
                <ErrorMessage name="password" />
              </span>
              <button className="submit" type="submit" disabled={!isValid}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default withRouter(Login);
