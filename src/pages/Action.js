import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Action extends Component {

  constructor() {
    super();
    this.state = {genre: 'Action'};
  }

  render() {
    return (
      
          <MovieInfo genre={this.state.genre}/>
      
    );
  }
}

export default Action;
