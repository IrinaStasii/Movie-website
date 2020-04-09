import React, { Component } from "react";
import "./AdvancedSearch.css";
import { generateYears } from "./AdvancedSearchUtils";
import { YearSelector } from "./components/YearSelector";
import { RuntimeSelector } from "./components/RuntimeSelector";
import { CountrySelector } from "./components/CountrySelector";
import { LanguageSelector } from "./components/LanguageSelector";
import { SubmitButton } from "./components/SubmitButton";
import { Link } from "react-router-dom";
import { MovieList } from "./MovieList";

class Form extends Component {
  state = {
    title: null,
    year: null,
    genre: null,
    minutesMin: null,
    minutesMax: null,
    country: null,
    language: null,

  };

  componentDidMount() {
    console.log("search-form-mounteed");
  }

  handleClickYear = (year) => {
    this.setState({ year });

  };
  handleClickRuntime = (minutesMin, minutesMax) => {
    this.setState({ minutesMin });
    this.setState({ minutesMax });
  }
  handleClickCountry = (country) => {
    this.setState({ country })
  }



  render() {
    console.log(this.state);

    return (
      <form className="form-wraper">
        <div className="main">
          <p>This is the form for an advanced search</p>


          <div className="clause">
            <div className="label">
              <h3>Title</h3>
            </div>
            <div className="inputs">
              <input id="title" name="title" type="text" size="75"></input>
              <br></br>
              <em>e.g. The Godfather</em>
            </div>
          </div>

          <YearSelector onClick={this.handleClickYear} />

          <div className="clause">
            <div className="label">
              <h3>Genres</h3>
            </div>
            <div className="inputs">
              <table>
                <tr>
                  <td>
                    <input id="action" type="checkbox"></input>
                    <label>Action</label>
                  </td>
                  <td>
                    <input id="adventure" type="checkbox"></input>
                    <label>Adventure</label>
                  </td>
                  <td>
                    <input id="animation" type="checkbox"></input>
                    <label>Animation</label>
                  </td>
                  <td>
                    <input id="comedy" type="checkbox"></input>
                    <label>Comedy</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="crime" type="checkbox"></input>
                    <label>Crime</label>
                  </td>
                  <td>
                    <input id="drama" type="checkbox"></input>
                    <label>Drama</label>
                  </td>
                  <td>
                    <input id="family" type="checkbox"></input>
                    <label>Family</label>
                  </td>
                  <td>
                    <input id="fantasy" type="checkbox"></input>
                    <label>Fantasy</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="horror" type="checkbox"></input>
                    <label>Horror</label>
                  </td>
                  <td>
                    <input id="mistery" type="checkbox"></input>
                    <label>Mistery</label>
                  </td>
                  <td>
                    <input id="romance" type="checkbox"></input>
                    <label>Romance</label>
                  </td>
                  <td>
                    <input id="sci-fi" type="checkbox"></input>
                    <label>SCI-FI</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="superhero" type="checkbox"></input>
                    <label>Superhero</label>
                  </td>
                  <td>
                    <input id="thriller" type="checkbox"></input>
                    <label>Thriller</label>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <RuntimeSelector onClick={this.handleClickRuntime} />
          <CountrySelector onClick={this.handleClickCountry} />
          <LanguageSelector />
          <Link to={{
            pathname: "/MovieList",
            state: {
              title: this.state.title,
              year: this.state.year,
              genre: this.state.genre,
              minutesMin: this.state.minutesMin,
              minutesMax: this.state.minutesMax,
              country: this.state.country,
              language: this.state.language
            }
          }}>
            <SubmitButton />
          </Link>

        </div>
      </form>
    );
  }
}

export default Form;
