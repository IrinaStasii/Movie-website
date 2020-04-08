import React, {Component} from "react";
import './MovieDetails.css'
import {Link} from "react-router-dom";

class MovieDetails extends Component {

  componentDidMount() {
    const {handle} = this.props.match.params;
    const {fromNotifications} = this.props.location.state;
  }

  render() {
    let currentMovie = this.props.location.state.movie;
    let movies = this.props.location.state.movies;
    let currentMovieIndex = this.props.location.state.currentMovieIndex;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img className="rounded float-left" src={currentMovie.poster}/>
          </div>
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span>Title: {currentMovie.title}</span>
              <span>Year: {currentMovie.year}</span>
              <span>Genre: {currentMovie.genre}</span>
              <span>Language: {currentMovie.language}</span>
              <span>Country: {currentMovie.country}</span>
              <span>Type: {currentMovie.type}</span>
            </div>
          </div>
          <div className="col-sm">
            <Link to={{
              pathname: "/",
            }}>
              <button type="button" className="btn btn-secondary" onClick={this.props.handleClickBack}>Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;