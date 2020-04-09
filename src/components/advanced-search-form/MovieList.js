import React, { Component } from "react";


class MovieList extends Component {



    componentDidMount() {
        console.log(this.props);
    }



    render() {
        const details = this.props;
        console.log(details);



        return (

            <p>abc</p>
        );
    }


}

export default MovieList;