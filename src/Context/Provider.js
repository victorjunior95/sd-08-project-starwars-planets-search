import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const data = await fetch(URL);
      const dataJson = await data.json();
      setAllPlanets(dataJson.results);
      console.log(dataJson);
    }
    fetchApi();
  }, []);
  const data = { allPlanets, setAllPlanets };
  return (
    <PlanetsContext.Provider value={ data }>
      { children }
    </PlanetsContext.Provider>

  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
