import React, { useContext, useEffect, useState } from 'react';
import { APIContext } from '../services/context';

export default function FilterNumeric() {
  const {
    filters,
    setFilters,
    columns,
    // setColumns,
  } = useContext(APIContext);

  const [filterValues, setFilterValues] = useState({});
  const comparisons = ['maior que', 'menor que', 'igual a'];
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterValues;

  useEffect(() => {
    setFilterValues({
      column: columns[0],
      comparison: 'maior que',
      value: '0',
    });
  }, [columns]);

  const onChangeNumericFilter = ({ target }) => {
    setFilterValues({
      ...filterByNumericValues,
      [target.name]: target.value });
  };

  const handleBtnFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, filterValues],
    });
    // setColumns(columns.filter((columnName) => column !== columnName));
  };
  return (
    <form>
      <select
        value={ column }
        name="column"
        onChange={ onChangeNumericFilter }
        data-testid="column-filter"
      >
        {columns.map((columnOption) => (
          <option key={ columnOption }>{columnOption}</option>
        ))}
      </select>
      <select
        value={ comparison }
        name="comparison"
        onChange={ onChangeNumericFilter }
        data-testid="comparison-filter"
      >
        {comparisons.map((comparisonOption) => (
          <option key={ comparisonOption }>{comparisonOption}</option>
        ))}
      </select>
      <input
        type="number"
        value={ value }
        name="value"
        data-testid="value-filter"
        placeholder="0"
        onChange={ onChangeNumericFilter }
      />
      <button type="button" data-testid="button-filter" onClick={ handleBtnFilter }>
        Filter
      </button>
    </form>
  );
}
