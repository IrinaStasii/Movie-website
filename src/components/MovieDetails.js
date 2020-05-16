import React, {Component} from "react";
import './MovieDetails.css';
import {Link} from "react-router-dom";
import WarningModal from "./utils/WarningModal";

class MovieDetails extends Component {

  state = {
    movie: {},
  };

  componentDidMount() {
    fetch(`https://movies-app-siit.herokuapp.com/movies/${this.props.location.state.movie._id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({movie: data});
      });
  }

  render() {
    let currentMovie = this.state.movie;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 ">
            <img className="rounded mx-auto d-block pt-4 w-50" src={currentMovie.Poster} alt="Poster"/>
          </div>
          <div className="col-lg-6 my-auto ">
            <div className="container">
              <div className="row ">
                <h5>Title: </h5>
                <span>{currentMovie.Title}</span>
              </div>
              <div className="row">
                <h5>Year: </h5>
                <span>{currentMovie.Year}</span>
              </div>
              <div className="row">
                <h5>Genre: </h5>
                <span> {currentMovie.Genre}</span>
              </div>
              <div className="row">
                <h5>Language: </h5>
                <span> {currentMovie.Language}</span>
              </div>
              <div className="row">
                <h5>Country:</h5>
                <span> {currentMovie.Country}</span>
              </div>
              <div className="row">
                <h5>Type:</h5>
                <span> {currentMovie.Type}</span>
              </div>
              <div className="row">
                <h5>Runtime:</h5>
                <span> {currentMovie.Runtime}</span>
              </div>
              <div className="row">
                <h5>Description:</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, at, atque consequatur
                  consequuntur corporis
                  cum cumque cupiditate dicta ducimus eius enim et eum eveniet explicabo harum id ipsa iusto maiores
                  minima neque officia
                  quae qui quibusdam reiciendis repellendus sint, temporibus tenetur totam vitae voluptate. Ab
                  accusantium amet architecto
                  commodi consectetur consequatur, delectus ducimus ea incidunt modi officia sequi temporibus
                  voluptates? Ad at dolorum
                  facere in nemo, obcaecati officia optio perferendis quidem quisquam quo quos, repellendus repudiandae
                  similique sunt.
                  Ad aliquid asperiores atque deserunt doloribus dolorum error et fugiat incidunt iusto maxime molestiae
                  molestias, nobis
                  non praesentium quidem rem similique totam!</p>
              </div>
            </div>
            {localStorage.getItem("access_token") ? (
            <div className="row justify-content-center">
            <Link
              className="m-2"
              to={{
                pathname: "/EditForm",
                state: {
                  movie: currentMovie,
                },
              }}
            >
              <button
                id="EDIT"
                type="button"
                className="btn btn-outline-light"
              >
                EDIT
              </button>
            </Link>
            <WarningModal
              key={currentMovie._id}
              movieId={currentMovie._id}
              toggleOpenWarningModal={this.toggleOpenWarningModal}
              opened={this.state.isWarningModalOpen}
            />
            </div>
            ) : ("")}
          </div>
        </div>
      </div>

    );
  }
}

export default MovieDetails;