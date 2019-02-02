import React from "react";
import { Link } from "react-router-dom";

const SignedIn = props => {
  return (
    <ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
          <img
            src="http://placeskull.com/30/30"
            alt="user"
            className="mr-1 rounded-circle"
            style={{ width: "30px" }}
          />
          Username
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
        >
          <a className="dropdown-item" href="#">
            <i className="fas fa-calendar-plus mr-2" />
            Create Event
          </a>
          <a className="dropdown-item" href="#">
            <i className="fas fa-calendar-alt mr-2" />
            My Events
          </a>
          <a className="dropdown-item" href="#">
            <i className="fas fa-ethernet mr-2" />
            My Network
          </a>
          <a className="dropdown-item" href="#">
            <i className="fas fa-user-alt mr-2" />
            My Profile
          </a>
          <Link className="dropdown-item" to="/settings">
            <i className="fas fa-cog mr-2" />
            Settings
          </Link>
          <div className="dropdown-divider" />
          <a className="dropdown-item" onClick={props.signOut}>
            <i className="fas fa-sign-out-alt mr-2" />
            Sign Out
          </a>
        </div>
      </li>
    </ul>
  );
};

export default SignedIn;
