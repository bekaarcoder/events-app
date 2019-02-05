import React from "react";

const TextInput = ({
  input,
  type,
  label,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={"form-control " + (touched && error && "is-invalid")}
      />
      <div className="invalid-feedback">{touched && error}</div>
    </div>
  );
};

export default TextInput;
