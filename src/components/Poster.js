import React, {Component} from 'react';
import './Poster.css'
import {Link} from "react-router-dom";

class Poster extends Component {
  state = {
    movies: [],
    currentMovieIndex: 0,
    moviesToDisplay: 3
  };

  fetchData() {
    fetch('https://movies-app-siit.herokuapp.com/movies?take=20&Genre=action')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        let movies = [];
        for (let movie of data.results) {
          movies.push(new Movie(movie));
        }
        this.setState({movies: movies});
      });
  };


  componentDidMount() {
    console.log("mounted");
    this.fetchData();
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 576) {
        this.setState({moviesToDisplay: 1})
      } else {
        this.setState({moviesToDisplay: 3})
      }
    })
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
    const {movies, currentMovieIndex, moviesToDisplay} = this.state;
    const currentMovie = movies[currentMovieIndex];


    console.log(movies);
    return (

      <div className="container-fluid">
        <div className="carousel-background">
          {currentMovie ? (
            <div className="carousel-inner d-flex justify-content-center">
              <button
                className={`my-auto carousel-control-prev carousel-control-prev-icon ${currentMovieIndex === 0 ? "disabled" : ""}`}
                onClick={this.handlePreviousMovie}>
              </button>
              {
                movies.sort(function (a, b) {
                  return b.imdbVotes - a.imdbVotes
                }).slice(currentMovieIndex, currentMovieIndex + moviesToDisplay).map((currentMovie) => {
                  return (
                    <Link
                      className="text-decoration-none "
                      to={{
                        pathname: "/MovieDetails",
                        state: {
                          movie: currentMovie,
                        }
                      }}>
                      <div className="pr-5 text-center">
                        <img className="rounded d-block " src={currentMovie.Poster} alt="poster"/>
                        <p className="title text-secondary ">{currentMovie.Title}</p>
                        <p className="votes text-secondary ">{currentMovie.imdbVotes} votes</p>
                      </div>
                    </Link>
                  )
                })}
              <button
                className={`my-auto carousel-control-next carousel-control-next-icon ${currentMovieIndex === movies.length - 3 ? "disabled" : ""}`}
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
  constructor(movie) {
    this._id = movie._id;
    this.Country = movie.Country;
    this.Genre = movie.Genre;
    this.imdbVotes = movie.imdbVotes;
    this.Language = movie.Language;
    this.Poster = movie.Poster;
    this.Runtime = movie.Runtime;
    this.Title = movie.Title;
    this.Type = movie.Type;
    this.Year = movie.Year;
  }
}
