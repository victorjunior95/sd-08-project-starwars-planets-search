import React, { useState, useEffect } from 'react';
import './App.css';
import getAPI from './services';
import SWContext from './context/SWContext';

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getAPI()
      .then((response) => setData(response));
  }, []);

  return (
    <SWContext.Provider value={ data }>
      <span>Hello, App!</span>

    </SWContext.Provider>
  );
}

export default App;
