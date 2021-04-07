import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const filterOptions = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

const columnsOptions = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(filterOptions);
  const [columnsOp, setColumn] = useState(columnsOptions);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    fetch(url).then((response) => response.json())
      .then((result) => setData(result.results));
  }, []);

  useEffect(() => {
    const {
      filterByName: { name },
      filterByNumericValues,
    } = filters;
    filterByNumericValues.forEach((filterType) => {
      const { column, comparison, value } = filterType;
      const filtered = data.filter((planet) => {
        const byName = planet.name.toLowerCase().includes(name.toLocaleLowerCase());
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
        switch (comparison) {
        case 'maior que':
          return parseInt(planet[column], 10) > parseInt(value, 10) && byName;
        case 'menor que':
          return parseInt(planet[column], 10) < parseInt(value, 10) && byName;
        case 'igual a':
          return parseInt(planet[column], 10) === parseInt(value, 10) && byName;
        default:
          return byName;
        }
      });
      setPlanets(filtered);
    });
  }, [data, filters]);

  const context = { planets, setPlanets, filters, setFilters, columnsOp, setColumn };

  return (
    <PlanetsContext.Provider value={ context }>{ children }</PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
