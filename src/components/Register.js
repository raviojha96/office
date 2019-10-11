import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
  }

  //validation
  handleValidation = () => {
    const fields = this.state.fields;
    const errors = this.state.errors;
    var isValid = true;

    if (!fields.fname) {
      isValid = false;
      errors.fname = "cannont be empty";
    } else if (fields.fname) {
      if (!fields.fname.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors.fname = "Letters only";
      }
    }
    if (!fields.lname) {
      isValid = false;
      errors.lname = "cannont be empty";
    } else if (fields.lname) {
      if (!fields.lname.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors.lname = "Letters only";
      }
    }
    if (!fields.email) {
      isValid = false;
      errors.email = "cannont be empty";
    } else if (fields.email) {
      if (!fields.email.match(/\S+@\S+\.\S+/)) {
        isValid = false;
        errors.email = "Invalid Email";
      }
    }
    if (!fields.pass) {
      isValid = false;
      errors.pass = "cannont be empty";
    } else if (fields.pass) {
      if (!fields.pass.match(/^[a-zA-Z0-9]+$/)) {
        isValid = false;
        errors.pass = "Special charcters not allowed";
      } else if (this.state.fields.pass !== this.state.fields.repass) {
        isValid = false;
        errors.pass = "credentials not matched";
      }
    }

    this.setState({ errors: errors });
    return isValid;
  };

  handleChange = e => {
    const fields = this.state.fields;
    const key = e.target.name;
    const value = e.target.value;
    fields[key] = value;
    this.setState({
      fields: fields
    });
  };

  handleSubmit = e => {
    if (!this.handleValidation()) {
    } else {
      alert(this.state.fields.fname);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div style={{ margin: "60px" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-4"></label>
            <div className="col-8">
              <input
                onChange={this.handleChange}
                id="fname"
                name="fname"
                placeholder="First Name"
                type="text"
                className="form-control"
              />
              <span style={{ color: "red" }}>{this.state.errors.fname}</span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4"></label>
            <div className="col-8">
              <input
                onChange={this.handleChange}
                id="lname"
                name="lname"
                placeholder="Last Name"
                type="text"
                className="form-control"
              />
              <span style={{ color: "red" }}>{this.state.errors.lname}</span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4"></label>
            <div className="col-8">
              <input
                onChange={this.handleChange}
                id="email"
                name="email"
                placeholder="Email"
                type="text"
                className="form-control"
              />
              <span style={{ color: "red" }}>{this.state.errors.email}</span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4"></label>
            <div className="col-8">
              <input
                onChange={this.handleChange}
                id="pass"
                name="pass"
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
                name="repass"
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
