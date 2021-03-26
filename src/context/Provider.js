import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

import requestApi from '../services/requestAPI';
import { initialStateContext } from '../helpers/functionsHelpers';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [userFilters, setUserFilters] = useState(initialStateContext);
  const [newListPlanetsFilter, setnewListPlanetsFilter] = useState([]);

  useEffect(() => {
    requestApi().then((resp) => setData(resp));
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = userFilters;
    const filterByListName = data
      .filter((planetsName) => planetsName.name.toLowerCase()
        .includes(name.toLowerCase()));
    setnewListPlanetsFilter(filterByListName);
  }, [userFilters, data]);

  useEffect(() => {
    const { filterByNumericValues } = userFilters;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        const filterResponse = data.filter((planets) => Number(planets[column]) > value);
        return setnewListPlanetsFilter(filterResponse);
      }
      if (comparison === 'menor que') {
        const filterResponse = data.filter((planets) => Number(planets[column]) < value);
        return setnewListPlanetsFilter(filterResponse);
      }
      if (comparison === 'igual a') {
        const filterResponse = data
          .filter((planets) => Number(planets[column]) === Number(value));
        return setnewListPlanetsFilter(filterResponse);
      }
    });
  }, [data, userFilters]);

  const contextValue = {
    data,
    newListPlanetsFilter,
    setnewListPlanetsFilter,
    userFilters,
    setUserFilters,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
