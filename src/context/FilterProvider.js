import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [filters, setFilters] = useState(
    { filterByName: { name: '' }, filterByNumericValues: [] },
  );

  const setFilterName = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  const setFilterByNumericValues = (column, comparison, value) => {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues,
        { column, comparison, value }] });
  };

  return (
    <FilterContext.Provider
      value={ { setFilterName, filters, setFilterByNumericValues } }
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterProvider;
