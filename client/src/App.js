import React, { Component } from 'react';
import firebase from 'firebase';
import {
    BrowserRouter as Router, Route, Redirect
} from 'react-router-dom';
import HomePage from './components/index';
import LoginPage from './components/login';

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
                    <Route path="/login" component={LoginPage} />
                </div>
            </Router>
        );
    }
}

export default App;