import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './index';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState(
    { filterByName: { name: '' } },
    { filterByNumericValues: [{}] },
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

  useEffect(() => {
    const { filterByName, filterByNumericValues } = filter;
    if (filterByNumericValues) {
      setFilteredData(data.filter((planets) => planets.name
        .includes(filterByName.name))
        .filter((filtPlanets) => {
          switch (filterByNumericValues[0].comparison) {
          case 'maior que':
            return parseInt(filtPlanets[filterByNumericValues[0].column], 10)
              > parseInt(filterByNumericValues[0].value, 10);
          case 'menor que':
            return parseInt(filtPlanets[filterByNumericValues[0].column], 10)
              < parseInt(filterByNumericValues[0].value, 10);
          default:
            return parseInt(filtPlanets[filterByNumericValues[0].column], 10)
              === parseInt(filterByNumericValues[0].value, 10);
          }
        }));
    } else {
      setFilteredData(data.filter((planets) => planets.name
        .includes(filterByName.name)));
    }
  }, [setFilteredData, filter, data]);

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
