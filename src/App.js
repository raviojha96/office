import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Register from "./components/Register";
import { isEmpty } from "lodash"
import { Route, HashRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      authenticatedUser: null
    };
    
  }
  changeAuthState = data => {
    this.setState({ authenticatedUser: data, isAuthenticated: !isEmpty(data) });
  };
  render() {
    return (
      <>
        <Router>
          <Route
            exact
            path={["/login"]}
            render={props => (
              <Login
                {...props}
                isAuthenticated={this.state.isAuthenticated}
                changeAuthState={this.changeAuthState}
              />
            )}
          />
          {<Route exact path="/register" render={props => (
            <Register
              {...props}
              isAuthenticated={this.state.isAuthenticated}
              changeAuthState={this.changeAuthState}
            />
          )} />}
          <Header isAuthenticated={this.state.isAuthenticated} />
          <Sidebar changeAuthState={this.changeAuthState} />
          <Route exact path={["/profile", "/"]} render={props => (
            <Profile
              {...props}
              isAuthenticated={this.state.isAuthenticated}
              changeAuthState={this.changeAuthState}
            />
          )} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Footer />
        </Router>
      </>
    );
  }
}
export default App;
