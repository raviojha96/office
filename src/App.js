import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Password from "./components/Password";
import Login from "./components/Login";
import Register from "./components/Register";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <p>hello world</p>
        <Header />
        <Sidebar />
        <Route path="/profile" component={Profile} />
        <Route path="/password" component={Password} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
