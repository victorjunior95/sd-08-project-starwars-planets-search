import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const initialColumns = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const filterOptions = {
  filtrarPorNome: {
    name: '',
  },
  filtrarPorNumero: [{
    column: '',
    comparison: '',
    value: '',
  }],
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(filterOptions);
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json()).then((result) => setData(result.results));
  }, [data]);

  useEffect(() => {
    const { filtrarPorNome: { name }, filtrarPorNumero } = filters;
    filtrarPorNumero.forEach((filterValues) => {
      const { column, comparison, value } = filterValues;
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
    });
  }, [data, filters]);

  const contextValues = { planets, setPlanets, filters, setFilters, columns, setColumns };

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
