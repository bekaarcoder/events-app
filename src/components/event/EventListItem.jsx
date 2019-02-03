import React, { Component } from "react";
import { Link } from "react-router-dom";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, onEventEdit, onEventDelete } = this.props;
    return (
      <div className="card mt-4" style={cardStyle}>
        <div className="card-header">
          <div className="media">
            <img
              src={event.hostPhotoUrl}
              alt="event"
              className="align-self-start mr-3"
            />
            <div className="media-body">
              <h5 className="mt-0">{event.title}</h5>
              <div className="text-muted">Hosted By {event.hostedBy}</div>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="fas fa-clock" /> {new Date(event.date).toDateString()}{" "}
            | <i className="fas fa-map-marker-alt" /> {event.venue}
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "rgba(0,0,0,.03)" }}
          >
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttendee
                  photoUrl={attendee.photoUrl}
                  key={attendee.id}
                />
              ))}
          </li>
          <li className="list-group-item">
            <p>{event.description}</p>
            <div className="text-right">
              <Link className="btn btn-info" to={`/event/${event.id}`}>
                View Event
              </Link>
              <button
                className="btn btn-danger ml-3"
                onClick={onEventDelete(event.id)}
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

const cardStyle = {
  boxShadow: "0px 0px 5px #AAAAAA"
};

export default EventListItem;
