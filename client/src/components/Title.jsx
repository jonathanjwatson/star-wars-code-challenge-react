import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="row" id={this.props.movie.imdbID} key={this.props.movie.imdbID}>
                <h3 data-id={this.props.movie.imdbID} onClick={this.props._onClick}>{this.props.movie.Title} (Click to see more...)</h3>
            </div>
        );
    }
}

export default Title;