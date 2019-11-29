
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import decoded from 'jwt-decode';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import PrivateRoute from "./components/common/PrivateRoute";

import AdminLayout from "./layouts/Admin/Admin.jsx";
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
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/" exact component={Home} />
        <PrivateRoute path="/admin" component={AdminLayout} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
