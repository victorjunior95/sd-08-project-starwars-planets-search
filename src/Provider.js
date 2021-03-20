import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filterByName, setFilter] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    return response.json().then(({ results }) => {
      setData(results);
      setFilter(results);
    });
  };

  const MyContextValue = {
    data,
    fetchPlanets,
    nameFilter,
    setNameFilter,
    setData,
    filterByName,
    setFilter,
  };
  return (
    <MyContext.Provider value={ MyContextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
