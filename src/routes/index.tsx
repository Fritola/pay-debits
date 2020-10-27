import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../Screens/Home'
import Login from '../Screens/Login';
import CreateDebit from '../Screens/CreateDebit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/create" component={CreateDebit} />
    <Route path="/home" exact component={Home} />
    <Route path="/" component={Login} />
  </Switch>
);

export default Routes;
