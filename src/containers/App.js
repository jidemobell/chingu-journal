import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Login from '../components/Login';
import Dashboard from '../components/DashBoard/DashBoard';
import Auth from '../hoc/Auth'
// import withAuthentication from '../containers/withAuthentication';
import "bulma/css/bulma.css";
import './App.css';

export const routerHistory = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={routerHistory}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Auth(Dashboard)} />
        </Switch>
      </Router>
    );
  }
}

export default App;