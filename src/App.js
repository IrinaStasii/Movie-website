import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import Poster from './components/Poster';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Poster/>
        <Footer/>
      </div>
    );
  }
}

export default App;
