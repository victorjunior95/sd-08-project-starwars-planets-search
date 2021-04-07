import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext({});

function StarWarsPlanets({ children }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [columnTags] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [comparisonOptions] = useState([
    'maior que',
    'menor que',
    'igual a',
  ]);
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planets) => setData(planets.results));
  }, []);

  useEffect(() => {
    const searchingPlanets = data.filter((planet) => planet.name.includes(searchTerm));
    setFilteredPlanets(searchingPlanets);
  }, [data, searchTerm]);

  function handleClickFilter() {
    const numericFilteredPlanets = data.filter((planet) => {
      const targetTag = Number(planet[numericFilters.column]);
      const inputValue = Number(numericFilters.value);
      if (numericFilters.comparison === 'maior que') {
        return targetTag > inputValue;
      }
      if (numericFilters.comparison === 'menor que') {
        return targetTag < inputValue;
      }
      if (numericFilters.comparison === 'igual a') {
        return targetTag === inputValue;
      }
      return (numericFilteredPlanets);
    });
    setFilteredPlanets(numericFilteredPlanets);
  }

  function filterByNameInput() {
    return (
      <form>
        <label htmlFor="name-filter">
          Planet:
          <input
            type="text"
            name="name-filter"
            placeholder="Search"
            data-testid="name-filter"
            onChange={ (e) => setSearchTerm(e.target.value) }
          />
        </label>
      </form>
    );
  }

  function handleChangeColumn(event) {
    setNumericFilters({ ...numericFilters, column: event.target.value });
  }

  function handleChangeComparison(event) {
    setNumericFilters({ ...numericFilters, comparison: event.target.value });
  }

  function handleChangeValue(event) {
    setNumericFilters({ ...numericFilters, value: event.target.value });
  }

  function numericFiltersSelects() {
    return (
      <section>
        <select data-testid="column-filter" onChange={ handleChangeColumn }>
          {columnTags.map((tag) => (
            <option key={ tag } value={ tag }>
              {tag}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleChangeComparison }
        >
          {comparisonOptions.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ handleChangeValue }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClickFilter }
        >
          Add filter
        </button>
      </section>
    );
  }

  const contextValue = {
    data,
    filteredPlanets,
  };

  return (
    <Context.Provider value={ contextValue }>
      {numericFiltersSelects()}
      {filterByNameInput()}
      {children}
    </Context.Provider>
  );
}

StarWarsPlanets.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StarWarsPlanets, Context };
