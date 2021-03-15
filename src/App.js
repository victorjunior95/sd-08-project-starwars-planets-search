import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <header>
        <h1 className="title">Star Wars Planets</h1>
      </header>
      <main>
        <Table />
      </main>
    </Provider>
  );
}

export default App;
