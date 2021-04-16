import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
//*--------------------------------------------------------------------------------------------*

import Home from "./Homepage";
import Login from "./Login-Signup/login";
import Signup from "./Login-Signup/signup";
import Verified from "./Login-Signup/verified";
import Error from "./Error";
import ForgotPassword from "./Login-Signup/forgotPassword";
import RegistrationForm from "./RegistrationForm/registrationForm.js";
import ChangePassword from "./Login-Signup/changePassword";
import Test from "./test";

//*--------------------------------------------------------------------------------------------*

const AllRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Verified">
          <Verified />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route exact path="/activate/user/:id">
          <Verified />
        </Route>
        <Route exact path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route exact path="/registrationForm">
          <RegistrationForm />
        </Route>
        <Route exact path="/changePassword/:email">
          <ChangePassword />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};
//*--------------------------------------------------------------------------------------------*

export default AllRouter;
