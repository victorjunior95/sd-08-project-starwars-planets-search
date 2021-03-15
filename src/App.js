import React from 'react';
import './App.css';
import PlanetsProvider from './contextAPI/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      App
    </PlanetsProvider>
  );
}

export default App;
