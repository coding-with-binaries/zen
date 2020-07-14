import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ZEN_AUTH_TOKEN } from '../constants/ZenConstants';
import Home from './home';

const Main: React.FC = () => {
  const authenticated = localStorage.getItem(ZEN_AUTH_TOKEN) !== null;

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="zen">
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect exact={true} path="/" to="/home" />
      </Switch>
    </div>
  );
};

export default Main;
