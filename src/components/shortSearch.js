import React, { useContext, useState, useEffect } from 'react';
import myContext from '../context/dataContext';

function ShortSearch() {
  const [filterNumeric, setFilterNumeric] = useState({});
  const { filterByPlanetName, setFilterByPlanetName, columns } = useContext(myContext);
  const { filters: { filterByName, filterByNumericValues } } = filterByPlanetName;

  useEffect(() => {
    setFilterNumeric({
      column: 'population',
      comparsion: 'maior que',
      value: '0',
    });
  }, []);

  function handleChange({ target }) {
    setFilterNumeric(
      {
        ...filterNumeric,
        [target.name]: target.value,
      },
    );
  }

  function submitFilter() {
    setFilterByPlanetName({
      ...filterByPlanetName,
      filters: {
        filterByName,
        filterByNumericValues: [...filterByNumericValues, filterNumeric],
      },
    });
  }

  return (
    <>
      <select name="column" onChange={ handleChange } data-testid="column-filter">
        {columns.map((cada) => <option key={ cada }>{cada}</option>)}
      </select>
      <select name="comparsion" onChange={ handleChange } data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        name="value"
        onChange={ handleChange }
        type="number"
        data-testid="value-filter"
      />
      <button
        data-testid="button-filter"
        onClick={ submitFilter }
        type="button"
      >
        {' '}
        Filtrar
      </button>
    </>
  );
}

export default ShortSearch;
