import React, { useContext, useState } from 'react';
import './App.css';
import contextStar from './context/ContextStar';

function App() {
  const contexto = useContext(contextStar);
  console.log(contexto);

  const initialState = {
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [
        { column: '', comparison: '', value: '' },
        { column: '', comparison: '', value: '' },
      ],
    },
  };

  const [state, setstate] = useState(initialState);
  console.log(state);
  console.log(typeof (setstate));

  return (
    <div>
      <input type="text" data-testid="name-filter" />
      <input type="text" data-testid="value-filter" />

      <select name="column" data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
      </select>

      <select name="comparison" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input type="number" data-testid="value-filter" />

      <button type="button" data-testid="button-filter">Filtrar</button>
    </div>

  );
}

export default App;
