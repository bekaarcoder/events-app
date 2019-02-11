import React, { Component } from "react";
import { connect } from "react-redux";
// import cuid from "cuid";
import EventList from "./EventList";
import EventForm from "./EventForm";
import {
  createEvent,
  updateEvent,
  deleteEvent
} from "../../app/actions/eventActions";

class EventDashboard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8">
            <EventList events={events} onEventDelete={this.handleDeleteEvent} />
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

export default connect(
  mapStateToProps,
  actions
)(EventDashboard);
