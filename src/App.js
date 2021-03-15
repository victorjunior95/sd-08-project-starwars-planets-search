import React from 'react';
import FilterByName from './components/FilterByName';
import PlanetsDataTable from './components/PlanetsDataTable';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <FilterByName />
      <PlanetsDataTable />
    </StarWarsProvider>
  );
}

export default App;
