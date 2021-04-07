import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [isLoad, setIsLoad] = useState(true);
  const [api, setApi] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: '',
      comparison: '',
      value: '',
    },
  });
  const [coluna, setColuna] = useState('');
  const [comparação, setComparação] = useState('');
  const [valor, setValor] = useState('');

  const myContextValues = {
    isLoad,
    setIsLoad,
    api,
    setApi,
    planets,
    setPlanets,
    filters,
    setFilters,
    coluna,
    setColuna,
    comparação,
    setComparação,
    valor,
    setValor,
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => {
        setApi(data.results);
        setIsLoad(false);
      });
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filterName = api.filter((planet) => planet.name.includes(name));
    setPlanets(filterName);
  }, [api, filters]);

  useEffect(() => {
    const {
      filterByName: { name }, filterByNumericValues: { column, comparison, value,
      } } = filters;
    const filterNumericValues = api.filter((planet) => {
      const includesName = planet.name.includes(name);
      switch (comparison) {
      case 'maior que':
        return parseInt(planet[column], 10) > parseInt(value, 10) && includesName;
      case 'menor que':
        return parseInt(planet[column], 10) < parseInt(value, 10) && includesName;
      case 'igual a':
        return parseInt(planet[column], 10) === parseInt(value, 10) && includesName;
      default:
        return includesName;
      }
    });
    setPlanets(filterNumericValues);
  }, [api, filters]);

  return (
    <MyContext.Provider value={ myContextValues }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
