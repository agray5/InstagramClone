import React, { Component } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {
    render(){
        return(
            <div>
                This is the home page and your a logged in!
            </div>
        );
    }
}

export default HomePage