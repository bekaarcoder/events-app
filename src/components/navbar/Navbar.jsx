import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
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
          </ul>
          <ul className="navbar-nav my-2 my-lg-0">
            <li className="nav-item">
              <button className="btn btn-success mr-2">Create Event</button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign Out
              </a>
            </li>
          </ul>
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
