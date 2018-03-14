import React, { Component } from 'react';
import ResultRow from './ResultRow';

class Results extends Component {
    render() {
        const searchResults = this.props.searchResults
        return (
            <div>
                {searchResults.map((movie, i) => (
                    <ResultRow movie={movie} key={i} />
                ))}
            </div>
        );
    }
}

export default Results;
