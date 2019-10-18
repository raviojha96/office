import React, { Component } from "react";

export default class Password extends Component {
  render() {
    return (
      <div style={{ margin: '70px' }}>
        <div className="clearfix right-main-sectioan">
          <div className="col-xs-12 col-md-12 content-scroll-body">
            <div className="clearfix blank">
              <form
                method="POST"
                action="http://admin.pebibits.com/do-change-password"
                accept-charset="UTF-8"
                className="form-horizontal reward-form"
                role="form"
              >
                <input
                  name="_token"
                  type="hidden"
                  value="vQ0C9gnuIiEsPTjENZf6DjIfkmRXdO8F5a18dKYo"
                />
                <div>
                  <div className="row">
                    <label className="col-xs-12 col-sm-2 form-label">
                      Old Password
                    </label>
                    <div className=" col-xs-12 col-sm-8 space-5 ">
                      <span className="input-group-addon"></span>
                      <input
                        className="form-control"
                        placeholder="Old Password"
                        name="old_password"
                        type="text"
                      />
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <label className="col-xs-12 col-sm-2 form-label">
                      New Password
                    </label>
                    <div className="col-xs-12 col-sm-8 space-5">
                      <span className="input-group-addon"></span>
                      <input
                        className="form-control"
                        placeholder="New Password"
                        name="password"
                        type="text"
                      />
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <label className="col-xs-12 col-sm-2 form-label">
                      Confirm Password
                    </label>
                    <div className="col-xs-12 col-sm-8 space-5">
                      <span className="input-group-addon"></span>
                      <input
                        className="form-control"
                        placeholder="New Password"
                        name="confirm_password"
                        type="text"
                      />
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <label className="col-xs-12 col-sm-2"></label>
                    <div className="col-xs-12 col-sm-8 space-5">
                      <span className="input-group-addon"></span>
                      <button
                        type="submit"
                        className="btn-primary btn btn-reward eventBtn btn-parent"
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
