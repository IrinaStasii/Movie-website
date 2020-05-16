import React, {Component} from "react";
import NoPoster from "../../images/NoPoster.png";
import "./MovieList.css";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      currentMovieIndex: 0
    }

  }

  componentDidMount() {
    let url = "https://movies-app-siit.herokuapp.com/movies?";
    let title = this.props.location.state.title;
    let genre = this.props.location.state.genre;
    let country = this.props.location.state.country;
    let language = this.props.location.state.language;
    if (title) {
      url = `${url}&Title=${title}`
    }
    if (genre) {
      url = `${url}&Genre=${genre}`
    }

    if (country.length > 0) {
      url = url + "Country=";
      for (let i = 0; i < country.length; i++) {

        url = url + country[i] + ", ";

      }
      url = url.slice(0, -2);
    }

    if (language.length > 0) {
      url = url + "&Language=";
      for (let i = 0; i < language.length; i++) {

        url = url + language[i] + ", ";

      }
      url = url.slice(0, -2);
    }
    url = url + "&take=100"
    console.log(url);


    fetch(url).then(results => {
      return results.json();
    }).then(movie => {
      this.setState({results: movie.results})
    })
  }

  render() {
    let minutesMin = this.props.location.state.minutesMin;
    let minutesMax = this.props.location.state.minutesMax;
    let runtimeResults = [];

    if (minutesMin || minutesMax) {
      if (minutesMin > minutesMax) {
        minutesMax = 240
        console.log("positive")
      }
      for (let i = 0; i < this.state.results.length; i++) {
        if (minutesMin <= parseInt(this.state.results[i].Runtime, 10) && parseInt(this.state.results[i].Runtime, 10) <= minutesMax) {
          runtimeResults.push(this.state.results[i]);

        }
      }
      this.state.results = runtimeResults;
    }

    return (
      <div className="container movie-list-container ">
        <h1>Here are your search results </h1>
        {this.state.results.map((movie) => {

          let moviePoster = NoPoster;
          if (movie.Poster && movie.Poster !== "N/A") {
            moviePoster = movie.Poster;
          }

          return (
            <div className="movie-info row text-white" key={movie._id}>
              <img className="col-md-7 p-0 m-4 rounded border border-white" src={moviePoster} alt="poster"/>
              <div className="col-md-5 m-4">
                <h4 className="m-0 pb-3">{movie.Title}</h4>
                <p className="m-0 pb-2"><strong>Genre:</strong> {movie.Genre}</p>
                <p className="m-0 pb-2"><strong>Year: </strong>{movie.Year}</p>
                <p className="m-0 pb-2"><strong>Country:</strong>{movie.Country}</p>
                <p className="m-0 pb-2"><strong>Runtime: </strong>{movie.Runtime}</p>
                <p className="m-0 pb-2"><strong>Language: </strong>{movie.Language}</p>
                <p className="m-0 pb-2 text-muted">imdbRating: {movie.imdbRating} <i
                  className="fas fa-star text-warning"></i></p>
                <p className="m-0 pb-2 text-muted">imdbVotes: {movie.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </div>

    );
  }


}

export default MovieList;