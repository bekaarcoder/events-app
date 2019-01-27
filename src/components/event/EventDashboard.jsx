import React, { Component } from 'react';
import EventList from './EventList';
import EventForm from './EventForm';

const events = [{
  id: 1,
  title: 'Trip to Amsterdam',
  date: '2019-01-17T11:00:00+00:00',
  category: 'culture',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti consequatur maiores, sed officia vel sint, similique explicabo dolore mollitia beatae accusamus harum voluptatum veritatis debitis, velit suscipit fugit. Similique, accusamus.',
  city: 'UK, London',
  venue: 'Tower of London',
  hostedBy: 'Bob',
  hostPhotoUrl: 'http://unsplash.it/50/50?gravity=center',
  attendees: [{
    id: 1,
    name: 'Bob',
    photoUrl: 'http://unsplash.it/30/30?gravity=center'
  }, {
    id: 2,
    name: 'Joe',
    photoUrl: 'http://unsplash.it/30/30?gravity=center'
  }]
}, {
  id: 2,
  title: 'Trip to Australia',
  date: '2019-01-17T11:00:00+00:00',
  category: 'culture',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti consequatur maiores, sed officia vel sint, similique explicabo dolore mollitia beatae accusamus harum voluptatum veritatis debitis, velit suscipit fugit. Similique, accusamus.',
  city: 'Sydney, Australia',
  venue: 'Tower of Sydney, Australia',
  hostedBy: 'Joe',
  hostPhotoUrl: 'http://unsplash.it/50/50?gravity=center',
  attendees: [{
    id: 1,
    name: 'Bob',
    photoUrl: 'http://unsplash.it/30/30?gravity=center'
  }, {
    id: 2,
    name: 'Joe',
    photoUrl: 'http://unsplash.it/30/30?gravity=center'
  }]
}];

class EventDashboard extends Component {  
 
  state = {
    events: events,
    isOpen: false
  };
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <EventList events={this.state.events} />
          </div>
          <div className="col-md-4">
            <h2 className="mt-3">Create Event</h2>
            <EventForm />
          </div>
        </div>
      </div>
    )
  }
}

export default EventDashboard;