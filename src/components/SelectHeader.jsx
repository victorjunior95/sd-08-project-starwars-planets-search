import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/StarwarsContext';

const filterHeader = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function SelectHeader() {
  const { filters, setFilters } = useContext(StarwarsContext);
  const [select, setSelect] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleSelect = ({ target }) => {
    setSelect({
      ...select,
      [target.name]: target.value,
    });
  };

  const filterButton = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        select,
      ],
    });
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleSelect }
      >
        { filterHeader.map((item, index) => (
          <option key={ index } value={ item }>{ item }</option>)) }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleSelect }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleSelect }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterButton }
      >
        Filter
      </button>
    </div>
  );
}
