import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import fetchAPI from '../services/index';

const StarProvider = ({ children }) => {
  const [listPlanet, setListPlanet] = useState([]);
  const [filterName, setFilterName] = useState('');

  const fechPlanets = async () => {
    setListPlanet(await fetchAPI());
  };
  useEffect(() => {
    fechPlanets();
  }, []);

  const handleChange = (event) => {
    setFilterName(event.target.value);
  };

  const context = { listPlanet, filterName, handleChange };
  return (
    <StarContext.Provider value={ context }>
      {children}
    </StarContext.Provider>
  );
};
StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarProvider;
