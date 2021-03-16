import React from 'react';
import './App.css';
import PlanetsColumn from './components/table/PlanetsColumn';
import PlanetsProvider from './context/PlantesContext';

function App() {
  return (
    <PlanetsProvider>
      <PlanetsColumn />
    </PlanetsProvider>
  );
}

export default App;
