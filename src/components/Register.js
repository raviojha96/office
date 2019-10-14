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
    if (
      this.state.fname &&
      this.state.lname &&
      this.state.email &&
      this.state.password1 &&
      this.state.password2
    ) {
      const reqObj = {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password1: this.state.password1,
        password2: this.state.password2
      };
      console.log(reqObj);
    } else {
      alert("Error: Please fill all the fields", this.state.errors);
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
            handleChange={this.handleChange}
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
            handleChange={this.handleChange}
            id="lname"
            name="lname"
            placeholder="Last Name"
            type="text"
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
            handleChange={this.handleChange}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
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
            handleChange={this.handleChange}
            id="password1"
            name="password1"
            placeholder="Password"
            type="password"
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
            handleChange={this.handleChange}
            id="password2"
            name="password2"
            placeholder="Repeat Password"
            type="password"
            className="form-control"
            errors={this.state.errors}
          />
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
