import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from './firebase';
import * as ROUTES from '../constants/routes';
import { StyledForm } from '../styles/StyledForm';

const SignupPage = () => (
    <div>
      <h1>SignUp</h1>
      <SignupForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
  };
  
  

class SignupFormBase extends React.Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = event => {
        const { username, email, password } = this.state;

        this.props.firebase
            .createUserWithEmail(email, password)
            .then(authUser => {
                //TODO: Create user in database
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { username, email, password, error} = this.state;
      
        const isInvalid = password === '' ||
                          email === ''; //|| username === '';
        return(
            <div>
                <StyledForm onSubmit={this.handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.handleInput}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={this.handleInput}
                    />
                    <button disabled={isInvalid} className="btn" type="submit">Sign Up</button>
                    {error && <p>{error.message}</p>}
                </StyledForm> 
            </div>
        );
    }
}

const SignupLink = () => (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignupForm = withRouter(withFirebase(SignupFormBase));
export default SignupPage;
export { SignupForm, SignupLink };