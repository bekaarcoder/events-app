import React from "react";

const EventDetailSidebar = () => {
  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-header bg-info text-light text-center">
          2 People Going
        </div>
        <div className="card-body" style={{ padding: 0 }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <img
                src="http://pipsum.com/40x40.jpg"
                alt="fkimg"
                className="rounded-circle"
              />
              <span className="ml-2 font-weight-bold">Burce Wayne</span>
            </li>
            <li className="list-group-item">
              <img
                src="http://pipsum.com/40x40.jpg"
                alt="fkimg"
                className="rounded-circle"
              />
              <span className="ml-2 font-weight-bold">Barry Allen</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventDetailSidebar;
