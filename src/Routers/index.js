import React, { Component } from 'react';

// Third Party
import { Switch, Route } from "react-router-dom";


// Component
import RoutePath from './RoutePath';
import Login from '../Pages/Login'
import Home from '../Pages/Home';

// Utility

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route>
          <Route exact path={RoutePath.Home} component={Home} />
          <Route path={RoutePath.Login} component={Login} />
        </Route>
      </Switch>
    )
  }
}

export default Router;