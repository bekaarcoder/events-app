/* global google */
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import cuid from "cuid";
import Script from "react-load-script";
import { createEvent, updateEvent } from "../../app/actions/eventActions";
import TextInput from "../../app/common/form/TextInput";
import TextArea from "../../app/common/form/TextArea";
import SelectInput from "../../app/common/form/SelectInput";
import DateInput from "../../app/common/form/DateInput";
import PlaceInput from "../../app/common/form/PlaceInput";

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({ message: "Event title is required." }),
  category: isRequired({ message: "Please choose a category for the event." }),
  description: composeValidators(
    isRequired({ message: "Please enter description for the event." }),
    hasLengthGreaterThan(5)({
      message: "Description should not be less than 5 characters."
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired({ message: "Event Date is required" })
});

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

  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  };

  handleScriptLoaded = () => {
    this.setState({
      scriptLoaded: true
    });
  };

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("city", selectedCity);
      });
  };

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("venue", selectedVenue);
      });
  };

  onFormSubmit = values => {
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoUrl: "http://unsplash.it/50/50?gravity=center",
        hostedBy: "Jane"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  render() {
    console.log(this.props);
    const { handleSubmit, invalid, submitting, pristine } = this.props;
    return (
      <div className="container mb-5">
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpG6LIJ9NycCS_8YGtZIpRsRIQ0b80UCo&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card mt-3" style={cardStyle}>
              <div className="card-body">
                <h3 className="text-center mb-3">Create Your Event</h3>
                <form onSubmit={handleSubmit(this.onFormSubmit)}>
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
                    options={category}
                    component={SelectInput}
                  />
                  <Field
                    name="description"
                    label="Event Description"
                    type="text"
                    placeholder="Describe your event"
                    rows="3"
                    component={TextArea}
                  />
                  <hr />
                  <h2 className="lead text-info">EVENT LOCATION DETAILS</h2>

                  <Field
                    name="city"
                    label="Event City"
                    type="text"
                    placeholder="Event City"
                    options={{ types: ["(cities)"] }}
                    component={PlaceInput}
                    onSelect={this.handleCitySelect}
                  />

                  {this.state.scriptLoaded && (
                    <Field
                      name="venue"
                      label="Event Venue"
                      type="text"
                      placeholder="Event Venue"
                      options={{
                        types: ["establishment"]
                      }}
                      component={PlaceInput}
                      onSelect={this.handleVenueSelect}
                    />
                  )}
                  <Field
                    name="date"
                    label="Event Date"
                    type="text"
                    placeholder="Event Date and Time"
                    component={DateInput}
                    width="100%"
                  />
                  <div className="d-flex justify-content-between mt-5">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.props.history.goBack}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={invalid || submitting || pristine}
                    >
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
  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id.toString() === eventId)[0];
  }

  return { initialValues: event };
};

const actions = {
  createEvent,
  updateEvent
};

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
