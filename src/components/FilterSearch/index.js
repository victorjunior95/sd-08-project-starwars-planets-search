import React from 'react';
import PropTypes from 'prop-types';

import FilterInput from './components/FilterInput';

export default function FilterSearch(props) {
  const { state, setState } = props;

  return (
    <div>
      <FilterInput state={ state } setState={ setState } />
    </div>
  );
}

FilterSearch.propTypes = {
  state: PropTypes.arrayOf.isRequired,
  setState: PropTypes.func.isRequired,
};
