import React, { useContext } from 'react';
import { PlanetContext } from '../context/PlanetProvider';

export default function NumericValues() {
  const { filterWithValue, saveFilter } = useContext(PlanetContext);
  // `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`
  return (
    <>
      <label
        htmlFor="column"
      >
        <select
          id="column"
          name="column"
          data-testid="column-filter"
          onChange={ (e) => saveFilter(e) }
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (e) => saveFilter(e) }
        >
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          name="value"
          type="text"
          id="value-filter"
          placeholder="Valor"
          data-testid="value-filter"
          onChange={ (e) => saveFilter(e) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterWithValue() }
      >
        Filtrar
      </button>
    </>
  );
}
