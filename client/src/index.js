
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";

import AdminLayout from "./layouts/Admin/Admin.jsx";
import RTLLayout from "./layouts/RTL/RTL.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from './components/Home.jsx'
import Header from './components/Navbars/Header.jsx'

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div>
      <Header />
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
