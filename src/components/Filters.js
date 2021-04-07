import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    filters,
    setFilters,
    coluna,
    setColuna,
    comparação,
    setComparação,
    valor,
    setValor,
  } = useContext(MyContext);

  function filterByName({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  }

  function selectColumn({ target }) {
    setColuna(target.value);
  }

  function selectComparison({ target }) {
    setComparação(target.value);
  }

  function selectValue({ target }) {
    setValor(target.value);
  }

  function filterByOthers() {
    setFilters({
      ...filters,
      filterByNumericValues: {
        column: coluna,
        comparison: comparação,
        value: valor,
      },
    });
  }

  return (
    <div>
      <label
        htmlFor="input-name"
      >
        {'Nome: '}
        <input
          data-testId="name-filter"
          id="input-name"
          placeholder="pesquise por planetas"
          onChange={ filterByName }
        />
      </label>
      <label
        htmlFor="select-column"
        onChange={ selectColumn }
      >
        {'Buscar por: '}
        <select data-testId="column-filter">
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label
        htmlFor="select-range"
        onChange={ selectComparison }
      >
        {'Faixa: '}
        <select data-testId="comparison-filter">
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label
        htmlFor="select-number"
        onChange={ selectValue }
      >
        {'Numero: '}
        <input
          data-testId="value-filter"
          type="number"
          min="0"
          max="1000000000000"
        />
      </label>
      <button
        type="button"
        data-testId="button-filter"
        onClick={ filterByOthers }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
