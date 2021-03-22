import React from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function NumericFilter() {
  return (
    <StarWarsPlanetsContext.Consumer>
      {({ planets, setPlanets }) => (
        <div>
          <h1>
            Filtro Numerico
          </h1>
        </div>
      )}
    </StarWarsPlanetsContext.Consumer>
  );
}

export default NumericFilter;
