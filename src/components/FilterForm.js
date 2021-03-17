import React, { useContext } from 'react';

import Context from '../context/Context';

const comparisonOptions = [
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
          <option key={ option } value={ option }>
            { option }
          </option>
        ))}
      </select>
    </label>
  );
}

function FilterForm() {
  const {
    columnOptions,
    filters,
    numericFilterValues,
    onChangeNameFilter,
    onChangeNumericFilter,
    onClickAddFilter,
  } = useContext(Context);

  function handleClick(event) {
    event.preventDefault();
    onClickAddFilter(numericFilterValues);
  }

  return (
    <>
      <form>
        { renderTextInput('name', onChangeNameFilter, filters.filterByName.name) }
        { renderSelectInput(
          'column', columnOptions, onChangeNumericFilter, numericFilterValues.column,
        ) }
        { renderSelectInput(
          'comparison', comparisonOptions,
          onChangeNumericFilter, numericFilterValues.comparison,
        ) }
        { renderTextInput('value', onChangeNumericFilter, numericFilterValues.value) }
        <button
          data-testid="button-filter"
          type="submit"
          onClick={ handleClick }
        >
          Filter
        </button>
      </form>
      <ul>
        <h4>Active Filters</h4>
        { filters.filterByNumericValues.length > 0
          && filters.filterByNumericValues.map((filter) => (
            <li key={ filter.column }>
              { `${filter.column} ${filter.comparison} ${filter.value} X` }
            </li>))}
      </ul>
    </>
  );
}

export default FilterForm;
