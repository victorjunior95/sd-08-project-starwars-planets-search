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
    onClickRemoveFilter,
  } = useContext(Context);

  function handleClick(event) {
    event.preventDefault();
    onClickAddFilter();
  }

  function renderRemoveFilterButton(id) {
    return (
      <button
        id={ id }
        onClick={ (event) => onClickRemoveFilter(event.target.id) }
        type="button"
      >
        x
      </button>
    );
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
      <h4>Active Filters</h4>
      <ul>
        { filters.filterByNumericValues.length > 0
          && filters.filterByNumericValues.map((filter) => (
            <li data-testid="filter" key={ filter.column }>
              { `${filter.column} ${filter.comparison} ${filter.value} ` }
              { renderRemoveFilterButton(filter.column) }
            </li>))}
      </ul>
    </>
  );
}

export default FilterForm;
