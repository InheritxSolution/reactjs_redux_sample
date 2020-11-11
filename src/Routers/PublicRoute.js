import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import RoutePath from './RoutePath'

const isAuthenticated = (props) => {

}

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated(rest) ? <Component {...props} /> : <Redirect to={RoutePath.Home} />)}
  />
);

export default PublicRoute;