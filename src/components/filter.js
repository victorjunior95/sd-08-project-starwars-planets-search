import React, { useContext } from 'react';
import { PlanetsContext } from '../context/planetsContext';

const Filter = () => {
  const {
    setName,
    setColumn,
    setComparison,
    setValueFilter,
    handleFilterClick,
    filter,
    removeFilter,
    // currentFilters,
  } = useContext(PlanetsContext);

  return (
    <div>
      <input
        type="text"
        onChange={ (e) => setName(e.target.value) }
        data-testid="name-filter"
      />
      <div>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          {filter.map((item) => <option key={ item }>{item}</option>)}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setValueFilter(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleFilterClick }
        >
          Filtrar
        </button>
        <div data-testid="filter">
          <button
            type="button"
            value="X"
            onClick={ () => removeFilter() }
          >
            X
          </button>
        </div>
        <div>
          <select
            name="column"
            data-testid="column-sort"
          >
            {filter.map((item) => <option key={ item }>{item}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
