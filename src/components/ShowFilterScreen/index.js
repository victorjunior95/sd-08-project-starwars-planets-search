import React, { useContext } from 'react';
import StarWarsContext from '../../provider/StarWarsContext';

function ShowFilterScreen() {
  const {
    filters: { filterByNumericValues },
    deleteFilter,
  } = useContext(StarWarsContext);
  return (
    <div>
      { filterByNumericValues.map((el, index) => (
        <div key={ index }>
          <span>{ el.column }</span>
          <button
            onClick={ deleteFilter }
            data-column={ el.column }
            type="button"
            data-testid="filter"
          >
            X
          </button>
        </div>
      )) }
    </div>
  );
}

export default ShowFilterScreen;
