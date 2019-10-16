import React from "react";
import utils from '../../utils';
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
  stateName,
  label,
  handleChange,
  handleBlur,
  errors,
  onValidationError,
  stateObj,
  className = "form-control"
}) {

  return (
    <div className="form-group row">
      {label && <label className="col-4">{label}</label>}
      <div className="col-8">
        <input
          className={className}
          onBlur={() => utils.checkValidation(name, stateName, type, validations, onValidationError, stateObj)}
          onChange={(e) => handleChange(stateName, e.target.value)}
          value={value}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
        />
        <span style={{ color: "red" }}>{stateObj.errors[stateName]}</span>
      </div>
    </div>
  );
}
