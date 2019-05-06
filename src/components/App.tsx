import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";

import LandingPage from "./Landing";
import SignInPage from "./SignIn/index";
import SignOutPage from "./SignOut/index";
import HomePage from "./Home";

import * as ROUTES from "../constants/routes";

import { withAuthentication } from './Session';

const App = () => (
  <Router>
  <div>
    <Navigation/>

    <hr />

    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGNIN} component={SignInPage} />
    <Route path={ROUTES.SIGNOUT} component={SignOutPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
  </div>
</Router>
)

export default withAuthentication(App);