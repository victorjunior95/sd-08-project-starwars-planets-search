import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DateContext = createContext([]);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterPlanet, setFilterPlanet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      setData(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filterPlanets = data;
    filterPlanets = data.filter((planet) => planet.name.includes((searchName)));
    setFilterPlanet(filterPlanets);
  }, [data, searchName]);

  const filterName = (e) => {
    setSearchName(e.target.value);
  };

  const store = {
    data,
    searchName,
    filterPlanet,
    setData,
    filterName,
  };

  return (
    <DateContext.Provider value={ store }>
      {
        children
      }

    </DateContext.Provider>
  );
};

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};
