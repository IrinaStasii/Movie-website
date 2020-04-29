import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Scifi extends Component {

  constructor() {
    super();
    this.state = {genre: "Sci-Fi"};
  }

  render() {
    return (
      
        
          <MovieInfo genre={this.state.genre}/>
     
      
    );
  }
}

export default Scifi;