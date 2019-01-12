import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuthentication } from './components/session';

import HomePage from './components/home';
import LoginPage from './components/login';
import SignUp from './components/signup';
import ProfilePage from './components/profile';
import LandingPage from './components/landing';
import PasswordForgetPage from './components/passwordForget';

import * as ROUTES from './constants/routes';


const App = () => (
    <Router>
        <div>
            <Route exact path={ROUTES.LANDING} component={LandingPage}/>
            <Route exact path={ROUTES.LOGIN}   component={LoginPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
            <Route exact path={ROUTES.PROFILE} component={ProfilePage} />
            <Route exact path={ROUTES.HOME}    component={HomePage} />
            <Route exact path={ROUTES.PASSWORD_FORGET}    component={PasswordForgetPage} />
        </div>
    </Router>
);

export default withAuthentication(App);