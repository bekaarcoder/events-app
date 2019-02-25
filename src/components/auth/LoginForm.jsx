import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../app/common/form/TextInput";

class LoginForm extends Component {
  render() {
    return (
      <form>
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
          <button className="btn btn-secondary" onClick={this.props.hideModal}>
            Cancel
          </button>
          <button className="btn btn-success ml-3">Login</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "loginForm" })(LoginForm);
