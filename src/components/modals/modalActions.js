import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

export const openModal = (modalType, modalProps, modalState) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps,
      modalState
    }
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};
