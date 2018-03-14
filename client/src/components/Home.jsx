import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Results from './Results';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "",
            searchResults: []
        }
    }

    _handleChange = (e) => {
        let newState = {...this.state};
        newState.searchTerm = e.target.value;
        this.setState(newState);
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = this.state.searchTerm;
        axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=aaa8096b`)
        .then(response => {
            console.log(response.data.Search)
            let newState = {...this.state};
            newState.searchResults = response.data.Search;
            this.setState(newState);
        })
    }
    render() {
        return (
            <div>
                <SearchBar _handleChange={this._handleChange} _handleSubmit={this._handleSubmit}/>
                <Results searchResults={this.state.searchResults} />
            </div>
        );
    }
}

export default Home;