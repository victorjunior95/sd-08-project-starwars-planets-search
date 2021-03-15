import React from 'react';
import { StarWarsProvider } from './contexts/StarWarsContext';

import Table from './components/Table';
import NameFilter from './components/NameFilter';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
