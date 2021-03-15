import React, { useState, useEffect } from 'react';
import './App.css';
import getAPI from './services';
import SWContext from './context/SWContext';
import Tabela from './components/Tabela';

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getAPI()
      .then((response) => setData(response));
  }, []);

  return (
    <SWContext.Provider value={ data }>
      <span>Welcome to Start Wars Planets Page</span>
      <Tabela />
    </SWContext.Provider>
  );
}

export default App;
