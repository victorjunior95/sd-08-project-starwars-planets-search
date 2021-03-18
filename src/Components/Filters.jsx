import React, { useContext, useState } from 'react';
import StarWarsContext from '../Contexts/StarWars/StarWarsContext';

const Filters = () => {
  const { filters: { filterByName: { name } },
    setName,
    setColumn,
    setComparison,
    setValue,
  } = useContext(StarWarsContext);

  const [localColumn, setLocalColumn] = useState('population');
  const [localComparison, setLocalComparison] = useState('maior que');
  const [localValue, setLocalValue] = useState('');

  return (
    <>
      <input
        value={ name }
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setName(value) }
      />

      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setLocalColumn(value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setLocalComparison(value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setLocalValue(value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setColumn(localColumn);
          setComparison(localComparison);
          setValue(localValue);
        } }
      >
        filter
      </button>
    </>
  );
};

export default Filters;
