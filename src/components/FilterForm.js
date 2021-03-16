import React, { useContext, useState } from 'react';

import Context from '../context/Context';

const comparisonFilter = [
  'maior que',
  'menor que',
  'igual a',
];

function renderTextInput(name, callback, value) {
  return (
    <label htmlFor={ name }>
      { name }
      <input
        data-testid={ `${name}-filter` }
        id={ name }
        onChange={ ({ target }) => callback(target.id, target.value) }
        value={ value }
      />
    </label>
  );
}

function renderSelectInput(name, options, callback, value) {
  return (
    <label htmlFor={ name }>
      { name }
      <select
        data-testid={ `${name}-filter` }
        id={ name }
        onChange={ ({ target }) => callback(target.id, target.value) }
        value={ value }
      >
        { options.map((option) => (
          <option key={ option }>
            { option }
          </option>
        ))}
      </select>
    </label>
  );
}

function FilterForm() {
  const {
    availableColumnFilters,
    filters,
    onChangeName,
    onClickAddFilter,
  } = useContext(Context);

  const [currentFilters, setCurrentFilters] = useState({
    column: 'diameter',
    comparison: 'maior que',
    value: 0,
  });

  function onChangeNumeric(id, value) {
    setCurrentFilters({ ...currentFilters, [id]: value });
  }

  function handleClick(event) {
    event.preventDefault();
    onClickAddFilter(currentFilters);
  }

  return (
    <form>
      { renderTextInput('name', onChangeName, filters.filterByName.name) }
      { renderSelectInput(
        'column', availableColumnFilters, onChangeNumeric, currentFilters.column,
      ) }
      { renderSelectInput(
        'comparison', comparisonFilter, onChangeNumeric, currentFilters.comparison,
      ) }
      { renderTextInput('value', onChangeNumeric, currentFilters.value) }
      <button
        data-testid="button-filter"
        type="submit"
        onClick={ handleClick }
      >
        Filter
      </button>
    </form>
  );
}

export default FilterForm;
