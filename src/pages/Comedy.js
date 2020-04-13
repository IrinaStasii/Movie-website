import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Comedy extends Component {

  constructor() {
    super();
    this.state = {genre: 'Comedy'};
  }

  render() {
    return (
      
       
          <MovieInfo genre={this.state.genre}/>
     
      
    );
  }
}

export default Comedy;