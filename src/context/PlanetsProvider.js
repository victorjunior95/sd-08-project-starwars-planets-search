import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    fetch(url).then((response) => response.json())
      .then((result) => setData(result.results));
  }, []);

  const context = { data, setData };

  return (
    <PlanetsContext.Provider value={ context }>{ children }</PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
