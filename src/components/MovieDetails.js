import React, {Component} from "react";
import './MovieDetails.css';

class MovieDetails extends Component {

  render() {
    let currentMovie = this.props.location.state.movie;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 ">
            <img className="rounded mx-auto d-block pt-4 w-50" src={currentMovie.poster} alt="Poster"/>
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
                    non praesentium quidem rem similique totam!</p>
              </div>
            </div>
          </div>
        </div>
        </div>

    );
  }
}

export default MovieDetails;