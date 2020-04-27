import React, {Component, } from "react";
import SinglePosterCarousel from "../components/Poster";
import MultiPosterCarousel from "../components/main/rating-carousel/Carousel";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container text-muted ">
          <h2 >Best voted series</h2>
        </div>
        <SinglePosterCarousel handleClickPoster={this.triggerIsPosterClickedState}
                              parentCallback={this.currentMovieCallback}/>
        <div className="container text-muted">
          <h2>Most rated movies</h2>
        </div>
        <MultiPosterCarousel/>
      </div>
    );
  }
}

export default Home;
