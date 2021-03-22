import React from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function TextFilter() {
  return (
    <StarWarsPlanetsContext.Consumer>
      <h1>Filtro por Texto</h1>
    </StarWarsPlanetsContext.Consumer>
  );
}
export default TextFilter;
