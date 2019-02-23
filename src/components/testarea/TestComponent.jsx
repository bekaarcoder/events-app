import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../modals/modalActions";

import ModalContainer from "../modals/ModalContainer";

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.modalContainerElement = React.createRef();
  }

  showModal = () => {
    console.log("Open Modal");
    // this.modalContainerElement.current.openModal();
    this.props.openModal(
      "simpleModal",
      {
        modalIsOpen: true,
        title: "Simple Modal"
      },
      true
    );
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.showModal}>
          Show Modal
        </button>
        {/* <ModalContainer ref={this.modalContainerElement} /> */}
        <ModalContainer />
      </div>
    );
  }
}

export default connect(
  null,
  { openModal, closeModal }
)(TestComponent);
