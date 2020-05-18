import React, { Component } from "react";
import "./Form.css";
import { handleImputs, shouldAddMovie } from "./New-movie utils";

class NewMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Year: "",
      Runtime: "",
      Genre: null,
      Language: "",
      Country: "",
      Poster: "",
      imdbRating: "",
      imdbVotes: "",
      imdbID: "",
      Type: "",
      submitted: false,
    };
  }
  componentDidMount() {
  }

  handleChangeTitle = (event) => {
    this.setState({ Title: event.target.value, submitted: false });
  };
  handleChangeYear = (event) => {
    this.setState({ Year: event.target.value, submitted: false });
  };
  handleChangeRuntime = (event) => {
    this.setState({ Runtime: event.target.value, submitted: false });
  };
  handleChangeGenre = (event) => {
    this.setState({ Genre: event.target.value, submitted: false })
  }
  handleChangeLanguage = (event) => {
    this.setState({ Language: event.target.value, submitted: false });
  };
  handleChangeCountry = (event) => {
    this.setState({ Country: event.target.value, submitted: false });
  };
  handleChangePoster = (event) => {
    this.setState({ Poster: event.target.value, submitted: false });
  };
  handleChangeRating = (event) => {
    this.setState({ imdbRating: event.target.value, submitted: false });
  };
  handleChangeVotes = (event) => {
    this.setState({ imdbVotes: event.target.value, submitted: false });
  };
  handleChangeImdbId = (event) => {
    this.setState({ imdbID: event.target.value, submitted: false });
  };
  handleChangeType = (event) => {
    this.setState({ Type: event.target.value, submitted: false });
  };

  setSubmitted() {
    this.setState({ submitted: true });
  }
  handleImputs() {
    this.setState({
      Title: "",
      Year: "",
      Runtime: "",
      Genre: null,
      Language: "",
      Country: "",
      Poster: "",
      imdbRating: "",
      imdbVotes: "",
      imdbID: "",
      Type: "",
      submitted: false,
    })
  }

  addNewMovie() {
    this.setSubmitted();
    const shouldUpdate = shouldAddMovie(this.state);

    if (shouldUpdate) {
      let token = localStorage.getItem("access_token");
      console.log(token)
      const url = "https://movies-app-siit.herokuapp.com/movies";
      const data = {
        Title: this.state.Title,
        Year: this.state.Year,
        Runtime: this.state.Runtime + " min",
        Genre: this.state.Genre,
        Language: this.state.Language,
        Country: this.state.Country,
        Poster: this.state.Poster,
        imdbRating: this.state.imdbRating,
        imdbVotes: Number(this.state.imdbVotes).toLocaleString("en-US"),
        imdbID: this.state.imdbID,
        Type: this.state.Type
      };
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Your movie have been successfully added to the database!")
          }
          else {
            alert("Something went wrong :(. Please try again!")
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.handleImputs()
    }
  }

  render() {
    const { Title, Year, Runtime, Genre, Language, Country, Poster, imdbRating, imdbVotes, imdbID, Type, submitted } = this.state;
    const Genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama",
      "Family", "Fantasy", "Horror", "Mistery", "Romance", "SCI-FI", "Superhero",
      "Thriller"];

    return (
      <div className="continer">
        <form className="container bg-light p-5 h-auto">
          <p>Add Movie Form</p>
          <div className="form-row">
            <label className="col-sm-4">
              <p>Title</p>
              <input
                className="form-control"
                type="text"
                id="title"
                onChange={this.handleChangeTitle}
                value={Title}
                style={{
                  borderColor: submitted
                    ? Title
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
            <label className="col-sm-4">
              <p>Year</p>
              <input
                value={Year}
                className="form-control"
                type="number"
                id="year"
                onChange={this.handleChangeYear}
                style={{
                  borderColor: submitted
                    ? Year
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
            <label className="col-sm-4">
              <p>Runtime</p>
              <input
                value={Runtime}
                className="form-control"
                id="runtime"
                onChange={this.handleChangeRuntime}
                type="number"
                style={{
                  borderColor: submitted
                    ? Runtime
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
          </div>
          <div className="form-row">
            <label className="col-sm-4">
              <p>Genre</p>
              <select type="text"
                id="genre"
                style={{
                  borderColor: submitted
                    ? Genre
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
                selected="selected" className="form-control" onChange={(event) => this.handleChangeGenre(event)}
              >
                {Genres.map((genre, index) => (
                  <option
                    key={index}
                    value={genre}
                  >
                    {genre}
                  </option>
                ))}
                <option hidden disabled selected value>Select an option</option>
              </select>
            </label>
            <label className="col-sm-4">
              <p>Language</p>
              <input
                className="form-control"
                type="text"
                id="language"
                onChange={this.handleChangeLanguage}
                value={Language}
                style={{
                  borderColor: submitted
                    ? Language
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
            <label className="col-sm-4">
              <p>Country</p>
              <input
                className="form-control"
                type="text"
                id="country"
                onChange={this.handleChangeCountry}
                value={Country}
                style={{
                  borderColor: submitted
                    ? Country
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
          </div>
          <div className="form-row">
            <label className="col-sm-4">
              <p>Poster</p>
              <input
                className="form-control"
                type="text"
                id="poster"
                onChange={this.handleChangePoster}
                value={Poster}
                style={{
                  borderColor: submitted
                    ? Poster
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
            <label className="col-sm-4">
              <p>IMDB Rating</p>
              <input
                className="form-control"
                type="number"
                id="rating"
                step="any"
                onChange={this.handleChangeRating}
                value={imdbRating}
                style={{
                  borderColor: submitted
                    ? Number(imdbRating) <= 10 && Number(imdbRating) > 0
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
            <label className="col-sm-4">
              <p>IMDB Votes</p>
              <input
                className="form-control"
                type="number"
                id="votes"
                onChange={this.handleChangeVotes}
                value={imdbVotes}
                style={{
                  borderColor: submitted
                    ? imdbVotes
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
          </div>

          <div className="form-row">
            <label className="col-sm-4">
              <p>IMDB ID</p>
              <input
                className="form-control"
                type="text"
                id="imdbID"
                onChange={this.handleChangeImdbId}
                value={imdbID}
                style={{
                  borderColor: submitted
                    ? imdbID
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
            <label className="col-sm-4">
              <p>Type</p>
              <input
                className="form-control"
                type="text"
                id="type"
                onChange={this.handleChangeType}
                value={Type}
                style={{
                  borderColor: submitted
                    ? Type
                      ? "#ced4da"
                      : "red"
                    : "#ced4da",
                }}
              ></input>
            </label>
          </div>
          <label className="col-sm-4">
            <button
              className="btn btn-secondary mr-5"
              type="button"
              onClick={() => {
                this.addNewMovie();
              }}
            >
              Submit
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
