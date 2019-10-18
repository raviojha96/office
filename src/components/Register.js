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

  // to show hide sidebar
  // start
  componentDidMount() {
    document.querySelector("aside.left-sidebar").style = "display:none;"
    document.querySelector("body").style = "padding-left:0px;"
  }
  componentWillUnmount() {
    document.querySelector("aside.left-sidebar").style = "display:block;"
    document.querySelector("body").style = "padding-left:250px;"
  }
  //end

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
        <h3> Register User </h3>
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
