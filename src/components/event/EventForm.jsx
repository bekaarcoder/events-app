import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import cuid from "cuid";
import { createEvent, updateEvent } from "../../app/actions/eventActions";
import TextInput from "../../app/common/form/TextInput";

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  /*   componentDidMount() {
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
  } */

  formSubmit = e => {
    e.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint deserunt, voluptas modi dolor vitae omnis consectetur sed tempora illo qui non maiores delectus expedita. Molestiae aperiam soluta minus magni",
        hostPhotoUrl: "http://unsplash.it/50/50?gravity=center"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
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
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card mt-3" style={cardStyle}>
              <div className="card-body">
                <h3 className="text-center mb-3">Create Your Event</h3>
                <form onSubmit={this.formSubmit}>
                  {/* <div className="form-group">
                    <label>Event Title</label>
                    <input
                      type="text"
                      placeholder="Event Title"
                      className="form-control"
                      name="title"
                      value={event.title}
                      onChange={this.onChange}
                    /> 
                  </div> */}
                  <Field
                    name="title"
                    label="Event Title"
                    type="text"
                    placeholder="Event Title"
                    component={TextInput}
                  />
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
                    type="button"
                    className="btn btn-secondary ml-3"
                    onClick={this.props.history.goBack}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const cardStyle = {
  boxShadow: "0px 0px 5px #AAAAAA"
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id.toString() === eventId)[0];
  }

  return { event };
};

const actions = {
  createEvent,
  updateEvent
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "eventForm" })(EventForm));
