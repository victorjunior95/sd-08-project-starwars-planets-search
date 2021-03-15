import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsPlanetsContext from './StarWarsPlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPlanets() {
      const planetsFetchData = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets')).json();
      setData(planetsFetchData.results);
    }
    getPlanets();
  }, [data]);

  const context = {
    data,
    setData,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ context }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
