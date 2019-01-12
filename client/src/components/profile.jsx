import React, { Component } from 'react';
import firebase from 'firebase';
import axios from 'axios'
import { StyledForm } from '../styles/StyledForm';

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentWillMount() {
        // get the already inputted data and setState
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // save the new data to the database against the uuid provided from authUser
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
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInput}
                    />
                    <input
                        name="dob"
                        type="date"
                        placeholder=""
                        value={this.state.dob}
                        onChange={this.handleInput}
                    />
                    <input type="radio" name="gender" value="male" checked/> Male 
                    <input type="radio" name="gender" value="female"/> Female
                    <input type="radio" name="gender" value="other"/> Other
                </StyledForm> 
            </div>
        );
    }
}

export default ProfilePage