import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Adventure extends Component {

  constructor() {
    super();
    this.state = {genre: 'Adventure'};
  }

  render() {
    return (
      
        
          <MovieInfo genre={this.state.genre}/>
      
      
    );
  }
}

export default Adventure;
