import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import TestModal from "./TestModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { closeModal } from "../modals/modalActions";

Modal.setAppElement(document.getElementById("root"));

class ModalContainer extends Component {
  state = {
    modalIsOpen: false
  };

  hideModal = () => {
    console.log(this.props.modal.modalType);
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
    const { modalProps, modalType } = this.props.modal;
    if (!modalType) {
      return null;
    }
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.hideModal}
          contentLabel="Example Modal"
          style={customStyles}
          closeTimeoutMS={500}
        >
          {modalType && modalType === "loginModal" ? (
            <LoginModal hideModal={this.hideModal} title={modalProps.title} />
          ) : (
            <RegisterModal
              hideModal={this.hideModal}
              title={modalProps.title}
            />
          )}
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
