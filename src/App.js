import React from 'react';
import './App.css';
import SwHeader from './components/SwHeader';
import SwTable from './components/SwTable';
import { ContextFromStarWarsProvider } from './contexts/ContextFromStarWars';

function App() {
  return (
    <ContextFromStarWarsProvider>
      <div className="swContainer">
        <SwHeader />
        <SwTable />
      </div>
    </ContextFromStarWarsProvider>
  );
}

export default App;
