import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  input: { value, onChange, ...restInput },
  placeholder,
  label,
  width,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="d-block">
        <DatePicker
          {...rest}
          placeholderText={placeholder}
          selected={value ? value : null}
          onChange={onChange}
          className={
            "d-block form-control " + (touched && error && "is-invalid")
          }
          {...restInput}
        />
      </div>
      {touched && error && <div className="text-danger small">{error}</div>}
    </div>
  );
};

export default DateInput;
