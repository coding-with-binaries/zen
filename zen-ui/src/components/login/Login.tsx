import React, { useState } from 'react';
import './Login.css';

interface LoginData {
  email: string;
  password: string;
}
const Login: React.FC = () => {
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
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
