import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import starwarsContext from './StarwarsContext';
import getStarwarsPlanet from '../service/Api';

function StarwarsProvider({ children }) {
  const [starwarsData, setStarwarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStarwarsPlanets = async () => {
    setIsLoading(true);
    const getDataPlanets = await getStarwarsPlanet();
    // console.log(getDataPlanets);
    setStarwarsData(getDataPlanets.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStarwarsPlanets();
  }, []);

  return (
    <starwarsContext.Provider value={ { starwarsData, isLoading } }>
      { children }
    </starwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarwarsProvider;
