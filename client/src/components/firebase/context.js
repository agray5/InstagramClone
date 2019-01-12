import React from 'react';

const FirebaseContext = React.createContext(null);

/**
 * Wraps component in Firebase context
 * @param {React.Component} Component 
 */
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;