import React, { useContext } from 'react';
import Context from '../context/Context';

export default function NumberInputFilter() {
  const { filters, handleFilterNumericChange, setNumericFilter } = useContext(Context);

  return (
    <form onSubmit={ setNumericFilter }>
      <select
        data-testid="column-filter"
        value={ filters.filterByNumericValues.column }
        name="column"
        onChange={ handleFilterNumericChange }
      >
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ filters.filterByNumericValues.comparison }
        name="comparison"
        onChange={ handleFilterNumericChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ filters.filterByNumericValues.value }
        name="value"
        placeholder="Digite um número"
        onChange={ handleFilterNumericChange }
      />
      <button type="submit" data-testid="button-filter">
        Filtrar
      </button>
    </form>
  );
}
