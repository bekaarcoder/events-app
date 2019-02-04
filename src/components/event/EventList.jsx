import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, onEventEdit, onEventDelete } = this.props;
    return (
      <div>
        {events &&
          events.map(event => (
            <EventListItem
              key={event.id}
              event={event}
              onEventEdit={onEventEdit}
              onEventDelete={onEventDelete}
            />
          ))}
      </div>
    );
  }
}

export default EventList;
