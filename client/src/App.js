import React, { Component } from 'react';
import axios from 'axios';
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
            if(user) {
                axios.get(`/api/user/${user.uid}`).then(res => {
                    res.data // need to setState so we can use these details late, or we will be throwing it away.
                }) // if this fails - we route to X otherwise route to Y
                // need some logic
                this.setState({ loggedIn: true })
            }
            else 
                this.setState({ loggedIn: false })
        })
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