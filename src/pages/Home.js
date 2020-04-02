import React, {Component} from "react";
import Poster from "../components/Poster";
import Main from "../components/main/rating-carousel/Carousel"

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2> Welcome to HOME Page</h2>
        </div>
        <Poster/>
        <Main/>
      </div>
    );
  }
}

export default Home;
