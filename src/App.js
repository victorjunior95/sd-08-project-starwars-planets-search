import React, { useState } from 'react';
import './App.css';
import PlanetContext from './components/Context';

import Table from './components/Table';

function App() {
  return (
    <PlanetContext.Provider>
      <Table />
    </PlanetContext.Provider>
  );
}

export default App;
