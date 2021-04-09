import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    api,
    setPlanets,
    filters,
    setFilters,
    coluna,
    setColuna,
    comparação,
    setComparação,
    valor,
    setValor,
    options,
    setOptions,
    selectedFilters,
    setSelectedFilters,
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

  function filterByNumericValue() {
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
    const newOptions = options.filter((option) => option !== coluna);
    setOptions(newOptions);
    setSelectedFilters([
      ...selectedFilters,
      coluna,
    ]);
  }

  function removeFilters({ target }) {
    setOptions([
      ...options,
      target.id,
    ]);
    const newSelectedFilters = selectedFilters
      .filter((selectedfilter) => selectedfilter !== target.id);
    setSelectedFilters(newSelectedFilters);
    setPlanets(api);
  }

  return (
    <div>
      <label
        htmlFor="input-name"
      >
        {'Nome: '}
        <input
          data-testid="name-filter"
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
        <select data-testid="column-filter">
          {options.map((option) => <option key={ option }>{option}</option>)}
        </select>
      </label>
      <label
        htmlFor="select-range"
        onChange={ selectComparison }
      >
        {'Faixa: '}
        <select data-testid="comparison-filter">
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
          data-testid="value-filter"
          type="number"
          min="0"
          max="1000000000000"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterByNumericValue }
      >
        Filtrar
      </button>
      <div>
        {selectedFilters.map((selectedfilter) => (
          <div
            key={ selectedfilter }
            data-testid="filter"
          >
            { `Filtro: ${selectedfilter} ` }
            <button
              id={ selectedfilter }
              type="button"
              onClick={ removeFilters }
            >
              x
            </button>
          </div>))}
      </div>
    </div>
  );
}

export default Filters;
