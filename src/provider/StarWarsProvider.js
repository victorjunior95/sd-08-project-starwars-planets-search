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
  });

  useEffect(() => {
    getPlanetsAPI().then((response) => setData(response.results));
  }, []); // recebe tudo vindo da API

  useEffect(() => {
    const { filterByName: { name } } = filtersPlanets;
    setPlanets(data.filter((planet) => planet.name.includes(name)));
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
