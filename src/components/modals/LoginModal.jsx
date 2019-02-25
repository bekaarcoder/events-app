import React from "react";
import LoginForm from "../auth/LoginForm";

const LoginModal = ({ hideModal, title }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
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
        <LoginForm hideModal={hideModal} />
      </div>
    </div>
  );
};

export default LoginModal;
