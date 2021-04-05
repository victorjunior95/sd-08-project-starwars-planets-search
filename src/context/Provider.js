import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [planets, setPlanets] = useState({});
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const myContextValues = {
    data,
    setData,
    isLoad,
    setIsLoad,
    planets,
    setPlanets,
    filters,
    setFilters,
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
        setIsLoad(false);
      });
  }, [data]);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filter = data.filter((planet) => planet.name.includes(name));
    setPlanets(filter);
  }, [data, filters]);

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
