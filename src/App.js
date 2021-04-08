import React, { useContext } from 'react';

import starWarsContext from './context/StarWarsContext';

import './App.css';

const App = () => {
  const context = useContext(starWarsContext);
  console.log(context);

  return (
      <span>Hello, {}!</span>
  );
}

export default App;
