import React from 'react';

import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';

import './App.css';

const App = () => (
  <StarWarsProvider>
    <Table />
  </StarWarsProvider>
);

export default App;
