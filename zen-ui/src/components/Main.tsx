import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from './login';

const Main: React.FC = () => {
  return (
    <div className="zen">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default Main;
