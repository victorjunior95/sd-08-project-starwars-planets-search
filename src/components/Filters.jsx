import React, { useContext, useState } from 'react';
import { DataContext } from '../data/DataContext';

const selectPlanet = [
  'population',
  'diameter',
  'rotation_period',
  'orbital_period',
  'surface_water'];
const Filters = () => {
  const { filters, setFilters } = useContext(DataContext);

  const [objeto, setObjeto] = useState({});

  function handleChange({ target: { value, name } }) {
    setObjeto({ ...objeto, [name]: value });
  }

  function handleClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, objeto],
    });
  }

  return (
    <>
      <select data-testid="column-filter" onChange={ handleChange } name="column">
        {selectPlanet.map((e) => <option key={ e } value={ e }>{e}</option>)}
      </select>
      <select data-testid="comparison-filter" onChange={ handleChange } name="comparison">
        <option key="maior que" value="maior que">maior que</option>
        <option key="menor que" value="menor que">menor que</option>
        <option key="igual a" value="igual a">igual a</option>
      </select>
      <input data-testid="value-filter" name="value" onChange={ handleChange } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar Filtro
      </button>
    </>
  );
};

export default Filters;
