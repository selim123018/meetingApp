import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './auth';
var auth=isAuthenticated();
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
      render={props =>
        auth === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  export default ProtectedRoute;