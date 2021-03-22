import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWPContext from './SWPContext';
import services from '../services';

const CustomProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await services.getPlanetsFromApi();
      setData(planets);
    };
    getPlanets();
  }, []);

  const contextStates = {
    data,
  };
  return (
    <SWPContext.Provider value={ contextStates }>
      {children}
    </SWPContext.Provider>
  );
};

CustomProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CustomProvider;
