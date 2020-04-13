import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Fantasy extends Component {

  constructor() {
    super();
    this.state = {genre: "Fantasy"};
  }

  render() {
    return (
      
       
          <MovieInfo genre={this.state.genre}/>
       
      
    );
  }
}

export default Fantasy;