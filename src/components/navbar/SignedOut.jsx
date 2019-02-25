import React from "react";

const SignedOut = props => {
  return (
    <ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item active">
        <a className="nav-link" onClick={props.signIn}>
          Login
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" onClick={props.register}>
          Register
        </a>
      </li>
    </ul>
  );
};

export default SignedOut;
