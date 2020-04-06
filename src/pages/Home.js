import React, {Component, useReducer} from "react";
import SinglePosterCarousel from "../components/Poster";
import MultiPosterCarousel from "../components/main/rating-carousel/Carousel";
import MovieDetails from "../components/MovieDetails";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: false
    };
  }

  currentMovieCallback = (movie) => {
    this.setState({currentMovie: movie}, () => {
      this.triggerIsPosterClickedState();
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2> Welcome to HOME Page</h2>
        </div>
        {!this.state.poster
          ? (<SinglePosterCarousel handleClickPoster={this.triggerIsPosterClickedState}
                                   parentCallback={this.currentMovieCallback}/>)
          : (<MovieDetails handleClickBack={this.triggerBackToPosterClickedState}
                           currentMovie={this.state.currentMovie}/>)
        }
        <MultiPosterCarousel/>
      </div>
    );
  }

  triggerIsPosterClickedState = () => {
    this.setState({
      ...this.state,
      poster: true
    })
  };

  triggerBackToPosterClickedState = () => {
    this.setState({
      ...this.state,
      poster: false
    })
  }
}

export default Home;
