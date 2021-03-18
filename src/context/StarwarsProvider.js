import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import starwarsContext from './StarwarsContext';
import getStarwarsPlanet from '../service/Api';

function StarwarsProvider({ children }) {
  const [starwarsData, setStarwarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterByName, setFilterByName] = useState('');

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

  const filterName = ({ target }) => {
    setFilterByName(target.value);
    // let filterPlanets = starwarsData;
    // filterPlanets = starwarsData.filter((data) => data.name.includes((filterByName)));
    // setStarwarsData(filterPlanets);
    // return filterPlanets;
  };

  const filters = {
    filters: {
      filterByName: {
        name: filterByName,
      },
    },
  };

  const state = {
    ...filters,
    starwarsData,
    isLoading,
    filterName,
    filterByName,
  };

  return (
    <starwarsContext.Provider value={ state }>
      { children }
    </starwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarwarsProvider;
