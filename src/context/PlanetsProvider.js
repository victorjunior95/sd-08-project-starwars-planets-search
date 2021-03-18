import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/API_STAR_WARS';

function PlanetsProvider({ children }) {
  const [name, setName] = useState('');

  function handleName({ target }) { setName(target.value); }

  const [storedPlanets, setStoredPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const apiResults = async () => {
      const results = await fetchPlanets();
      setStoredPlanets(results);
      setPlanets(results);
    };
    apiResults();
  }, []);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  function handleColumn({ target }) { setColumn(target.value); }
  function handleComparison({ target }) { setComparison(target.value); }
  function handleValue({ target }) { setValue(target.value); }

  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  function addFilter() {
    const newFilter = [...filterByNumericValues, { column, comparison, value }];
    setfilterByNumericValues(newFilter);
  }

  const [planetsWithFilter, setPlanetsWithFilter] = useState([]);

  useEffect(() => {
    filterByNumericValues.forEach((filterName) => {
      const newPlanets = storedPlanets.filter((item) => {
        if (item[filterName.column] === 'unknown') return false;
        if (filterName.comparison === 'maior que') {
          return parseInt(item[filterName.column], 10) > parseInt(filterName.value, 10);
        }
        if (filterName.comparison === 'menor que') {
          return parseInt(item[filterName.column], 10) < parseInt(filterName.value, 10);
        }
        if (filterName.comparison === 'igual a') {
          return parseInt(item[filterName.column], 10) === parseInt(filterName.value, 10);
        }
        return false;
      });
      console.log(newPlanets);
      setPlanetsWithFilter(newPlanets);
    });
  }, [filterByNumericValues]);

  useEffect(() => {
    const filterPlanets = (filterByNumericValues.length === 0)
      ? storedPlanets.filter((planet) => planet.name.includes(name))
      : planetsWithFilter.filter((planet) => planet.name.includes(name));
    setPlanets(filterPlanets);
  }, [name, planetsWithFilter]);

  const provide = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
    function: {
      handleName,
      handleColumn,
      handleComparison,
      handleValue,
      addFilter,
    },
    planets,
    inputsValues: {
      column,
      comparison,
      value,
    },
  };

  return (
    <PlanetsContext.Provider value={ provide }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
