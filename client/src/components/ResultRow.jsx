import React, { Component } from 'react';

class ResultRow extends Component {
    render() {
        if (this.props.movieInfo) {
            return (
                <div>
                This is where my information goes. 
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default ResultRow;