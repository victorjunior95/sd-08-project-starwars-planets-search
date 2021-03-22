import React from 'react';
import PlanetContext from './context/PlanetContext';
import Table from './pages/table';

function App() {
  return (
    <PlanetContext>
      <Table />
    </PlanetContext>
  );
}

export default App;
