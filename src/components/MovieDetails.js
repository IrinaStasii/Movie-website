import React, {Component} from "react";
import './MovieDetails.css'
import {Link} from "react-router-dom";

class MovieDetails extends Component {

  // componentDidMount() {
  //   const {handle} = this.props.match.params;
  //   const {fromNotifications} = this.props.location.state;
  // }

  render() {
    let currentMovie = this.props.location.state.movie;
   // let movies = this.props.location.state.movies;
   // let currentMovieIndex = this.props.location.state.currentMovieIndex;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 ">
            <img className="rounded mx-auto d-block pt-4" src={currentMovie.poster} alt="Poster"/>
          </div>
          <div className="col-lg-6 my-auto ">
            <div className="container">
              <div className="row ">
                <h5>Title: </h5>
                <span>{currentMovie.title}</span>
              </div>
              <div className="row">
                <h5>Year: </h5>
                <span>{currentMovie.year}</span>
              </div>
              <div className="row">
                <h5>Year: </h5>
                <span>{currentMovie.year}</span>
              </div>
              <div className="row">
                <h5>Genre: </h5>
                <span> {currentMovie.genre}</span>
              </div>
              <div className="row">
              <h5>Language: </h5>
                <span> {currentMovie.language}</span>
            </div>
              <div className="row">
                <h5>Country:</h5>
                <span> {currentMovie.country}</span>
              </div>
              <div className="row">
                <h5>Type:</h5>
                <span> {currentMovie.type}</span>
              </div>
              <div className="row">
                  <h5>Description:</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, at, atque consequatur consequuntur corporis
                cum cumque cupiditate dicta ducimus eius enim et eum eveniet explicabo harum id ipsa iusto maiores minima neque officia
                quae qui quibusdam reiciendis repellendus sint, temporibus tenetur totam vitae voluptate. Ab accusantium amet architecto
                commodi consectetur consequatur, delectus ducimus ea incidunt modi officia sequi temporibus voluptates? Ad at dolorum
                facere in nemo, obcaecati officia optio perferendis quidem quisquam quo quos, repellendus repudiandae similique sunt.
                Ad aliquid asperiores atque deserunt doloribus dolorum error et fugiat incidunt iusto maxime molestiae molestias, nobis
                non praesentium quidem rem similique totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa eaque labore laboriosam magnam magni molestias neque quo repellendus! Minus.</p>
              </div>
            </div>
          </div>
          {/*<div className="col-sm">*/}
          {/*  <Link to={{*/}
          {/*    pathname: "/",*/}
          {/*  }}>*/}
          {/*    /!*<button type="button" className="btn btn-secondary" onClick={this.props.handleClickBack}>Back</button>*!/*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>

           {/*<h5>Cast: </h5>*/}
          {/*<p>Lorem ipsum, Dolor Sit Amet, Magnam, Possimus</p>*/}

        </div>

    );
  }
}

export default MovieDetails;