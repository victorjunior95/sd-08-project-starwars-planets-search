import React from 'react';

import { StarWarsPlanets } from './services/PlanetsContext';
import PlanetsTable from './components/table';

function App() {
  return (
    <StarWarsPlanets>
      <h2>Planets</h2>
      <PlanetsTable />
    </StarWarsPlanets>
  );
}

export default App;
