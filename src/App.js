import React from 'react';
import FilterPlanetName from './component/FilterPlanetName';
import NumericFilter from './component/NumericFilter';
import Table from './component/Table';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <FilterPlanetName />
      <NumericFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
