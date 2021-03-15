import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const getData = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const resultJson = await result.json();
      setPlanets(resultJson.results);
    };
    getData();
  }, []);

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const filters = {
    filters: {
      filterByName: {
        name,
      },
    },
  };

  const data = {
    ...filters,
    planets,
    handleChangeName,
  };

  console.log(filters);

  return (
    <planetsContext.Provider value={ data }>
      {children}
    </planetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
