import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import EventDashboard from '../../components/event/EventDashboard'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <EventDashboard />
      </div>
    );
  }
}

export default App;
