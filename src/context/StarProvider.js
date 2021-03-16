import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import fetchPlanets from '../services/StarWarsAPI';

function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const [inputTextValue, setInputTextValue] = useState('');

  const fetchData = async () => {
    setData(await fetchPlanets());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setInputTextValue(e.target.value);
  };

  const context = {
    data,
    inputTextValue,
    handleChange,
  };

  return (
    <StarContext.Provider value={ context }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
