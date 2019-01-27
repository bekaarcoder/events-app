import React, { Component } from "react";

class EventForm extends Component {
  render() {
    return (
      <div className="card mt-3" style={cardStyle}>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                placeholder="Event Title"
                className="form-control"
                name="title"
              />
            </div>
            <div className="form-group">
              <label>Event Date</label>
              <input
                type="date"
                placeholder="Event Title"
                className="form-control"
                name="date"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="City event is taking place"
                className="form-control"
                name="city"
              />
            </div>
            <div className="form-group">
              <label>Venue</label>
              <input
                type="text"
                placeholder="Enter the venue of the event"
                className="form-control"
                name="venue"
              />
            </div>
            <div className="form-group">
              <label>Hosted By</label>
              <input
                type="text"
                placeholder="Name of the person hosting"
                className="form-control"
                name="host"
              />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
            <button type="cancel" className="btn btn-secondary ml-3">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

const cardStyle = {
  boxShadow: '0px 0px 5px #AAAAAA'
};

export default EventForm;
