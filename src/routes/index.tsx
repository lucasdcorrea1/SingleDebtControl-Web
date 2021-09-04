import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';

import Login from '../containers/Auth/pages/login';
import Expired from '../containers/Expired';
import Dashboard from '../containers/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Login} path="/" />

        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <PrivateRoute exact path="/expired">
          <Expired />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
