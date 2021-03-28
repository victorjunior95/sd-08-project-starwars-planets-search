import React from 'react';

import { StarWarsPlanets } from './provider/PlanetsContext';
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
