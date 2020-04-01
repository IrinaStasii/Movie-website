import React, {Component} from 'react';
import './Poster.css'


class Poster extends Component {
  state = {
    movies: [],
    currentMovieIndex: 0,
   
  };
   

  fetchData() {
    fetch('https://movies-api-siit.herokuapp.com/movies?take=20&Type=series')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        let movies = [];
        for (let movie of data.results) {
          movies.push(new Movie(movie.Title, movie.Poster));
        }
        this.setState({movies: movies});
      });
    
  };

  componentDidMount() {
    console.log("mounted");
    this.fetchData();

  };


  handleNextMovie = () => {
    const {currentMovieIndex, movies} = this.state;

    if (currentMovieIndex < movies.length - 1) {
      this.setState({currentMovieIndex: currentMovieIndex + 1});
    }
  };

  handlePreviousMovie = () => {
    const {currentMovieIndex} = this.state;

    if (currentMovieIndex > 0) {
      this.setState({currentMovieIndex: currentMovieIndex - 1});
    }
  };

  render() {
     const {movies, currentMovieIndex} = this.state;
     const currentMovie = movies[currentMovieIndex];

    return (
      <div className="carousel">
           {currentMovie ? (
             <div className="carousel-inner d-flex justify-content-center">
               <div className={`carousel-control-prev carousel-control-prev-icon ${currentMovieIndex === 0 ? "disabled" : ""}`}
                   onClick={this.handlePreviousMovie} >
                 </div>
              
               {/* <div class="carousel-caption d-none d-md-block">{currentMovie.title}</div> */}
               <img className="rounded mx-auto d-block" src={currentMovie.poster} alt="poster"/>
      
                 <div className={`carousel-control-next carousel-control-next-icon ${currentMovieIndex === movies.length - 1 ? "disabled" : ""}`}
                   onClick={this.handleNextMovie} >
                 </div>
             </div>
            
           ) : (
           <p>Loading</p>
           )}
      </div>
     
    )
           }}
    

 export default Poster;

 class Movie {
   constructor(title, poster) {
     this.title = title;
     this.poster = poster;
   }
 }