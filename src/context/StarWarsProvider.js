import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import starWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      setIsFetching(true);
      const resPage1 = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results: planetsPage1 } = await resPage1.json();
      setPlanets(planetsPage1);
      setIsFetching(false);
    };

    fetchPlanets();
  }, []);

  const context = { planets, isFetching };

  return (
    <starWarsContext.Provider value={ context }>
      { children }
    </starWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default StarWarsProvider;
