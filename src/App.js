import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import StarWarsPlanetTable from './components/StarWarsTable';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Search />
      <StarWarsPlanetTable />
    </StarWarsProvider>
  );
}

export default App;
