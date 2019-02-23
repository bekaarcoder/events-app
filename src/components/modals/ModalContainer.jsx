import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import TestModal from "./TestModal";
import { closeModal } from "../modals/modalActions";

Modal.setAppElement(document.getElementById("root"));

class ModalContainer extends Component {
  state = {
    modalIsOpen: false
  };

  hideModal = () => {
    this.props.closeModal();
    this.setState({
      modalIsOpen: false
    });
  };

  /*  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }; */

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("prevState ", prevState);
    console.log("nextProps", nextProps);
    if (nextProps.modal.modalState !== prevState.modalIsOpen) {
      return {
        modalIsOpen: nextProps.modal.modalState
      };
    }
    return null;
  }

  render() {
    console.log(this.props.modal);
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.hideModal}
          contentLabel="Example Modal"
          style={customStyles}
          closeTimeoutMS={500}
        >
          <TestModal hideModal={this.hideModal} />
        </Modal>
      </div>
    );
  }
}

const customStyles = {
  content: {
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(
  mapStateToProps,
  { closeModal }
)(ModalContainer);
