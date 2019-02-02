import React from "react";
import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <div className="settingsNav">
      <ul className="list-group">
        <li className="list-group-item bg-secondary text-light">
          <i class="fas fa-user mr-3" />
          <strong>Profile</strong>
        </li>
        <NavLink
          to="/settings/basic"
          className="list-group-item list-group-item-action"
        >
          Basic
        </NavLink>
        <NavLink
          to="/settings/about"
          className="list-group-item list-group-item-action"
        >
          About Me
        </NavLink>
        <NavLink
          to="/settings/photos"
          className="list-group-item list-group-item-action"
        >
          My Photos
        </NavLink>
      </ul>

      <ul className="list-group mt-5">
        <li className="list-group-item bg-secondary text-light">
          <i class="fas fa-cogs mr-3" />
          <strong>Account</strong>
        </li>
        <NavLink
          to="/settings/account"
          className="list-group-item list-group-item-action"
        >
          My Account
        </NavLink>
      </ul>
    </div>
  );
};

export default SettingsNav;
