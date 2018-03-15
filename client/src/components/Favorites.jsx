import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FavoriteRow from './FavoriteRow';

class Favorites extends Component {
    state = {
        movieArray: []
    }
    componentWillMount() {
        axios.get('/favorites')
        .then(response => {
            console.log(response.data);
            const newState = {...this.state};
            newState.movieArray = response.data;
            this.setState(newState)
        })
    }
    render() {
        const movieArray = this.state.movieArray;
        return (
            <div>
            <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                    <Link to="/">Return Home</Link>
                </div>
            </div>
            <div>
            {this.state.movieArray.map((movie, i) => (
                <FavoriteRow movie={movie} key={i} />
                ))}
            </div>
            </div>
        );
    }
}

export default Favorites;