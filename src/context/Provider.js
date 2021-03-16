import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './index';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState(
    { filterByName: { name: '' } },
  );
  const context = {
    data,
    setData,
    headers,
    setHeaders,
    filter,
    setFilter,
    filteredData,
    setFilteredData,
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      const formatData = results.reduce((planets, next) => {
        delete next.residents;
        return [...planets, next];
      }, []);
      setData(formatData);
      setHeaders(Object.keys(formatData[0]));
      setFilteredData(formatData);
    };
    fetchPlanets();
  }, [setData, setHeaders, setFilteredData]);

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
