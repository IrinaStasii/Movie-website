import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Thriller extends Component {

  constructor() {
    super();
    this.state = {genre: "Thriller"};
  }

  render() {
    return (
      
       
          <MovieInfo genre={this.state.genre}/>
     
      
    );
  }
}

export default Thriller;