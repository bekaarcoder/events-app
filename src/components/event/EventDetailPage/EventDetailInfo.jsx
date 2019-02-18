import React, { Component } from "react";
import EventDetailMap from "./EventDetailMap";

class EventDetailInfo extends Component {
  state = {
    showMap: false
  };

  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }));
  };

  render() {
    const { event } = this.props;
    return (
      <div className="mt-4">
        <ul className="list-group" style={cardStyle}>
          <li className="list-group-item d-flex">
            <i className="fas fa-info-circle mr-3 my-2" />
            {event.description}
          </li>
          <li className="list-group-item">
            <i className="fas fa-calendar-alt mr-3" />
            {new Date(event.date).toDateString()}
          </li>
          <li className="list-group-item d-flex">
            <i className="fas fa-map-marker-alt mr-3 my-1" />
            {event.venue}
            <button
              className="btn btn-info btn-sm ml-auto"
              onClick={this.showMapToggle}
            >
              Show Map
            </button>
          </li>
          {this.state.showMap && (
            <EventDetailMap
              lat={event.venueLatLng.lat}
              lng={event.venueLatLng.lng}
            />
          )}
        </ul>
      </div>
    );
  }
}

const cardStyle = {
  boxShadow: "0px 0px 5px #AAAAAA",
  borderRadius: "0.25rem"
};

export default EventDetailInfo;
