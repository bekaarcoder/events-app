import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import TextInput from "../../app/common/form/TextInput";
import { login } from "../../app/actions/authActions";

class LoginForm extends Component {
  render() {
    const { handleSubmit, login } = this.props;
    return (
      <form onSubmit={handleSubmit(login)}>
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

export default connect(
  null,
  { login }
)(reduxForm({ form: "loginForm" })(LoginForm));
