import * as React from 'react';

import { withFirebase, FirebaseContextInterface } from '../Firebase';

// const SignOutButton = ({ firebaseContext }: { firebaseContext?: FirebaseContextInterface }) => <div>Hoi</div>

class SignOutButton extends React.Component {
  render() {
    return <h1>Hi</h1>
  }
}
  // { return firebaseContext && (
  //   <button type="button" onClick={firebaseContext.firebase.doSignOut}>
  //   Sign Out
  // </button>

  // );
  // }

export default withFirebase(SignOutButton);