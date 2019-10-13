import React from "react";

/**
 *
 * [{
 * type: ""
 *  regex: //
 *  error: ""
 * }]
 */

export default function textinput({
  validations,
  placeholder = "please enter stuff",
  value,
  type = "text",
  name,
  label,
  handleChange,
  handleBlur,
  errors,
  className = "form-control"
}) {
  return (
    <div className="form-group row">
      {label && <label className="col-4">{label}</label>}
      <div className="col-8">
        <input
          className={className}
          onBlur={e => handleBlur(e, validations)}
          onChange={handleChange}
          value={value}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
        />
        <span style={{ color: "red" }}>{errors[name]}</span>
      </div>
    </div>
  );
}
