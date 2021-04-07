import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [isLoad, setIsLoad] = useState(true);
  const [api, setApi] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const myContextValues = {
    isLoad,
    setIsLoad,
    api,
    setApi,
    planets,
    setPlanets,
    filters,
    setFilters,
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => {
        setApi(data.results);
        setIsLoad(false);
      });
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filterName = api.filter((planet) => planet.name.includes(name));
    setPlanets(filterName);
  }, [api, filters]);

  return (
    <MyContext.Provider value={ myContextValues }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
