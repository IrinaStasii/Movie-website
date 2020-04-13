import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Romance extends Component {

  constructor() {
    super();
    this.state = {genre: "Romance"};
  }

  render() {
    return (
      
      
          <MovieInfo genre={this.state.genre}/>

      
    );
  }
}

export default Romance;