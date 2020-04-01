import React, { Component } from "react";
import NoPoster from '../images/NoPoster.png';


class Mystery extends Component {
  constructor() {
    super();
    this.state = { results: [] };
  }

  componentDidMount() {
    fetch(`https://movies-api-siit.herokuapp.com/movies?take=100&Genre=Mystery`)
      .then(Response => {
        return Response.json();
      })
      .then(movies => {
        this.setState({ results: movies.results});
      });
  }

  render() {
   
    return (
      
        <div className="container">
          <h1>Mystery Page </h1>
          {this.state.results.map((movie) => {      
            
            let moviePoster = NoPoster;
            if (movie.Poster && movie.Poster !== "N/A") {
              moviePoster = movie.Poster;
            }

            return (
              <div className="movie-info" key={movie._id}> 
                <img src={moviePoster} alt="poster"/>
                <p>{movie.Title}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Year: {movie.Year}</p>
                <p>Runtime: {movie.Runtime}</p>
                <p>Language: {movie.Language}</p>
                <p>imdbRating: {movie.imdbRating}</p>
                <p>imdbVotes: {movie.imdbVotes}</p>    
              </div>
            );
          })}
        </div>
      
    );
  }
}

export default Mystery;
