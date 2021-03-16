import React from 'react';
import './App.css';
import Provider from './context/Provider';
import TablePage from './pages/TablePage';
import SearchBar from './components/SearchBar';

function App() {
  return (

  // 4º importo o provider e passo ele fora de todos os componentes
    <Provider>
      {/* 7º importo o componente para renderizar na tela */}
      <SearchBar />
      <TablePage />
    </Provider>
  );
}

export default App;
