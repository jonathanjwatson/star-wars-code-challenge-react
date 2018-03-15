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
    _addToFavorites = (e) => {
        console.log("Add to favorites")
        const movieID = e.target.getAttribute('data-id');
        const movieTitle = e.target.getAttribute('data-name');
        const payload = {
            name: movieTitle,
            oid: movieID
        }
        axios.post(`/api/favorites`, payload)
        .then(response => {
            console.log(response);
            alert("Successfully added your movie!")
        })
        .catch(err => {
            console.log(err.message);
            alert("Oops! Something went wrong. Please try again")
        })
    }
    render() {
        if (this.state.display) {
            return (
                <div>
                <Title movie={this.props.movie} _onClick={this._onClick}/>
                <div className="col-sm-6">
                        <ul>
                            <li>Year: {this.state.movieInfo.Year}</li>
                            <li>IMDB Rating: {this.state.movieInfo.imdbRating}</li>
                            <li>Plot: {this.state.movieInfo.Plot}</li>
                        </ul>
                        <button onClick={this._addToFavorites} data-id={this.state.movieInfo.imdbID} data-name={this.state.movieInfo.Title}>Add to Favorites</button>
                </div>
                <div className="col-sm-6">
                    <img src={this.state.movieInfo.Poster} alt={this.state.movieInfo.Title}/>
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