import React, { useState } from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import Toolbar from '../Toolbar';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Toolbar handleDrawer={() => setShow(!show)} />
      <Route
        {...rest}
        render={({ location }) =>
          true ? (
            children
          ) : (
            <Redirect to={{ pathname: '/', state: { from: location } }} />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
