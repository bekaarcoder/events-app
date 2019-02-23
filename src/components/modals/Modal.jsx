import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div>
      <h1>Hello from the modal</h1>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;
