import React, { Component } from "react";
import "./AdvancedSearch.css";
import { TitleSelector } from "./components/TitleSelector";
import GenresSelector from "./components/GenresSelector";
import { YearSelector } from "./components/YearSelector";
import { RuntimeSelector } from "./components/RuntimeSelector";
import { CountrySelector } from "./components/CountrySelector";
import { LanguageSelector } from "./components/LanguageSelector";
import { SubmitButton } from "./components/SubmitButton";
import { Link } from "react-router-dom";

class Form extends Component {
  state = {
    title: null,
    year: null,
    genre: null,
    minutesMin: null,
    minutesMax: null,
    country: [],
    language: [],
  };

  componentDidMount() {
    console.log("search-form-mounteed");
  }

  handleClickTitle = (title) => {
    this.setState({ title });
  };

  handleClickYear = (year) => {

    this.setState({ year });
  };



  handleClickGenre = (genre) => {
    this.setState({ genre });
  };

  handleClickRuntime = (value, type) => {
    console.log(value, type);
    this.setState({ [type]: value });
  };

  handleClickCountry = (value) => {
    this.setState(state => {
      const country = state.country.concat(value);
      return {
        country,
      }
    });
  };
  handleClickLanguage = (value) => {
    this.setState(state => {
      const language = state.language.concat(value);
      return {
        language,
      }
    });
  };

  handleSubmit = () => {
    this.resetState();
  }
  resetState = () => {
    this.setState({
      title: null,
      year: null,
      genre: null,
      minutesMin: null,
      minutesMax: null,
      country: null,
      language: null,
    })
  }
  render() {
    console.log(this.state);

    return (
      <form className="form-wraper">
        <div className="main">
          <p>This is the form for an advanced search</p>
          <TitleSelector onChange={this.handleClickTitle} />
          <YearSelector onClick={this.handleClickYear} />
          <GenresSelector handleGenre={this.handleClickGenre.bind(this)} />
          <RuntimeSelector onClick={this.handleClickRuntime} />
          <CountrySelector onChange={this.handleClickCountry} />
          <LanguageSelector onChange={this.handleClickLanguage} />
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
            <SubmitButton onClick={this.handleSubmit} />

          </Link>
        </div>
      </form>
    );
  }
}

export default Form;
