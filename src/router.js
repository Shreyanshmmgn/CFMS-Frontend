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
import ShowData from "./RegistrationForm/showdata";
import MainHomePage from "./Mainhomepage/Mainhomepage";
import AcceptInvite from "./Mainhomepage/AcceptInvite";
const AllRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/api/verified">
          <Verified />
        </Route>
        <Route exact path="/api/Login">
          <Login />
        </Route>
        <Route exact path="/api/Signup">
          <Signup />
        </Route>
        <Route exact path="/api/activate/user/:id">
          <Verified />
        </Route>
        <Route exact path="/api/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route exact path="/api/registrationForm">
          <RegistrationForm />
        </Route>
        <Route exact path="/api/changePassword/:email">
          <ChangePassword />
        </Route>
        <Route exact path="/api/showdata">
          <ShowData />
        </Route>
        <Route exact path="/api/dashboard">
          <MainHomePage />
        </Route>
        <Route exact path="/api/protected">
          <ForgotPassword />
        </Route>
        <Route exact path="/api/acceptInvite/:uid">
          <AcceptInvite />
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
