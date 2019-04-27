import * as React from "react";
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGNIN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGNOUT}>Sign Out</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;