import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './component/Table';
import NameFilter from './component/NameFilter';

function App() {
  return (
    <Provider>
      <main>
        <NameFilter />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
