import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import "./AllCategories.css";

class SearchByTitleNavbar extends Component {
  constructor() {
    super();
  }

  render() {
    let title = this.props.location.title;

    return (
      <div>
        <p className="searchByTitleNavbar">Search results for title: {title}</p>
        <MovieInfo title={title}/>
      </div>
    );
  }
}

export default SearchByTitleNavbar;
