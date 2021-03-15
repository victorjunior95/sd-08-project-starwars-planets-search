import React from 'react';
import PlanetsDataTable from './components/PlanetsDataTable';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <PlanetsDataTable />
    </StarWarsProvider>
  );
}

export default App;
