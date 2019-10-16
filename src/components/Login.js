import React, { Component } from "react";
import utils from '../utils';
import { isEqual } from 'lodash';
import CustomInput from "./common/textinput";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.fields = [
      {
        id: 'email',
        name: 'email',
        stateName: 'email',
        stateDefaultValue: '',
        type: 'text',
        label: 'email',
        placeHolder: 'Please Enter Email',
        isRequired: true,
        className: 'form-control',
        validations: [
          {
            type: "regex",
            value: /\S+@\S+\.\S+/,
            error: "email is incorrecrt"
          }
        ]
      },
      {
        id: 'password',
        name: 'password',
        stateName: 'password',
        stateDefaultValue: '',
        type: 'password',
        label: 'password',
        isRequired: true,
        placeHolder: 'Please Enter Password',
        className: 'form-control',
        validations: []
      }
    ]
    this.state = {
      correctCredentials: {
        email: "ravi@gmail.com",
        password: "12345678"
      },
      errors: {},
      isSubmitDisabled: false
    };

    this.fields.map(field => {
      if (field.stateName) this.setState({ [field.stateName]: field.stateDefaultValue });
    })
  }

  handleChange = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  componentDidMount() {
    const leftBar = document.querySelector("aside.left-sidebar")
    if (leftBar) leftBar.style = "display:none;"
    document.querySelector("body").style = "padding-left:0px;"
  }
  componentWillUnmount() {
    const leftBar = document.querySelector("aside.left-sidebar")
    if (leftBar) leftBar.style = "display:block;"
    document.querySelector("body").style = "padding-left:250px;"
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = utils.validateEntireDataset(this.fields, this.state);
    this.setState({ errors: errors }, () => {
      if (Object.values(this.state.errors).every(stateValue => stateValue === "")) { // error object has no error


        const userObj = {
          email: this.state.email,
          password: this.state.password
        }

        if (isEqual(this.state.correctCredentials, userObj)) {
          this.props.changeAuthState(userObj);
          this.props.history.push("/profile");
        }
        else {
          const errors = this.state.errors;
          errors.password = 'Invalid Credentials';
          this.setState({ errors: errors });
        }
      }
    });
  };

  onValidationError = ({ stateName, errorMessage }) => {
    const errors = this.state.errors;
    errors[stateName] = errorMessage;
    this.setState({ errors });
  }

  render() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/profile");
    }
    return (
      <>
        <div className="clearfix page-xy-100 flexbox login-page">
          <div className="container align-items-center">
            <div className="col-md-12 justify-item-center">
              <div className="col-sm-auto login-form">
                <div className="col-md-12 block-logo">
                  <img src="images/logo.png" className="center-block" />
                </div>
                {this.fields.map(field => (
                  <CustomInput
                    key={field.id}
                    handleBlur={this.handleBlur}
                    handleChange={this.handleChange}
                    onValidationError={this.onValidationError}
                    stateObj={this.state}
                    id={field.id}
                    name={field.name}
                    stateName={field.stateName}
                    validations={field.validations}
                    isRequired={field.isRequired}
                    placeholder={field.placeHolder}
                    type={field.type}
                    className={field.className}
                  />
                ))}
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" onClick={this.handleSubmit} disabled={this.state.isSubmitDisabled} className="btn btn-default">
                  Submit
                  </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
