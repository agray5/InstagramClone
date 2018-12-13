import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
import { firebase_config } from './config'

//Initialize firebase
firebase.initializeApp(firebase_config);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();