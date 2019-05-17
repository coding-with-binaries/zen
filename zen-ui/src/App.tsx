import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';

const App: React.FC = () => <Route path="/" component={Main} />;

export default App;
