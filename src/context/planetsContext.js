import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext([]);

const Provider = ({ children }) => {
  const FILTERS_STUCTURE = {
    filters: {
      filterByName: {
        name: 'Tatoo',
      },
    },
  };
  const [planets, setPlanets] = useState();
  const [filters, setFilters] = useState(FILTERS_STUCTURE);
  const [fetching, setFetching] = useState(true);
  const [planetsData, setPlanetsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(ENDPOINT);
      const { results } = await response.json();
      setPlanets(results);
      setPlanetsData(results);
      setFetching(false);
    };
    fetchData();
  }, []);

  const filterName = (value) => {
    setFilters({ ...filters, filterByName: value });
    const filteredPlanets = planetsData
      .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
    setPlanets(filteredPlanets);
  };

  const data = {
    planets,
    fetching,
    filterName,
    planetsData,
  };
  return (
    <PlanetsContext.Provider value={ data }>
      { children }
    </PlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
