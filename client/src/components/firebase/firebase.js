import app from 'firebase/app';
import 'firebase/auth';
import { firebase_config as config } from '../../config'

/**
 * Maps Firebase API
 */
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

    // *** Auth API ***

  createUserWithEmail = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmail = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = password => this.auth.currentUser.updatePassword(password);

    // *** User API ***
  /** Note: gets user info from the firebase database */
  getCurrentUser = () => this.auth.currentUser
  //user = uid => this.db.ref(`users/${uid}`);
  //users = () => this.db.ref('users');
}

export default Firebase;