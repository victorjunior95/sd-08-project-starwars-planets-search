import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filtrarPorNome: {
      name: '',
    },
    filtrarPorNumero: {
      column: '',
      comparison: '',
      value: '',
    },
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json()).then((result) => setData(result.results));
  }, [data]);

  useEffect(() => {
    const {
      filtrarPorNome: { name },
      filtrarPorNumero: { column, comparison, value },
    } = filters;
    const filter = data.filter((planet) => {
      const includesName = planet.name.toLowerCase().includes(name.toLowerCase());
      switch (comparison) {
      case ('maior que'):
        return parseInt(planet[column], 10) > parseInt(value, 10) && includesName;
      case ('menor que'):
        return parseInt(planet[column], 10) < parseInt(value, 10) && includesName;
      case ('igual a'):
        return parseInt(planet[column], 10) === parseInt(value, 10) && includesName;
      default:
        return includesName;
      }
    });
    setPlanets(filter);
  }, [data, filters]);

  const contextValues = { planets, setPlanets, filters, setFilters };

  return (
    <PlanetsContext.Provider value={ contextValues }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
