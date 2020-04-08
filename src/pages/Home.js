import React, {Component, useReducer} from "react";
import SinglePosterCarousel from "../components/Poster";
import MultiPosterCarousel from "../components/main/rating-carousel/Carousel";
import MovieDetails from "../components/MovieDetails";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2> Welcome to HOME Page</h2>
        </div>
        <SinglePosterCarousel handleClickPoster={this.triggerIsPosterClickedState}
                              parentCallback={this.currentMovieCallback}/>
        <MultiPosterCarousel/>
      </div>
    );
  }
}

export default Home;
