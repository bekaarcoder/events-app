import React from "react";

const SelectInput = ({
  input,
  placeholder,
  options,
  label,
  meta: { touched, error }
}) => {
  console.log(touched, error);
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        {...input}
        className={"form-control " + (touched && error && "is-invalid")}
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <div className="invalid-feedback">{touched && error}</div>
    </div>
  );
};

export default SelectInput;
