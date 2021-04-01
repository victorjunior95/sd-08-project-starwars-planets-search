import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';


function FilterByNumbers() {
  const {
    addFilterNumericValue,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const columnFilter = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [number, setNumberFilter] = useState(0);
  // const [columns, setColumns] = useState(columnFilter);

  const comparisonFilter = ['', 'maior que', 'menor que', 'igual a'];

  const handleNumericFilters = () => {
    addFilterNumericValue(column, comparison, number);
    console.log('handle');
  };

  return (
    <div>
      <label htmlFor="selectFilter">
        Selecione o filtro:
        <select
          id="selectFilter"
          name="selectFilter"
          data-testid="column-filter"
          value={column}
          onChange={(e) => setColumn(e.target.value)}
        >
          {columnFilter.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="selectComparison">
        Selecione a comparação
        <select
          id="selectComparison"
          name="selectComparison"
          data-testid="comparison-filter"
          value={comparison}
          onChange={(e) => setComparison(e.target.value)}
        >
          {comparisonFilter.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="numberFilter">
        Digite o número:
        <input
          data-testid="value-filter"
          type="number"
          name="numberFilter"
          value={number}
          onChange={(e) => setNumberFilter(e.target.value)}
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => handleNumericFilters()}
      >
        Filtrar
      </button>
      {filterByNumericValues.map((element, index) => (
        <div>
          <span key={index}>{element.comparison} | {element.comparison} | {element.value}</span>
          <button>X</button>
        </div>
      ))}
    </div>
  );
}

export default FilterByNumbers;
