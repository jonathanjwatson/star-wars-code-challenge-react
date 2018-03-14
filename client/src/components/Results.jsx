import React, { Component } from 'react';
import axios from 'axios';
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
