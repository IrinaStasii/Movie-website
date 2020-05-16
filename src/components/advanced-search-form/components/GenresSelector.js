import React, { Component } from "react";
import "../AdvancedSearch.css";
import Cookies from "js-cookie";

class GenresSelector extends Component {
  state = {
    checked: {}
  };

  onSelectedChange = (genre, index) => {
    this.setState(previousState => ({
      checked: {
        ...previousState.checked,
        [index]: !previousState.checked[index],
        genre: !previousState.checked[index] ? genre : null
      }
    }), () => {
      this.props.handleGenre(this.state.checked.genre)
    });
  };


  render() {
    let genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama",
      "Family", "Fantasy", "Horror", "Mistery", "Romance", "SCI-FI", "Superhero",
      "Thriller"];
    const { checked } = this.state;
    const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
    // const disabled = checkedCount > 0;

    return (
      <div>
        <div className="label mt-4 mb-4">
          <h3>Genres</h3>
        </div>
        <div className="box ">
          {genres.map((genre, index) => (
            <label className="col-md-3" key={index}>
              <input
                key={index}
                value={Cookies.get("movieGenre") || ""}
                onChange={() => this.onSelectedChange(genre, index)}
                type="checkbox"
                checked={checked[index] || false}
              // disabled={!checked[index] && disabled}
              // style={!checked[index] && disabled ? {"opacity": "0.5"} : {"opacity": "1"}}
              />
              <span>{genre}</span>
            </label>
          ))}
        </div>
      </div>
    )
  }
}

export default GenresSelector;
