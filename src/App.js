import React, { useState } from 'react';
import './App.css';

import Home from './Components/Home';

import SWContext from './Context/SWContext';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({});
  const [isFiltered, setIsFiltered] = useState(false);

  const getPlanets = () => {
    fetch('https://swapi.dev/api/planets/')
      .then((data) => data.json())
      .then((response) => setPlanets(response.results));
  };

  const filterByName = (e) => {
    if (e.target.value === '') return setIsFiltered(false);
    setFilteredPlanets(planets.filter((planet) => planet.name.includes(e.target.value)));
    setIsFiltered(true);
  };
  return (
    <SWContext.Provider
      value={ {
        planets,
        filteredPlanets,
        filters,
        isFiltered,
        filterByName,
        getPlanets,
        setFilters,
        setFilteredPlanets,
        setIsFiltered,
      } }
    >
      <h1>Star Wars Planet Search</h1>
      <Home />
    </SWContext.Provider>
  );
}

export default App;
