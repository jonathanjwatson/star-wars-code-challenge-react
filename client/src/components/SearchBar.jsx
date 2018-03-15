import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    render() {
        return (
            <div>
            <div className="row">
                <div className="col-sm-6">
                    <form id="movie" onSubmit={this.props._handleSubmit}>
                            <label htmlFor="movie-name">Search for a movie</label>
                            <input type="text" id="movie-name" onChange={this.props._handleChange} />
                            <input id="movie-search" type="submit" value="Search" />   
                    </form>
                </div>
                <div className="col-sm-6">
                    <Link to="/favorites"><button id="view-favorites">View Favorites</button></Link>
                </div>
        
            </div>
            </div>
        );
    }
}

export default SearchBar;