import React from "react";

const EventDetailSidebar = ({ event }) => {
  return (
    <div className="mt-5">
      <div className="card" style={cardStyle}>
        <div className="card-header bg-info text-light text-center">
          {event.attendees && event.attendees.length} People Going
        </div>
        <div className="card-body" style={{ padding: 0 }}>
          <ul className="list-group list-group-flush">
            {event.attendees &&
              event.attendees.map(attendee => (
                <li className="list-group-item" key={attendee.id}>
                  <img
                    src="http://pipsum.com/40x40.jpg"
                    alt="fkimg"
                    className="rounded-circle"
                  />
                  <span className="ml-2 font-weight-bold">{attendee.name}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  boxShadow: "0px 0px 5px #AAAAAA"
};

export default EventDetailSidebar;
