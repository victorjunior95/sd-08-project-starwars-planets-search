import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Header />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
