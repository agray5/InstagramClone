import React, { Component } from 'react';
import firebase from 'firebase';
import { StyledForm } from '../styles/StyledForm';

class SignupPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((err) => {
            console.log(`${err.code}: ${err.message}`)                                                
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <StyledForm onSubmit={this.handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleInput}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.handleInput}
                    />
                    <button className="btn" type="submit">Login</button>
                </StyledForm> 
            </div>
        );
    }
}

export default SignupPage