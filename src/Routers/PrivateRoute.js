import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import RoutePath from './RoutePath';


const isAuthenticated = (props) => {

}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (

    <Route {...rest} render={props => (
      isAuthenticated() ?
        <Component {...props} />
        : <Redirect to={RoutePath.Home} />
    )} />
  );
};

export default PrivateRoute;