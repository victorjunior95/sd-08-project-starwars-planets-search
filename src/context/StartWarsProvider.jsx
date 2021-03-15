import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './Context';
import fetchAllPlanets from '../helpers';

function StartWarsProvider({ children }) {
  const [planetList, setPlanetList] = useState();
  const [filterByName, setFilterByName] = useState('');
  const [filterNumericColumns, setFilterNumericColumns] = useState({
    column: null,
    comparison: null,
    value: null,
  });

  useEffect(() => {
    async function getPlanets() {
      const allPlanets = await fetchAllPlanets();
      allPlanets.forEach((planet) => {
        delete planet.residents;
      });
      setPlanetList(allPlanets);
    }
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        setFilterByName,
        planetList,
        filterByName,
        filterNumericColumns,
        setFilterNumericColumns } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StartWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StartWarsProvider;
