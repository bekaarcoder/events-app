import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

const initialState = {
  modalType: null,
  modalProps: {},
  modalState: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        modalProps: action.payload.modalProps,
        modalType: action.payload.modalType,
        modalState: action.payload.modalState
      };
    case MODAL_CLOSE:
      return initialState;
    default:
      return state;
  }
};
