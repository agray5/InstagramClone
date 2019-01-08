import React, { Component } from 'react';
import firebase from 'firebase';
import {
    BrowserRouter as Router, Route, Redirect
} from 'react-router-dom';
import HomePage from './components/index';
import LoginPage from './components/login';
import SignUp from './components/signup';
import ProfilePage from './components/profile';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }        

    componentDidMount () {
        firebase.auth().onAuthStateChanged((user) => {
            user ? (
                this.setState({ loggedIn: true })
            ) : (
                this.setState({ loggedIn: false })
            )
        })
        // need some sort of check to see if its first time login
        // can do this by checking in the db if REQUIRED sections are NOT equal to NULL
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={() => (
                        this.state.loggedIn ? (
                                <HomePage />
                            ) : (
                                <Redirect to='/login' />
                            )
                    )}/>
                    {/* We need to change this redirect, we also need a check if its a first time login aswell */}
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/profile" component={ProfilePage} />
                </div>
            </Router>
        );
    }
}

export default App;