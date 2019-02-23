import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "./eventReducer";
import modalReducer from "../../components/modals/modalReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modal: modalReducer
});

export default rootReducer;
