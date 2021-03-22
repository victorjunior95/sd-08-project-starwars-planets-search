import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterForm() {
  const {
    data, filters, setFilters, filterByNumericValue, setFilterByNumericValue,
  } = useContext(StarWarsContext);

  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const usedColumnFilters = filters.filterByNumericValues.map((item) => item.column);
  const newColumnFilter = columnFilter.filter((column) => !usedColumnFilters
    .includes(column));
  // https://stackoverflow.com/questions/34901593/how-to-filter-an-array-from-all-elements-of-another-array

  const comparisonFilter = ['maior que', 'menor que', 'igual a'];

  function handleCLick() {
    const numericValues = filters.filterByNumericValues;
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const { value } = document.getElementById('value');
    const filterByNumericValues = numericValues.concat({ column, comparison, value });
    setFilters(
      { ...filters,
        filterByNumericValues },
    );

    if (comparison === 'maior que') {
      setFilterByNumericValue(filterByNumericValue.filter(
        (planet) => parseInt(planet[column], 10) > parseInt(value, 10),
      ));
    } if (comparison === 'menor que') {
      setFilterByNumericValue(filterByNumericValue.filter(
        (planet) => parseInt(planet[column], 10) < parseInt(value, 10),
      ));
    } if (comparison === 'igual a') {
      setFilterByNumericValue(filterByNumericValue.filter(
        (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
      ));
    }
  }

  function checkValidity() {
    if (newColumnFilter.length === 0) return true;
    return false;
  }

  function deleteFilter(item) {
    const { column } = item;
/*     if (filters.filterByNumericValues.length > 0) {
      const findIndex = filters.filterByNumericValues.indexOf(column);
      const filterByNumericValues = filters.filterByNumericValues.splice(findIndex, 1);
      setFilters(...filters, filterByNumericValues);
    } */
    setFilterByNumericValue(data);
    document.getElementById(`${item.column}`).remove();
  }

/*   function columnSort() {

  } */

  return (
    <header>
      <form>
        <label htmlFor="name-filter">
          Planet name:
          <input
            name="name-filter"
            id="name-filter"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => setFilters(
              { ...filters, filterByName: { name: value } },
            ) }
          />
        </label>
        <label htmlFor="column">
          Column:
          <select
            name="column"
            id="column"
            data-testid="column-filter"
          >
            {newColumnFilter.map((column) => <option key={ column }>{ column }</option>)}
          </select>
        </label>
        <label htmlFor="comparison">
          Comparison:
          <select
            name="comparison"
            id="comparison"
            data-testid="comparison-filter"
          >
            { comparisonFilter.map((item) => <option key={ item }>{ item }</option>) }
          </select>
        </label>
        <label htmlFor="value">
          Value:
          <input
            type="number"
            name="value"
            id="value"
            data-testid="value-filter"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleCLick() }
          disabled={ checkValidity() }
        >
          Filter
        </button>
        <label htmlFor="column-sort">
          Oyder by:
          <select name="column-sort" id="column-sort" data-testid="column-sort">
            <option>Name</option>
            <option>Rotation Period</option>
            <option>Orbital Period</option>
            <option>Diameter</option>
            <option>Surface Water</option>
            <option>Population</option>
          </select>
          <label htmlFor="ASC">
            ASC
            <input
              type="radio"
              id="ASC"
              name="column-sort"
              value="ASC"
              data-testid="column-sort-input-asc"
            />
          </label>
          <label htmlFor="DESC">
            DESC
            <input
              type="radio"
              id="DESC"
              name="column-sort"
              value="DESC"
              data-testid="column-sort-input-desc"
            />
          </label>
          <button type="button" data-testid="column-sort-button" /* onClick={ columnSort() } */>Sort</button>
        </label>
      </form>
      { filters.filterByNumericValues.map((item) => (
        <div data-testid="filter" id={ item.column } key={ item.column }>
          <span>
            { item.column }
            { ' ' }
            { item.comparison }
            { ' ' }
            { item.value }
          </span>
          <button type="button" onClick={ () => deleteFilter(item) }>X</button>
        </div>)) }
    </header>
  );
}

export default FilterForm;
