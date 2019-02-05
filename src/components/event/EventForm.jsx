import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import cuid from "cuid";
import { createEvent, updateEvent } from "../../app/actions/eventActions";
import TextInput from "../../app/common/form/TextInput";

class EventForm extends Component {
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

  render() {
    return (
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card mt-3" style={cardStyle}>
              <div className="card-body">
                <h3 className="text-center mb-3">Create Your Event</h3>
                <form onSubmit={this.formSubmit}>
                  <h3 className="lead text-info">EVENT DETAILS</h3>
                  <Field
                    name="title"
                    label="Event Title"
                    type="text"
                    placeholder="Give your event a name"
                    component={TextInput}
                  />
                  <Field
                    name="category"
                    label="Event Category"
                    type="text"
                    placeholder="What is your event about"
                    component={TextInput}
                  />
                  <Field
                    name="description"
                    label="Event Description"
                    type="text"
                    placeholder="Describe your event"
                    component={TextInput}
                  />
                  <hr />
                  <h2 className="lead text-info">EVENT LOCATION DETAILS</h2>
                  <Field
                    name="city"
                    label="Event City"
                    type="text"
                    placeholder="Event City"
                    component={TextInput}
                  />
                  <Field
                    name="venue"
                    label="Event Venue"
                    type="text"
                    placeholder="Event Venue"
                    component={TextInput}
                  />
                  <Field
                    name="date"
                    label="Event Date"
                    type="text"
                    placeholder="Event Date"
                    component={TextInput}
                  />
                  <div className="d-flex justify-content-between mt-5">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.props.history.goBack}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
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
