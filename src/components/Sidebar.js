import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="left-sidebar">
        <div className="scroll-sidebar">
          <div className="logo-header">
            <figure>
              <a href="dashboard.html">
                <img
                  src="images/logo-1.png"
                  className="img-responsive center-block"
                />
              </a>
            </figure>
          </div>
          <div className="logo-header-inner">
            <figure>
              <a href="dashboard.html">
                <img
                  src="images/pebibit.png"
                  className="img-responsive center-block"
                />
              </a>
            </figure>
          </div>
          <div className="user-profile">
            <div className="user-pro-body">
              <div>
                <img
                  src="images/profile.jpg"
                  alt="user-img"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="dropdown">
                <a
                  href=""
                  className="dropdown-toggle u-dropdown link hide-menu"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Lokesh swami <span className="caret"></span>
                </a>
                <div className="dropdown-menu animated flipInY">
                  <Link to="/profile" className="dropdown-item">
                    <i className="fas fa-user icon"></i>My Profile
                  </Link>

                  <Link to="/password" className="dropdown-item">
                    <i className="fas fa-key icon"></i> Change Password
                  </Link>

                  <Link to="/" className="dropdown-item">
                    <i className="icon-settings icon"></i> Account Setting
                  </Link>

                  <Link to="/login" className="dropdown-item">
                    <i className="fas fa-power-off icon"></i> Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li>
                <a className="has-arrow" href="#" aria-expanded="false">
                  <i className="icon-speedometer icon"></i>
                  <span className="hide-menu">
                    {" "}
                    Dashboard{" "}
                    <span className="badge badge-pill badge-cyan ml-auto">
                      4
                    </span>
                  </span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a href="#">Minimal </a>
                  </li>
                  <li>
                    <a href="#">Analytical</a>
                  </li>
                  <li>
                    <a href="#">Demographical</a>
                  </li>
                  <li>
                    <a href="#">Modern</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a className="has-arrow" href="#" aria-expanded="false">
                  <i className="icon-grid icon"></i>
                  <span className="hide-menu">Apps</span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a href="#">Calendar</a>
                  </li>
                  <li>
                    <a href="#">Chat app</a>
                  </li>
                  <li>
                    <a href="#">Support Ticket</a>
                  </li>
                  <li>
                    <a href="#">Contact / Employee</a>
                  </li>
                  <li>
                    <a href="#">Contact Grid</a>
                  </li>
                  <li>
                    <a href="#">Contact Detail</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a className="has-arrow" href="#" aria-expanded="false">
                  <i className="icon-envelope icon"></i>
                  <span className="hide-menu">Inbox</span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a href="#">Mailbox</a>
                  </li>
                  <li>
                    <a href="#">Mailbox Detail</a>
                  </li>
                  <li>
                    <a href="#">Compose Mail</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a className="" href="#" aria-expanded="false">
                  <i className="icon-people icon"></i>
                  <span className="hide-menu">Add Employee</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}
export default Sidebar;
