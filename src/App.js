import React from 'react';
import './App.css';
import SearchByName from './components/SearchByName';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <section>
        <div>
          <SearchByName />
        </div>
        <Table />
      </section>
    </PlanetsProvider>
  );
}

export default App;
