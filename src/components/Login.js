import React, { Component } from "react";

export default class Login extends Component {
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
                  <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Enter password"
                      name="pwd"
                    />
                  </div>
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
