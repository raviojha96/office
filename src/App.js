import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Password from "./components/Password";
import Login from "./components/Login";
import Register from "./components/Register";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Auth = true;

function App() {
  if (Auth) {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  } else {
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Route path="/profile" component={Profile} />
        <Route path="/password" component={Password} />
        <Route path="/register" component={Register} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
