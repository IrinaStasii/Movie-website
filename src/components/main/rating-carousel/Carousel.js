import React, { Component } from "react";
import './Carousel.css';


const url = "https://movies-api-siit.herokuapp.com/movies?take=100000"

class Carousel extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            currentMovieIndex: 0
        }
    }


    componentDidMount() {



        fetch(url)
            .then(results => {
                return results.json();
            }).then(data => {

                this.setState({ results: data.results })

            })

    }


    handleClick = () => {
        console.log("test1234");
        const { currentMovieIndex, results } = this.state;

        if (currentMovieIndex < results.length - 1) {
            this.setState({ currentMovieIndex: currentMovieIndex + 6 })
        } else if (currentMovieIndex > 0) {
            this.setState({ currentMovieIndex: currentMovieIndex - 6 })
        }


    }



    render() {
        console.log(this.state)
        const { currentMovieIndex, results } = this.state;

        const currentMoviesDisplayed = results[currentMovieIndex];
        return (





            <div class="card-deck" >

                <div class="arrows" role="presentation">
                    <div class="arrow-wrap" onClick={this.handleClick} role="presentation"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="arrow" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg></div>
                </div>
                {this.state.results.sort(function (a, b) { return b.imdbRating - a.imdbRating }).slice(0, 6).map((res) => {
                    return (

                        <div class="card">
                            <img src={res.Poster} class="card-img-top" alt="logo" />
                            <div class="card-body">
                                <div class="rating">
                                    <svg class="star" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p class="card-text">{res.imdbRating}</p>
                                </div>
                                <h5 class="card-title">{res.Title}</h5>


                            </div>
                        </div>

                    )
                })}

                <div class="arrows" role="presentation">
                    <div class="arrow-wrap" onClick={this.handleClick} role="presentation"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="arrow" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></div>
                </div>
            </div>





        )
    }


}

export default Carousel;


{/* <div className="info-keeper" key={res.results}>
<img src={res.Poster} alt="logo" />
<p>{res.Title}</p>
<p>{res.imdbRating}</p>

</div> */}
