import React, { Component } from "react";
import CustomInput from "./common/textinput";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password1: "",
      password2: "",
      errors: {}
    };
  }

  //validation
  handleValidation = fieldName => {
    const { fname, lname, email, password1, password2 } = this.state;
    const errors = this.state.errors;
    var isValid = true;

    if (!fname) {
      isValid = false;
      errors.fname = "cannont be empty";
    } else if (fname) {
      if (!fname.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors.fname = "Letters only";
      }
    }
    if (!lname) {
      isValid = false;
      errors.lname = "cannont be empty";
    } else if (lname) {
      if (!lname.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors.lname = "Letters only";
      }
    }
    if (!email) {
      isValid = false;
      errors.email = "cannont be empty";
    } else if (email) {
      if (!email.match(/\S+@\S+\.\S+/)) {
        isValid = false;
        errors.email = "Invalid Email";
      }
    }
    if (!password1) {
      isValid = false;
      errors.pass = "cannont be empty";
    } else if (password1) {
      if (!password1.match(/^[a-zA-Z0-9]+$/)) {
        isValid = false;
        errors.password1 = "Special charcters not allowed";
      } else if (password1 !== password2) {
        isValid = false;
        errors.pass = "credentials not matched";
      }
    }

    this.setState({ errors: errors });
    return isValid;
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBlur = (e, validations) => {
    const errorMsgs = this.state.errors;
    const fieldValue = e.target.value,
      fieldName = e.target.name;
    if (!fieldValue.trim()) {
      errorMsgs[fieldName] = "cant be empty";
      this.setState({ errors: errorMsgs });
      return;
    }
    validations.reverse().forEach(validation => {
      const { type, value, error } = validation;
      if (type === "regex" && !fieldValue.match(value)) {
        errorMsgs[fieldName] = `invalid ${fieldName}, ${error}`;
      } else if (type === "minLength" && fieldValue.length < value) {
        errorMsgs[
          fieldName
        ] = `${fieldName} should have atleast ${value} characters`;
      } else {
        errorMsgs[fieldName] = ``;
      }
    });
    this.setState({ errors: errorMsgs });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.handleValidation()) {
    } else {
      alert(this.state.fields.fname);
    }
  };

  render() {
    return (
      <div style={{ margin: "60px" }}>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            handleBlur={this.handleBlur}
            validations={[
              { type: "regex", value: /^[a-zA-Z]+$/, error: "Characters only" }
            ]}
            onChange={this.handleChange}
            id="fname"
            name="fname"
            placeholder="First Name"
            type="text"
            className="form-control"
            errors={this.state.errors}
          />
          <CustomInput
            handleBlur={this.handleBlur}
            validations={[
              { type: "regex", value: /^[a-zA-Z]+$/, error: "Characters only" }
            ]}
            onChange={this.handleChange}
            id="lname"
            name="lname"
            placeholder="Last Name"
            type="email"
            className="form-control"
            errors={this.state.errors}
          />
          <CustomInput
            handleBlur={this.handleBlur}
            validations={[
              {
                type: "regex",
                value: /\S+@\S+\.\S+/,
                error: "email is incorrecrt"
              }
            ]}
            onChange={this.handleChange}
            id="email"
            name="email"
            placeholder="Email"
            type="text"
            className="form-control"
            errors={this.state.errors}
          />
          <CustomInput
            handleBlur={this.handleBlur}
            validations={[
              {
                type: "minLength",
                value: 8
              }
            ]}
            onChange={this.handleChange}
            id="password1"
            name="password1"
            placeholder="password"
            type="password"
            className="form-control"
            errors={this.state.errors}
          />
          <div className="form-group row">
            <label className="col-4"></label>
            <div className="col-8">
              <input
                onChange={this.handleChange}
                id="pass"
                name="password1"
                placeholder="Enter Your Password"
                type="password"
                className="form-control"
              />
              <span style={{ color: "red" }}>{this.state.errors.pass}</span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4"></label>
            <div className="col-8">
              <input
                id="pass"
                name="password2"
                placeholder="Repeat Your Password"
                type="password"
                className="form-control"
              />
              <span style={{ color: "red" }}>{this.state.errors.repass}</span>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-4 col-8">
              <button name="submit" type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
