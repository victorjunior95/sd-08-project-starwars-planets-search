import React from 'react';
import './App.css';
import Tabela from './components/Tabela';
import Form from './components/Form';
import Provider from './context/Provider';
import SelectForm from './components/SelectForm';
import SelectedFilters from './components/SelectedFilters';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <div>
          Welcome to Start Wars Planets Page
        </div>
        <Form />
        <SelectForm />
        <SelectedFilters />
        <Tabela />
      </div>
    </Provider>
  );
}

export default App;
