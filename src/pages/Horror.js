import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Horror extends Component {

  constructor() {
    super();
    this.state = {genre: "Horror"};
  }

  render() {
    return (
      
     
          <MovieInfo genre={this.state.genre}/>
    
      
    );
  }
}

export default Horror;