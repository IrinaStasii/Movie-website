import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

class Crime extends Component {

  constructor() {
    super();
    this.state = {genre: "Crime"};
  }

  render() {
    return (
      
        
          <MovieInfo genre={this.state.genre}/>
       
      
    );
  }
}

export default Crime;