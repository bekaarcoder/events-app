import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "../../components/navbar/Navbar";
import HomePage from "../../components/home/HomePage";
import EventDashboard from "../../components/event/EventDashboard";
import EventDetails from "../../components/event/EventDetailPage/EventDetails";
import UserDashboard from "../../components/user/dashboard/UserDashboard";
import UserDetailPage from "../../components/user/userDetails/UserDetailPage";
import SettingsDashboard from "../../components/user/settings/SettingsDashboard";
import EventForm from "../../components/event/EventForm";
import TestComponent from "../../components/testarea/TestComponent";

import { configureStore } from "../store/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>

            <Route
              path="/(.+)"
              render={() => (
                <div>
                  <Navbar />
                  <div style={{ paddingTop: "5rem" }}>
                    <Switch>
                      <Route path="/events" component={EventDashboard} />
                      <Route path="/event/:id" component={EventDetails} />
                      <Route path="/dashboard" component={UserDashboard} />
                      <Route path="/profile/:id" component={UserDetailPage} />
                      <Route path="/settings" component={SettingsDashboard} />
                      <Route path="/createEvent" component={EventForm} />
                      <Route path="/test" component={TestComponent} />
                    </Switch>
                  </div>
                </div>
              )}
            />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
