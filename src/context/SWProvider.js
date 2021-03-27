import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

const SWProvider = ({ children }) => {
  const { Provider } = SWContext;
  const [data, setData] = useState({});
  useEffect(() => {
    async function getPlanetsData() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(url);
      const resultJSON = await result.json();
      setData(resultJSON);
    }
    getPlanetsData();
  }, []);
  const contextValue = {
    data,
  };

  return (
    <Provider value={ contextValue }>
      {children}
    </Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SWProvider;
