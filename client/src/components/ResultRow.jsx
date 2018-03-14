import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';

class ResultRow extends Component {
    state = {
        movieInfo: {},
        display: false
    }
    _onClick = (e) => {
        const movieID = e.target.getAttribute('data-id');
        axios.get(`https://www.omdbapi.com/?i=${movieID}&plot=short&apikey=aaa8096b`)
        .then(response => {
            console.log(response.data)
            let newState = {...this.state};
            newState.movieInfo = response.data;
            newState.display = !this.state.display;
            this.setState(newState);
        })
    }
    render() {
        if (this.state.display) {
            return (
                <div>
                <Title movie={this.props.movie} _onClick={this._onClick}/>
                <div className="col-sm-6">
                    <p>
                        <ul>
                            <li>Year: {this.props.movie.Year}</li>
                            <li>IMDB Rating: {this.props.movie.imdbRating}</li>
                            <li>Plot: {this.props.movie.Plot}</li>
                        </ul>
                    </p>
                </div>
                <div className="col-sm-6">
                    <img src={this.props.movie.Poster} />
                </div>

                </div>
            )
        } else {
            return (
                <Title movie={this.props.movie} _onClick={this._onClick}/>
            )
        }
}
}

export default ResultRow;