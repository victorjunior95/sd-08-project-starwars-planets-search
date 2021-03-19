import React from 'react';
import './App.css';

import Home from './Components/Home';

import SWContext from './Context/SWContext';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      planets: [],
    };

    this.setPlanets = this.setPlanets.bind(this);
  }

  setPlanets() {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((data) => data.json())
      .then((response) => this.setState({ planets: response.results }));
  }

  render() {
    return (
      <SWContext.Provider value={ { ...this.state, setPlanets: this.setPlanets } }>
        <h1>Star Wars Planet Search</h1>
        <Home />
      </SWContext.Provider>
    );
  }
}

export default App;
