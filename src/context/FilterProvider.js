import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const setFilterName = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  return (
    <FilterContext.Provider value={ { setFilterName, filters } }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterProvider;
