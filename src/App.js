import React from 'react';
import { StarWarsProvider } from './contexts/StarWarsContext';

import Table from './components/Table';
import NameFilter from './components/NameFilter';
import ColumnFilter from './components/ColumnFilter';
import FiltersList from './components/FiltersList';
import OrderByColumn from './components/OrderByColumn';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <ColumnFilter />
      <OrderByColumn />
      <FiltersList />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
