import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignupLink } from './signup';
import { PasswordForgetLink } from './passwordForget';
import { withFirebase } from './firebase';
import * as ROUTES from '../constants/routes';
import { StyledForm } from '../styles/StyledForm';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

const LoginPage = () => (
    <div>
      <h1>SignIn</h1>
      <LoginForm />
      <PasswordForgetLink />
      <SignupLink />
    </div>
  );

class LoginFormBase extends Component {
    constructor(props){
        super(props);

        this.state = INITIAL_STATE;
    }

    handleSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .signInWithEmail(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }
    
    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
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
                    <button disabled={isInvalid} className="btn" type="submit">Login</button>
                    {error && <p>{error.message}</p>}
                </StyledForm>    
            </div>                      
        );
    }
}

const LoginForm = compose(
    withRouter,
    withFirebase,
)(LoginFormBase);
  
export default LoginPage;
  
export { LoginForm };
