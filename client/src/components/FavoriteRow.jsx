import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';

class FavoriteRow extends Component {
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
        const movie = this.props.movie;
        movie.Title = movie.name;
        movie.imdbID = movie.oid;
        if (this.state.display) {
            return (
                <div>
                <Title movie={movie} _onClick={this._onClick}/>
                <div className="col-sm-6">
                        <ul>
                            <li>Year: {this.state.movieInfo.Year}</li>
                            <li>IMDB Rating: {this.state.movieInfo.imdbRating}</li>
                            <li>Plot: {this.state.movieInfo.Plot}</li>
                        </ul>
                    
                </div>
                <div className="col-sm-6">
                    <img src={this.state.movieInfo.Poster} alt={this.state.movieInfo.Title}/>
                </div>

                </div>
            )
        } else {
            return (
                <Title movie={movie} _onClick={this._onClick}/>
            )
        }
}
}

export default FavoriteRow;