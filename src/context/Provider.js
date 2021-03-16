import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import getAPI from '../services';

const INITIAL_COLUMNS = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const INITIAL_STATE = {
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

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [columns, setColumns] = useState(INITIAL_COLUMNS);

  useEffect(() => {
    getAPI().then((response) => setData(response));
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filterPlanet = data.filter((element) => element.name.includes(name));
    setPlanets(filterPlanet);
  }, [data, filters]);

  useEffect(() => {
    const { filterByName: { name },
      filterByNumericValues: { column, comparison, value } } = filters;
    const filteredPlanet = data.filter((element) => {
      const planetName = element.name.includes(name);
      if (comparison === 'maior que') {
        return parseInt(element[column], 10) > parseInt(value, 10) && planetName;
      } if (comparison === 'menor que') {
        return parseInt(element[column], 10) < parseInt(value, 10) && planetName;
      } if (comparison === 'igual a') {
        return parseInt(element[column], 10) === parseInt(value, 10) && planetName;
      }
      return planetName;
    });
    setPlanets(filteredPlanet);
  }, [data, filters]);

  const context = { planets, setPlanets, filters, setFilters, data, columns, setColumns };
  console.log(filters);

  return (
    <SWContext.Provider value={ context }>
      {children}
    </SWContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
