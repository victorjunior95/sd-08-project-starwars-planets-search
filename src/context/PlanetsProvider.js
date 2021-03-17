import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import fetchData from '../services/API';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [requesting, setRequesting] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  const fetchPlanets = async () => {
    setRequesting(true);
    const data = await fetchData();
    setPlanets(data);
    setRequesting(false);
  };

  const setFilters = (name) => {
    setFilterByName(name);
    setIsFiltered(false);
  };

  function applyFilter() {
    if (filterByName && !isFiltered) {
      setRequesting(true);
      const planetsForFilter = planets.slice();
      const newPlanetsFiltered = planetsForFilter.filter(
        (planet) => planet.name.includes(filterByName),
      );
      setPlanetsFiltered(newPlanetsFiltered);
      setIsFiltered(true);
      setRequesting(false);
    }
    if (!filterByName && isFiltered) {
      setPlanetsFiltered('');
      setIsFiltered(false);
    }
  }

  useEffect(() => { fetchPlanets(); }, []);
  useEffect(() => applyFilter());

  return (
    <PlanetsContext.Provider
      value={ {
        requesting,
        planets,
        setFilters,
        setFilterByName,
        filterByName,
        setPlanetsFiltered,
        planetsFiltered,
        applyFilter,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = { children: PropTypes.node.isRequired };
