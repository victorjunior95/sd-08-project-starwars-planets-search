import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import StarWarsPlanetTable from './components/StarWarsTable';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <StarWarsPlanetTable />
    </StarWarsProvider>
  );
}

export default App;
