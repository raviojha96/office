import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Password from "./components/Password";
import Login from "./components/Login";
import Register from "./components/Register";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Auth = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  changeAuthState = data => {
    this.setState({ isAuthenticated: data });
  };
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            if (isAuthenticated: false){" "}
            {
              <Route
                exact
                path="/login"
                render={props => (
                  <Login
                    {...props}
                    isAuthenticated={this.state.isAuthenticated}
                    changeAuthState={this.changrAuthState}
                  />
                )}
              />
            }{" "}
            {<Route exact path="/register" component={Register} />}
            <Header />
            <Sidebar />
            <Route path="/profile" component={Profile} />
            <Route path="/password" component={Password} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
