import React, { Component } from 'react';

class Results extends Component {
    _onClick = (e) => {
        console.log(e.target);
    }
    render() {
        const searchResults = this.props.searchResults
        return (
            <div>
                {searchResults.map((movie, i) => (
                    <div className="row" id={movie.imdbID} key={i}>
                        <h3 data-id={movie.imdbID} onClick={this._onClick}>{movie.Title} (Click to see more...)</h3>
                    </div>
                ))}
            </div>
        );
    }
}

export default Results;
