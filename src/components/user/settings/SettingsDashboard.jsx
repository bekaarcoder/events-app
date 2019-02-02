import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import SettingsNav from "./SettingsNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";

const SettingsDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Settings</h1>
          <div className="row">
            <div className="col-md-9">
              <Switch>
                <Redirect exact from="/settings" to="/settings/basic" />
                <Route path="/settings/basic" component={BasicPage} />
                <Route path="/settings/about" component={AboutPage} />
                <Route path="/settings/photos" component={PhotosPage} />
                <Route path="/settings/account" component={AccountPage} />
              </Switch>
            </div>
            <div className="col-md-3">
              <SettingsNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDashboard;
