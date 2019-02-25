import React from "react";
import RegisterForm from "../auth/RegistrationForm";

const RegisterModal = ({ hideModal, title }) => {
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
        <RegisterForm hideModal={hideModal} />
      </div>
    </div>
  );
};

export default RegisterModal;
