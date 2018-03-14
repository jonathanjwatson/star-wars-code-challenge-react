import React, { Component } from 'react';
import axios from 'axios';
import ResultRow from './ResultRow';

class Results extends Component {
    state = {
        movieInfo: {}
    }
    _onClick = (e) => {
        const movieID = e.target.getAttribute('data-id');
        axios.get(`https://www.omdbapi.com/?i=${movieID}&plot=short&apikey=aaa8096b`)
        .then(response => {
            console.log(response)
            let newState = {...this.state};
            newState.movieInfo = response.data;
            this.setState(newState);
        })
    }
    render() {
        const searchResults = this.props.searchResults
        return (
            <div>
                {searchResults.map((movie, i) => (
                    <div className="row" id={movie.imdbID} key={i}>
                        <h3 data-id={movie.imdbID} onClick={this._onClick}>{movie.Title} (Click to see more...)</h3>
                        <ResultRow movieInfo={this.state.movieInfo}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Results;
