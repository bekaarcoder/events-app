import React from "react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../app/common/form/TextInput";

const RegistrationForm = props => {
  return (
    <form>
      <Field
        name="displayName"
        label="Display Name"
        type="text"
        placeholder="Enter your name"
        component={TextInput}
      />
      <Field
        name="email"
        label="Email Address"
        type="text"
        placeholder="Enter Email Address"
        component={TextInput}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        placeholder="Enter Password"
        component={TextInput}
      />
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-secondary" onClick={props.hideModal}>
          Cancel
        </button>
        <button className="btn btn-success ml-3">Register</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "registrationForm" })(RegistrationForm);
