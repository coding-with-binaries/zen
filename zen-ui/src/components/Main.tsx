import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './common/protected-route';
import Home from './home';
import Login from './login';

const Main: React.FC = () => {
  const authenticated = true;
  return (
    <div className="zen">
      <Switch>
        <ProtectedRoute authenticated={true} path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect
          exact={true}
          path="/"
          to={authenticated ? '/home' : '/login'}
        />
      </Switch>
    </div>
  );
};

export default Main;
