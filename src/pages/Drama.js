import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Drama extends Component {

  constructor() {
    super();
    this.state = {genre: "Drama"};
  }

  render() {
    return (
      
       
          <MovieInfo genre={this.state.genre}/>
     
      
    );
  }
}

export default Drama;