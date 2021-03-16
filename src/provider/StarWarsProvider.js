import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanetsAPI from '../services/Api';
import SWPlanetsContext from '../context/SWPlanetsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filtersPlanets, setFiltersPlanets] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '0',
      },
    ],
  });

  useEffect(() => {
    getPlanetsAPI().then((response) => setData(response.results));
  }, []); // recebe tudo vindo da API

  useEffect(() => {
    const {
      filterByName: { name },
      filterByNumericValues: { column, comparison, value },
    } = filtersPlanets;
    const filterAll = data.filter((planet) => {
      const planetFilterName = planet.name.includes(name);
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value) && planetFilterName;
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value) && planetFilterName;
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value) && planetFilterName;
      }
      return planetFilterName;
    });
    setPlanets(filterAll);
  }, [data, filtersPlanets]);

  const contextValue = {
    planets,
    setPlanets,
    filtersPlanets,
    setFiltersPlanets,
  };

  return (
    <SWPlanetsContext.Provider value={ contextValue }>
      {children}
    </SWPlanetsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
