import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Animation extends Component {

  constructor() {
    super();
    this.state = {genre: "Animation"};
  }

  render() {
    return (
      
       
          <MovieInfo genre={this.state.genre}/>
     
      
    );
  }
}

export default Animation;