import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    coluna,
    comparação,
    filters,
    options,
    valor,
    setColuna,
    setComparação,
    setFilters,
    setOptions,
    setValor,
  } = useContext(MyContext);
  const { filterByNumericValues } = filters;

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
    const newOptions = options.filter((option) => option !== coluna);
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column: coluna,
          comparison: comparação,
          value: valor,
        },
      ],
    });
    console.log(newOptions);
    setOptions(newOptions);
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
          {options.map((option) => <option key={ option }>{option}</option>)}
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
