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
    console.log("search-form-mounted");
  }

  handleClickTitle = (title) => {
    this.setState({ title });
    document.getElementById("runtime-min").disabled = false;
    document.getElementById("runtime-max").disabled = false;

  };

  handleClickYear = (year) => {
    this.setState({ year });
    document.getElementById("runtime-min").disabled = false;
    document.getElementById("runtime-max").disabled = false;
  };

  handleClickGenre = (genre) => {
    this.setState({ genre });
    document.getElementById("runtime-min").disabled = false;
    document.getElementById("runtime-max").disabled = false;
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
    document.getElementById("runtime-min").disabled = false;
    document.getElementById("runtime-max").disabled = false;
  };
  handleClickLanguage = (value) => {
    this.setState(state => {
      const language = state.language.concat(value);
      console.log(language)
      return {
        language,
      }
    });
    document.getElementById("runtime-min").disabled = false;
    document.getElementById("runtime-max").disabled = false;
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


    return (
      <form className="form-wrapper ">
        {/*<div className="main ">*/}
        {/*<p>This is the form for an advanced search</p>*/}
        <TitleSelector onChange={this.handleClickTitle} />
        <GenresSelector handleGenre={this.handleClickGenre.bind(this)} />
        <div className="row mt-4 mb-4 ">
          <div className="col-sm-6 col-lg-3 pb-3  ">
            <YearSelector onClick={this.handleClickYear} />
          </div>
          <div className="col-sm-6 col-lg-3 pb-3 ">
            <CountrySelector onClick={this.handleClickCountry} />
          </div>
          <div className="col-sm-6 col-lg-3 pb-3 ">
            <LanguageSelector onChange={this.handleClickLanguage} />
          </div>
          <div className="col-sm-6 col-lg-3 pb-3 ">
            <RuntimeSelector onChange={this.handleClickRuntime} />
          </div>
        </div>


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
        {/*</div>*/}
      </form>
    );
  }
}

export default Form;
