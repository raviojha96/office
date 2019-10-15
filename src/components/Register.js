import React, { Component } from "react";
import utils from '../utils';
import CustomInput from "./common/textinput";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.fields = [
      {
        id: 'fname',
        name: 'first name',
        stateName: 'fname',
        stateDefaultValue: '',
        type: 'text',
        label: 'fname',
        placeHolder: 'Please Enter fname',
        isRequired: true,
        className: 'form-control',
        validations: [
          { type: "regex", value: /^[a-zA-Z]+$/, error: "Characters only" }
        ]
      },
      {
        id: 'lname',
        name: 'last name',
        stateName: 'lname',
        stateDefaultValue: '',
        type: 'text',
        label: 'lname',
        placeHolder: 'Please Enter lname',
        isRequired: true,
        className: 'form-control',
        validations: [
          { type: "regex", value: /^[a-zA-Z]+$/, error: "Characters only" }
        ]
      },
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
        validations: [
          {
            type: "minLength",
            value: 8
          }
        ]
      },
      {
        id: 'password2',
        name: 'confirm password',
        stateName: 'password2',
        stateDefaultValue: '',
        type: 'password',
        label: 'confirm password enter',
        isRequired: true,
        placeHolder: 'Please Confirm Password',
        className: 'form-control',
        validations: [
          {
            type: "equalToOtherField",
            otherStateName: 'password',
            otherFieldName: 'password'
          }
        ]
      }
    ]
    this.state = {
      errors: {}
    };
    this.fields.map(field => {
      if (field.stateName) this.setState({ [field.stateName]: field.stateDefaultValue });
    })
  }
  handleChange = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  componentDidMount() {
    document.querySelector("aside.left-sidebar").style = "display:none;"
    document.querySelector("body").style = "padding-left:0px;"
  }
  componentWillUnmount() {
    document.querySelector("aside.left-sidebar").style = "display:block;"
    document.querySelector("body").style = "padding-left:250px;"
  }

  onValidationError = ({ stateName, errorMessage }) => {
    const errors = this.state.errors;
    errors[stateName] = errorMessage;
    this.setState({ errors });
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = utils.validateEntireDataset(this.fields, this.state);
    this.setState({ errors: errors }, () => {
      if (Object.values(this.state.errors).every(stateValue => stateValue === "")) { // error object has no error
        const reqObj = {
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email,
          password: this.state.password
        };
        console.log(reqObj);
        alert("success check console");
      }
    });
  };

  render() {
    // if (this.props.isAuthenticated) {
    //   this.props.history.push("/profile");
    // }
    return (
      <div style={{ margin: "60px" }}>
        <form onSubmit={this.handleSubmit}>
          {this.fields.map(field => (
            <CustomInput
              key={field.id}
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
          {/* <CustomInput
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
          /> */}
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
