import React, { Component } from "react";
import CustomInput from "./common/textinput";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveCredential: {
        email: "raviojha@getMaxListeners.com",
        password: "12345678"
      },
      username: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
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
      this.state.username === this.state.saveCredential.username &&
      this.state.password === this.state.saveCredential.password
    ) {
      this.props.changeAuthState(true);
    }
  };
  render() {
    return (
      <div>
        <div className="clearfix page-xy-100 flexbox login-page">
          <div className="container align-items-center">
            <div className="col-md-12 justify-item-center">
              <div className="col-sm-auto login-form">
                <div className="col-md-12 block-logo">
                  <img src="images/logo.png" className="center-block" />
                </div>
                <form action="">
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
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    errors={this.state.errors}
                  />
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="remember" /> Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
