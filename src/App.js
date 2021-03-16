import React from 'react';
import './App.css';
import Tabela from './components/Tabela';
import Form from './components/Form';
import Provider from './context/Provider';
import SelectForm from './components/SelectForm';
import SelectedFilters from './components/SelectedFilters';

function App() {
  return (
    <Provider>
      <div>
        <span>Welcome to Start Wars Planets Page</span>
      </div>
      <Form />
      <SelectForm />
      <SelectedFilters />
      <Tabela />
    </Provider>
  );
}

export default App;
