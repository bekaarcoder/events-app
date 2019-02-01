import React from "react";

const SignedOut = () => {
  return (
    <ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Login
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Register
        </a>
      </li>
    </ul>
  );
};

export default SignedOut;
