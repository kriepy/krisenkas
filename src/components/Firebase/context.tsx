import * as React from 'react';

const FirebaseContext : React.Context<any> = React.createContext(null);

export interface IFirebaseProps {
  firebase
}

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;