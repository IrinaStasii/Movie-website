import React, { Component } from "react";
import "./Form.css";

class NewMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Year: "",
            Runtime: "",
            Genre: "",
            Language: "",
            Country: "",
            Poster: "",
            imdbRating: "",
            imdbVotes: "",
            imdbID: "",
            Type: ""

        };
    }
    componentDidMount() {
        let token = localStorage.getItem("access_token");
        console.log(token);
        console.log(this.state)
    }

    handleChangeTitle = (event) => {
        this.setState({ Title: event.target.value });
    }
    handleChangeYear = (event) => {
        this.setState({ Year: event.target.value });
    }
    handleChangeRuntime = (event) => {
        this.setState({ Runtime: event.target.value + " min" });
    }
    handleChangeGenre = (event) => {
        this.setState({ Genre: event.target.value });
    }
    handleChangeLanguage = (event) => {
        this.setState({ Language: event.target.value });
    }
    handleChangeCountry = (event) => {
        this.setState({ Country: event.target.value });
    }
    handleChangePoster = (event) => {
        this.setState({ Poster: event.target.value });
    }
    handleChangeRating = (event) => {
        this.setState({ imdbRating: event.target.value });
    }
    handleChangeVotes = (event) => {
        this.setState({ imdbVotes: event.target.value });
    }
    handleChangeImdbId = (event) => {
        this.setState({ imdbID: event.target.value });
    }
    handleChangeType = (event) => {
        this.setState({ Type: event.target.value });
    }

    addNewMovie() {
        let token = localStorage.getItem("access_token");
        const url = "https://movies-app-siit.herokuapp.com/movies"
        const data = this.state;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        console.log(data)

        console.log(JSON.stringify(data))

    }

    render() {
        return (
            <div className="wrap">
                <p>Add Movie Form</p>

                <form>
                    <label>
                        <p>Title</p>
                        <input type="text" id="title" onChange={this.handleChangeTitle}></input>
                    </label>
                    <label>
                        <p>Year</p>
                        <input type="number" id="year" onChange={this.handleChangeYear}></input>
                    </label>
                    <label>
                        <p>Runtime</p>
                        <input type="number" onChange={this.handleChangeRuntime}></input>
                    </label>
                    <label>
                        <p>Genre</p>
                        <input type="text" onChange={this.handleChangeGenre}></input>
                    </label>
                    <label>
                        <p>Language</p>
                        <input type="text" onChange={this.handleChangeLanguage}></input>
                    </label>
                    <label>
                        <p>Country</p>
                        <input type="text" onChange={this.handleChangeCountry}></input>
                    </label>
                    <label>
                        <p>Poster</p>
                        <input type="text" onChange={this.handleChangePoster}></input>
                    </label>
                    <label>
                        <p>IMDB Rating</p>
                        <input type="number" step="any" onChange={this.handleChangeRating}></input>
                    </label>
                    <label>
                        <p>IMDB Votes</p>
                        <input type="number" onChange={this.handleChangeVotes}></input>
                    </label>
                    <label>
                        <p>IMDB ID</p>
                        <input type="text" onChange={this.handleChangeImdbId}></input>
                    </label>
                    <label>
                        <p>Type</p>
                        <input type="text" onChange={this.handleChangeType}></input>
                    </label>
                    <br></br>
                    <label>
                        <button type="button" onClick={() => { this.addNewMovie() }}>Submit</button>
                    </label>

                </form>







            </div>

        )
    }



}

export default NewMovieForm;