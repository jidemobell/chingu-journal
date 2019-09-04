import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Login from "../components/Login";
import Dashboard from "../components/DashBoard/DashBoard";
import ProtectedRoute from "../hoc/Auth";

import "bulma/css/bulma.css";
import "./App.css";

export const routerHistory = createBrowserHistory();

function App() {
  return (
      <Router history={routerHistory}>
        <Switch>
          <Route exact path="/"  component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;
