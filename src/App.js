import React from 'react';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';
import StarWarsPlanets from './pages/StarWarsPlanets';
import './App.css';

function App() {
  return (
    <div>
      <StarWarsPlanetsProvider>
        <StarWarsPlanets />
      </StarWarsPlanetsProvider>
    </div>
  );
}

export default App;
