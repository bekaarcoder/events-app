import React, { Component } from "react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    event: emptyEvent,
    selectedEvent: null
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.selectedEvent);
    console.log(prevState.selectedEvent);
    if (prevState.selectedEvent !== nextProps.selectedEvent) {
      return {
        event: nextProps.selectedEvent || emptyEvent,
        selectedEvent: nextProps.selectedEvent
      };
    }
    return null;
  }

  formSubmit = e => {
    e.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };

  onChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    const { event } = this.state;
    const { handleCancel } = this.props;
    return (
      <div className="card mt-3" style={cardStyle}>
        <div className="card-body">
          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                placeholder="Event Title"
                className="form-control"
                name="title"
                value={event.title}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Event Date</label>
              <input
                type="date"
                placeholder="Event Title"
                className="form-control"
                name="date"
                value={event.date}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="City event is taking place"
                className="form-control"
                name="city"
                value={event.city}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Venue</label>
              <input
                type="text"
                placeholder="Enter the venue of the event"
                className="form-control"
                name="venue"
                value={event.venue}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Hosted By</label>
              <input
                type="text"
                placeholder="Name of the person hosting"
                className="form-control"
                name="hostedBy"
                value={event.hostedBy}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="cancel"
              className="btn btn-secondary ml-3"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const cardStyle = {
  boxShadow: "0px 0px 5px #AAAAAA"
};

export default EventForm;
