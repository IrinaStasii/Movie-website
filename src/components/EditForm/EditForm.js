import React, {Component} from "react";

class EditForm extends Component {
  static contextTypes = {
    router: () => true,
  };
  state = {
    id: "",
    title: "",
    year: "",
    genre: "",
    language: "",
    runtime: "",
  };

  componentDidMount() {
    this.setState({id: this.props.location.state.movie._id});
    this.setState({title: this.props.location.state.movie.Title});
    this.setState({year: this.props.location.state.movie.Year});
    this.setState({genre: this.props.location.state.movie.Genre});
    this.setState({language: this.props.location.state.movie.Language});
    this.setState({runtime: this.props.location.state.movie.Runtime});
    this.setState({token: "access_token" in localStorage ? localStorage.getItem("access_token") : ""})
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps)
  }

  saveMovie(that) {
    const url = `https://movies-app-siit.herokuapp.com/movies/${that.state.id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-Auth-Token": that.state.token
      },
      body: JSON.stringify({
        "Title": that.state.title,
        "Year": that.state.year,
        "Type": that.state.genre,
        "Language": that.state.language,
        "Runtime": that.state.runtime
      })
    })
      .then(response => response.json())
      .then(json => {
        // if error add a popup nice message
        console.log(json);
        that.props.history.goBack();
      })
  };

  render(){
    return (
      <form className="container bg-light p-5 h-auto">
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" type="text" value={this.state.title} onChange={(e) => {
            this.setState({title: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Year</label>
          <input className="form-control" type="number" value={this.state.year} onChange={(e) => {
            this.setState({year: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input className="form-control" value={this.state.genre} onChange={(e) => {
            this.setState({genre: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Language</label>
          <input className="form-control" value={this.state.language} onChange={(e) => {
            this.setState({language: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Runtime</label>
          <input className="form-control" value={this.state.runtime} onChange={(e) => {
            this.setState({runtime: e.target.value})
          }}/>
        </div>
        <div className="text-center">
          <button className="btn btn-secondary mr-5" type="button" onClick={() => this.saveMovie(this)}>Save</button>
        </div>
      </form>
    );
  }
}

export default EditForm;
