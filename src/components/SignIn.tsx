import * as React from "react";

import * as ROUTES from '../constants/routes';


const SignIn = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
  </div>
);

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {

  }

  onChange = event => {

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

      </form>
    );
  }
}


export default SignIn;