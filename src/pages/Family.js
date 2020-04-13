import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Family extends Component {

  constructor() {
    super();
    this.state = {genre: "Family"};
  }

  render() {
    return (
      
          <MovieInfo genre={this.state.genre}/>
       
      
    );
  }
}

export default Family;