import React from 'react';
import './App.css';
import TableListPlanets from './components/Table';

import PlantesProvider from './context/PlantesProvider';

function App() {
  return (
    <PlantesProvider>
      <h1>Star Wars Planet Searcher</h1>
      <TableListPlanets />
    </PlantesProvider>
  );
}

export default App;
