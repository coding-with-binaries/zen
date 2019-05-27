import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Main from './components/Main';

const App: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={Main} />
  </Switch>
);

export default App;
