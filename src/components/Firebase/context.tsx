import * as React from 'react';

const FirebaseContext : React.Context<any> = React.createContext(null);

export interface FirebaseContextInterface {
  firebase
}

export class withFirebase extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return   <FirebaseContext.Consumer>
    {appContext => appContext && (
      <React.Component {...this.props} firebase={appContext.firebase} />
    )}
  </FirebaseContext.Consumer>
  }
}

// export const withFirebase = (props) => (
//   <FirebaseContext.Consumer>
//     {appContext => appContext && (
//       <React.Component {...props} firebase={appContext.firebase} />
//     )}
//   </FirebaseContext.Consumer>
// );

export default FirebaseContext;