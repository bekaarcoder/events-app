import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

class Navbar extends Component {
  state = {
    authenticated: false
  };

  render() {
    const { authenticated } = this.state;
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark"
        style={navbarStyle}
      >
        <Link className="navbar-brand" to="/">
          Happenings
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-success ml-2">Create Event</button>
            </li>
          </ul>
          {authenticated ? <SignedIn /> : <SignedOut />}
        </div>
      </nav>
    );
  }
}

const navbarStyle = {
  backgroundImage:
    "linear-gradient(135deg, rgb(24, 42, 115) 0%, rgb(33, 138, 174) 69%, rgb(32, 167, 172) 89%)"
};

export default Navbar;
