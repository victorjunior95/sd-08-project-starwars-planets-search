import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './component/Table';
import NameFilter from './component/NameFilter';
import NumericFilter from './component/NumericFilter';

function App() {
  return (
    <Provider>
      <main>
        <NameFilter />
        <NumericFilter />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
