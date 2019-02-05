import React from "react";

const TextArea = ({
  input,
  placeholder,
  label,
  rows,
  meta: { error, touched }
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea
        {...input}
        className={"form-control " + (touched && error && "is-invalid")}
        placeholder={placeholder}
        rows={rows}
      />
      <div className="invalid-feedback">{touched && error}</div>
    </div>
  );
};

export default TextArea;
