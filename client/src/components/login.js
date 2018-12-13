import React, { Component } from 'react';
import Styled from 'styled-components';

class LoginPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
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
            </StyledForm>                            
        );
    }
}

export default LoginPage;

const StyledForm = Styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    input {
        padding: 6px;
        border-radius: 10px;
        border: 1px solid black;
        display: block;
    }

    input[type="email"] {
        padding:10px;
    }

    input[type="password"] {
        padding:10px;
    }
`
