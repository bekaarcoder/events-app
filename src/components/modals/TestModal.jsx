import React from "react";

const TestModal = ({ hideModal }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={hideModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>
          Modal body text goes here. Lets add some more words to check if the
          modal box expand or not. Well it expanded as expected. Now lets add
          some more and see the limit of expansion. Well its expanding even
          more. Lets see if it goes outside the browser window.
        </p>
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" onClick={hideModal}>
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default TestModal;
