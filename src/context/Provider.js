import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [api, setApi] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });
  const [coluna, setColuna] = useState('');
  const [comparação, setComparação] = useState('');
  const [valor, setValor] = useState('');
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [orderColumn, setOrderColumn] = useState('Name');
  const [orderSort, setOrderSort] = useState('ASC');

  const MENOSUM = -1;

  const myContextValues = {
    api,
    setApi,
    planets,
    setPlanets,
    isLoad,
    setIsLoad,
    filters,
    setFilters,
    coluna,
    setColuna,
    comparação,
    setComparação,
    valor,
    setValor,
    options,
    setOptions,
    selectedFilters,
    setSelectedFilters,
    orderColumn,
    setOrderColumn,
    orderSort,
    setOrderSort,
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => {
        setApi(data.results);
        const initialOrder = data.results
          .sort((a, b) => (a.name < b.name ? MENOSUM : a.name > b.name));
        setPlanets(initialOrder);
        setIsLoad(false);
      });
  }, [MENOSUM]);

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
