import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './Login.css';

interface LoginData {
  email: string;
  password: string;
}

type Props = RouteComponentProps;

const Login: React.FC<Props> = props => {
  const { history } = props;
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setLoginData(prevLoginData => ({
      ...prevLoginData,
      [e.target.name]: e.target.value
    }));
  };

  const login = () => history.push('/home');

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
        <div className="login-form">
          <div className="login-form-title">Login</div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={onFormChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={onFormChange}
          />
          <button className="submit" type="submit" onClick={login}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
