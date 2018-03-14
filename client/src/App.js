import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </div>
      </Router>
      
    );
  }
}

export default App;
