import React from "react";

const InputField = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder = "Enter",
  isViewMode = false,
  errors = {},
}) => (
  <div>
    <input
      type={type}
      className={`form-control ${errors[name] ? "is-invalid" : ""}`}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={isViewMode}
    />
    {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
  </div>
);

export default InputField;
