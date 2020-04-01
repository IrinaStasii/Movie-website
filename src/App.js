import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Poster from './components/Poster';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Poster/>
      </div>
    );
  }
}

export default App;
