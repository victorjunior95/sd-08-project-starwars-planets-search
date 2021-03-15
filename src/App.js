import React from 'react';
import './App.css';
import NameFilter from './component/NameFilter';
import Table from './component/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <NameFilter />
      <Table />
    </Provider>
  );
}

export default App;
