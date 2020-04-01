import React, {Component} from "react";
import Poster from "../components/Poster";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2> Welcome to HOME Page</h2>
        </div>
        <Poster/>
      </div>
    );
  }
}

export default Home;
