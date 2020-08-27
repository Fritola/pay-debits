import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../Screens/Home'
import Login from '../Screens/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Login" component={Login} />
  </Switch>
);

export default Routes;
