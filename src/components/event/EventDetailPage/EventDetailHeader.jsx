import React from "react";

const EventDetailHeader = ({ event }) => {
  return (
    <div className="mt-5">
      <div
        className="card bg-dark text-white"
        style={{
          borderRadius: "0.25rem 0.25rem 0 0",
          boxShadow: "0px 0px 5px #AAAAAA"
        }}
      >
        <div style={{ height: "300px", overflow: "hidden" }}>
          <img
            src="http://unsplash.it/1000/500?gravity=center"
            className="card-img"
            alt="headerImage"
            style={headerImageStyle}
          />
          <div style={cardImageOverlay}>
            <h3 className="card-title">{event.title}</h3>
            <p className="card-text">{event.city}</p>
            <p className="card-text lead">Hosted By {event.hostedBy}</p>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{
          borderRadius: "0 0 0.25rem 0.25rem",
          boxShadow: "0px 0px 5px #AAAAAA"
        }}
      >
        <div className="card-body d-flex">
          <button className="btn btn-secondary">Cancel My Place</button>
          <button className="btn btn-success ml-2">Join This Event</button>
          <button className="btn btn-danger ml-auto">Manage Event</button>
        </div>
      </div>
    </div>
  );
};

const headerImageStyle = {
  filter: "brightness(50%)"
};

const cardImageOverlay = {
  position: "absolute",
  bottom: "5%",
  left: "0px",
  padding: "1.25rem"
};

export default EventDetailHeader;
