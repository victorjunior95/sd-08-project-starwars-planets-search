import React from 'react';
import PropTypes from 'prop-types';

import * as getPlanetsByFilters from '../../../services/getPlanetsByFilters';

export default function FilterInput(props) {
  const { state, setState } = props;

  async function handleChange({ target }) {
    const results = await getPlanetsByFilters.getByFilterName(target.value);
    setState({ ...state, results, filters: { filterByName: { name: target.value } } });
  }

  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ handleChange }
      placeholder="Pesquisar"
    />
  );
}

FilterInput.propTypes = {
  state: PropTypes.arrayOf.isRequired,
  setState: PropTypes.func.isRequired,
};
