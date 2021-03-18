import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetsList, setList] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    fetch(url).then((response) => response.json())
      .then((result) => setList(result.results));
  }, []);

  const context = { planetsList, setList };

  return (
    <PlanetsContext.Provider value={ context }>{ children }</PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
