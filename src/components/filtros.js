import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filtros() {
  const { inputText, setInputText } = useContext(PlanetsContext);
  return (
    <input
      type="text"
      value={ inputText }
      data-testid="name-filter"
      onChange={ (e) => setInputText(e.target.value) }
    />
  );
}

export default Filtros;
