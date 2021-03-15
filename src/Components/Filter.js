import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { filters, setFilter } = useContext(StarWarsContext);

  const handleChange = (e) => {
    const { value } = e.target;
    const obj = { ...filters };
    obj.filterByName.name = value;
    setFilter(obj);
  };

  const handleSelectOption = (e) => {
    const { value, name } = e.target;
    const obj = { ...filters };
    const filterLength = obj.filterByNumericValues.length;
    obj.filterByNumericValues[filterLength - 1][name] = value;
  };

  const handleFilter = () => {
    const obj = { ...filters };
    const filterLength = obj.filterByNumericValues.length;
    const obj2 = {
      column: '',
      comparison: '',
      value: '',
    };
    obj.filterByNumericValues[filterLength] = obj2;
    setFilter(obj);
  };

  const renderOptions = () => (
    <>
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </>
  );

  const renderComparsion = () => (
    <>
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </>
  );

  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          id="column"
          name="column"
          onChange={ handleSelectOption }
        >
          {renderOptions()}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          data-testid="comparison-filter"
          id="comparison"
          name="comparison"
          onChange={ handleSelectOption }
        >
          {renderComparsion()}
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleSelectOption }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
