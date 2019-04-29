import * as React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

interface IProps {}

interface IState {
  email?: string;
  password?: string;
  error?: Error;
}

class SignInForm extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const email = this.state.email;
    const password = this.state.password;
    const error = this.state.error;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInLink = () => (
  <p>
    Want to login? <Link to={ROUTES.SIGNIN}>Sign In</Link>
  </p>
);

export default SignInPage;

export { SignInForm, SignInLink };
