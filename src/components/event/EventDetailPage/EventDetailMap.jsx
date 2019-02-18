import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = () => <i className="fas fa-map-marker-alt text-danger fa-2x" />;

const EventDetailMap = ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 14;
  return (
    <li className="list-group-item" style={{ height: "300px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCpG6LIJ9NycCS_8YGtZIpRsRIQ0b80UCo" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </li>
  );
};

export default EventDetailMap;
