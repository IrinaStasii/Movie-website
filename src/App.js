import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Body } from "./components/Body";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
