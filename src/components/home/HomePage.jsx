import React from "react";

const HomePage = props => {
  return (
    <div className="container-fluid vh-100" style={homePageStyle}>
      <div className="row h-100 justify-content-center align-items-center">
        <div
          className="col-md-12 text-center text-light"
          style={{ marginTop: "-5rem" }}
        >
          <h1 className="display-1">Happenings</h1>
          <h2 className="display-4">
            Find events around yourself or create one
          </h2>
          <button
            className="btn btn-lg btn-outline-light mt-2"
            onClick={() => props.history.push("/events")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const homePageStyle = {
  backgroundImage:
    "linear-gradient(135deg, rgb(24, 42, 115) 0%, rgb(33, 138, 174) 69%, rgb(32, 167, 172) 89%)"
};

export default HomePage;
