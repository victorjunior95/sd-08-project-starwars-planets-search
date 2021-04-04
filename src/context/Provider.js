import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState({});
  const [isLoad, setIsLoad] = useState(true);

  const myContextValues = {
    planets,
    setPlanets,
    isLoad,
    setIsLoad,
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);
        setIsLoad(false);
      });
  }, []);

  return (
    <MyContext.Provider value={ myContextValues }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};

export default Provider;
