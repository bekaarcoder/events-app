import React from "react";
import EventDetailSidebar from "./EventDetailSidebar";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailChat from "./EventDetailChat";

const EventDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-9">
              <EventDetailHeader />
              <EventDetailInfo />
              <EventDetailChat />
            </div>
            <div className="col-md-3">
              <EventDetailSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
