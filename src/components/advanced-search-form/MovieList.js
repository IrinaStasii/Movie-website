import React, { Component } from "react";



class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            currentMovieIndex: 0
        }
    }


    componentDidMount() {
        console.log(this.props);
        let url = "https://movies-api-siit.herokuapp.com/movies?"
        let minutesMin = this.props.location.state.minutesMin;
        let country = this.props.location.state.country;
        let language = this.props.location.state.language;

        if (country) {
            url = url + "Country=" + country
        }
        if (language) {
            url = url + "&Language=" + language
        }
        // if (minutesMin) {
        //     url = url + "Runtime=" + minutesMin
        // }
        console.log(url);


        fetch(url)
            .then(results => {
                return results.json();
            }).then(movie => {

                this.setState({ results: movie.results })

            })


    }

    render() {
        const details = this.props;
        console.log(details);
        console.log(this.state.results)

        return (

            <div className="movie-list-container">
                <h1>Here are your search results </h1>
                {this.state.results.map((movie) => {

                    let moviePoster = "no poster found";
                    if (movie.Poster && movie.Poster !== "N/A") {
                        moviePoster = movie.Poster;
                    }

                    return (
                        <div className="movie-info" key={movie._id}>
                            <img src={moviePoster} alt="poster" />
                            <p>{movie.Title}</p>
                            <p>Genre: {movie.Genre}</p>
                            <p>Year: {movie.Year}</p>
                            <p>Country:{movie.Country}</p>
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

export default MovieList;