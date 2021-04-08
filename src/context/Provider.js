import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [api, setApi] = useState([]);
  const [coluna, setColuna] = useState('');
  const [comparação, setComparação] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }],
  });
  const [isLoad, setIsLoad] = useState(true);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [planets, setPlanets] = useState([]);
  const [valor, setValor] = useState('');
  const myContextValues = {
    api,
    coluna,
    comparação,
    filters,
    isLoad,
    options,
    planets,
    valor,
    setApi,
    setColuna,
    setComparação,
    setFilters,
    setIsLoad,
    setOptions,
    setPlanets,
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
      filterByName: { name },
      filterByNumericValues,
    } = filters;
    const {
      column,
      comparison,
      value,
    } = filterByNumericValues[filterByNumericValues.length - 1];
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
