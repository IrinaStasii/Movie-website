import React, {Component} from 'react';
import './Poster.css'
import {Link} from "react-router-dom";

class Poster extends Component {
  state = {
    movies: [],
    currentMovieIndex: 0,
  };

  fetchData() {
    fetch('https://movies-api-siit.herokuapp.com/movies?take=20&Type=series')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        let movies = [];
        for (let movie of data.results) {
          movies.push(new Movie(movie.Poster, movie.Title, movie.Year, movie.Runtime, movie.Genre,
            movie.Language, movie.Country, movie.Type));
        }
        this.setState({movies: movies});
      });
  };

  componentDidMount() {
    console.log("mounted");
    this.fetchData();
  };


  handleNextMovie = () => {
    const {currentMovieIndex, movies} = this.state;

    if (currentMovieIndex < movies.length - 1) {
      this.setState({currentMovieIndex: currentMovieIndex + 1});
    }
  };

  handlePreviousMovie = () => {
    const {currentMovieIndex} = this.state;

    if (currentMovieIndex > 0) {
      this.setState({currentMovieIndex: currentMovieIndex - 1});
    }
  };

  render() {
    const {movies, currentMovieIndex} = this.state;
    const currentMovie = movies[currentMovieIndex];
    return (
      <div className="carousel-background">
        <div className="container">
          {currentMovie ? (
            <div className="carousel-inner d-flex justify-content-center">
              <button
                className={`my-auto carousel-control-prev carousel-control-prev-icon ${currentMovieIndex === 0 ? "disabled" : ""}`}
                onClick={this.handlePreviousMovie}>
              </button>
              <Link to={{
                pathname: "/MovieDetails",
                state: {
                  movie: currentMovie,
                }
              }}>
                <img className="rounded mx-auto d-block" src={currentMovie.poster} alt="poster"/>
              </Link>
              <button
                className={`my-auto carousel-control-next carousel-control-next-icon ${currentMovieIndex === movies.length - 1 ? "disabled" : ""}`}
                onClick={this.handleNextMovie}>
              </button>
            </div>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    )
  }
}

export default Poster;

class Movie {
  constructor(poster, title, year, genre, runtime, language, country, type) {
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.language = language;
    this.country = country;
    this.type = type;

  }
}