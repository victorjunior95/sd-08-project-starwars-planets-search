import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const filters = {
    filterByName,
    filterByNumericValues,
  };

  useEffect(() => {
    (async () => {
      const returnAPI = await axios(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const { results } = returnAPI.data;
      results.forEach((result) => delete result.residents);
      setData(results);
    })();
  }, []);

  const handleFilterNameChange = (e) => {
    const value = e.target.value || undefined;
    const inputName = e.target.name;
    setFilterByName({ [inputName]: value });
  };

  // const setNumericFilter = () => {
  //   const { column, comparison, value } = filters.filterByNumericValues;
  //   if (comparison === 'igual a') {
  //     setFilter(column, value);
  //   } else if (comparison === 'maior que') {
  //     setFilter(column, value);
  //   } else {
  //     setFilter(column, value);
  //   }
  // };
  // const handleFilterNumericChange = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value || undefined;
  //   const inputName = e.target.name;
  //   setFilterByNumericValues((prevState) => ({
  //     ...prevState,
  //     [inputName]: value,
  //   }));
  // };

  const context = {
    filters,
    handleFilterNameChange,
    // handleFilterNumericChange,
    data,
  };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
