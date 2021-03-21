import React from 'react';
import './App.css';
import listPlanetsProvider from './context/listPlantesProvider';

function App() {
  return (
    <listPlanetsProvider>
      <h1>Star Wars Planets Searcher</h1>
    </listPlanetsProvider>
  );
}

export default App;
