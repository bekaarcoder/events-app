import React from "react";
import { connect } from "react-redux";
import EventDetailSidebar from "./EventDetailSidebar";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";
// import EventDetailChat from "./EventDetailChat";

const EventDetails = props => {
  const { event } = props;
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-9">
              <EventDetailHeader event={event} />
              <EventDetailInfo event={event} />
            </div>
            <div className="col-md-3">
              <EventDetailSidebar event={event} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id.toString() == eventId)[0];
  }

  return {
    event
  };
};

export default connect(
  mapStateToProps,
  {}
)(EventDetails);
