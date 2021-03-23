import React from 'react';
import './App.css';
import { TableListPlanets, FilterByNamePlanet } from './components';

import PlantesProvider from './context/PlantesProvider';

function App() {
  return (
    <PlantesProvider>
      <h1>Star Wars Planet Searcher</h1>
      <FilterByNamePlanet />
      <TableListPlanets />
    </PlantesProvider>
  );
}

export default App;
