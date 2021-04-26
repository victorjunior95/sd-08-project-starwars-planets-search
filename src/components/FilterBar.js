import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const INITIAL_VALUE = 0;

const FilterBar = () => {
  const { setFilters, columnsToDrop, setColumns, filters } = useContext(StarWarsContext);
  const [currColumn, setCurrColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberToCompare, setNumber] = useState(INITIAL_VALUE);

  const handleClick = () => {
    const newNumericFilter = {
      column: currColumn,
      comparison,
      value: numberToCompare,
    };
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, newNumericFilter] });
    const newColumns = columnsToDrop.filter((column) => column !== currColumn);
    setColumns(newColumns);
    setCurrColumn(newColumns[0]);
  };

  const handleDeleteFilter = (columnDelete) => {
    const filterToReturn = filters.filterByNumericValues
      .filter(({ column }) => column !== columnDelete);
    setFilters({ ...filters,
      filterByNumericValues: [...filterToReturn] });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target: { value } }) => (
          setFilters({ ...filters, filterByName: { name: value } })
        ) }
      />
      <br />
      <select
        data-testid="column-filter"
        value={ currColumn }
        onChange={ (e) => setCurrColumn(e.target.value) }
      >
        {columnsToDrop.map((column, index) => (
          <option key={ index }>{column}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ numberToCompare }
        onChange={ (e) => setNumber(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <br />
      <div>
        {filters.filterByNumericValues.map((filter, index) => (
          <p
            key={ index }
            data-testid="filter"
          >
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              onClick={ () => handleDeleteFilter(filter.column) }
            >
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
