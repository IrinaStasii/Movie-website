import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Mystery extends Component {

  constructor() {
    super();
    this.state = {genre: "Mystery"};
  }

  render() {
    return (
      
        
          <MovieInfo genre={this.state.genre}/>
     
      
    );
  }
}

export default Mystery;