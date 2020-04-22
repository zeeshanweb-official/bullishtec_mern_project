import React from 'react';
import './App.css';
import Signup from "./views/signup"
import Signin from "./views/signin"
import Dashboard from "./views/dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/signin">
          <Signin></Signin>
        </Route>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
