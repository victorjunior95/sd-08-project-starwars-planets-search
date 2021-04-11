import React from 'react';
import './App.css';
import Table from './table/Table';
import Provider from './context/Provider';
import Form from './search/Form';
import SelectCategories from './components/SelectCategories';
import ExcludeFilter from './components/ExcludeFilter';

function App() {
  return (
    <Provider>
      <Form />
      <SelectCategories />
      <ExcludeFilter />
      <Table />
    </Provider>
  );
}

export default App;
