import React, { useEffect, useState } from 'react';
import './App.css';
import getPlanetsAPI from './api/getPlanetsAPI';
import starWarsContext from './context/context';
import Table from './components/Table';

function App() {
  const initialFiltersState = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: '',
        sort: '',
      },
    },
  };

  const [allPlanets, setAllPlanets] = useState([]);
  const [currentFilter, setCurrentFilter] = useState([]);
  const [filtersState, setFiltersState] = useState(initialFiltersState);
  const [numericState, setNumericState] = useState({});

  useEffect(() => {
    async function fetchAPI() {
      const data = await getPlanetsAPI();
      setAllPlanets(data);
      setCurrentFilter(data);
    }
    fetchAPI();
  }, []);

  useEffect(() => {
    const { filters: { filterByName: { name: text } } } = filtersState;
    const { filters: { filterByNumericValues } } = filtersState;
    let filteredByAll = [...allPlanets];
    filteredByAll = filteredByAll.filter(({ name }) => name.includes(text));
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      filteredByAll = filteredByAll.filter((planet) => {
        if (comparison === 'maior que') {
          return +planet[column] > +value;
        }
        if (comparison === 'menor que') {
          return +planet[column] < +value;
        }
        if (comparison === 'igual a') {
          return +planet[column] === +value;
        }
        return planet;
      });
    });
    setCurrentFilter(filteredByAll);
  }, [allPlanets, filtersState]);

  function applyNumericFilter() {
    const { filters: { filterByNumericValues: filter } } = filtersState;
    if (numericState.column
      && numericState.comparison
      && numericState.value
      && !filter.find(({ column }) => column === numericState.column)
    ) {
      setFiltersState({ filters: { ...filtersState.filters,
        filterByNumericValues: [
          ...filtersState.filters.filterByNumericValues,
          numericState,
        ],
      } });
    }
  }

  function handleName({ target }) {
    setFiltersState({ filters: { ...filtersState.filters,
      filterByName: { name: target.value } } });
  }

  function handleChangeNumeric({ target }) {
    const { name, value } = target;
    setNumericState({ ...numericState, [name]: value });
  }

  function removeFilter(index) {
    const { filters: { filterByNumericValues } } = filtersState;
    const tempFilter = [...filterByNumericValues];
    tempFilter.splice(index, 1);
    setFiltersState({ filters: { ...filtersState.filters,
      filterByNumericValues: tempFilter,
    } });
  }

  return (
    <starWarsContext.Provider value={ currentFilter }>
      <input
        name="name"
        type="text"
        data-testid="name-filter"
        onChange={ handleName }
        value={ filtersState.filters.filterByName.name }
      />
      <select
        name="column"
        id="column"
        data-testid="column-filter"
        onChange={ handleChangeNumeric }
      >
        <option value="">{' '}</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        onChange={ handleChangeNumeric }
      >
        <option value="">{' '}</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleChangeNumeric }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyNumericFilter }
      >
        Filtrar
      </button>
      <ul>
        { filtersState.filters.filterByNumericValues.map(
          ({ column, comparison, value }, index) => (
            <li key={ `${index}+filter` } data-testid="filter">
              { `${column} ${comparison} ${value}`}
              <button
                type="button"
                onClick={ () => removeFilter(index) }
              >
                X
              </button>
            </li>
          ),
        )}
      </ul>
      <Table />
    </starWarsContext.Provider>
  );
}

export default App;
