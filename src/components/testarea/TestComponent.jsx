import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

const Marker = () => <i className="fas fa-map-marker-alt text-danger fa-2x" />;

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCpG6LIJ9NycCS_8YGtZIpRsRIQ0b80UCo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(TestComponent);
