import React from 'react';
import './App.css';

import SearchPlanetsProvider from './context/SearchPlanetsProvider';
import PlanetsSTARWARS from './pages/PlanetsSTARWARS';

function App() {
  return (
    <SearchPlanetsProvider>
      <PlanetsSTARWARS />
    </SearchPlanetsProvider>
  );
}

export default App;
