import React, { Component } from "react";
import NewMovieForm from "../components/new movie/New-movie form";

class NewMovie extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <NewMovieForm />
                </div>
            </div>
        );
    }
}
export default NewMovie;