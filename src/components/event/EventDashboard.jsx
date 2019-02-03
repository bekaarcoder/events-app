import React, { Component } from "react";
import { connect } from "react-redux";
import cuid from "cuid";
import EventList from "./EventList";
import EventForm from "./EventForm";
import {
  createEvent,
  updateEvent,
  deleteEvent
} from "../../app/actions/eventActions";

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleSelectedEvent = eventSelected => () => {
    this.setState({
      isOpen: true,
      selectedEvent: eventSelected
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  createEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint deserunt, voluptas modi dolor vitae omnis consectetur sed tempora illo qui non maiores delectus expedita. Molestiae aperiam soluta minus magni";
    newEvent.hostPhotoUrl = "http://unsplash.it/50/50?gravity=center";
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <EventList
              onEventEdit={this.handleSelectedEvent}
              events={events}
              onEventDelete={this.handleDeleteEvent}
            />
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-outline-success mt-3"
              onClick={this.handleFormOpen}
            >
              Create Event
            </button>
            {isOpen && (
              <EventForm
                handleCancel={this.handleCancel}
                createEvent={this.createEvent}
                selectedEvent={selectedEvent}
                updateEvent={this.handleUpdateEvent}
              />
            )}
          </div>
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
