import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/getPlanets';

const filterPlanets = {
  filterByName: {
    name: '',
  },
  // filterByNumericValues: [
  //   {
  //     column: 'population',
  //     comparison: 'maior que',
  //     value: '100000',
  //   },
  // ],
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(filterPlanets);
  const [numFilter, setNumFilter] = useState([]);

  async function getPlanets() {
    const starWarsPlanets = await fetchPlanets();
    setData(starWarsPlanets);
    setIsLoading(true);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  // console.log(numFilter);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filtered = data.filter((item) => item.name.includes(name));
    setPlanets(filtered);
  }, [data, filters]);

  useEffect(() => {
    // const newArr = [];
    numFilter.forEach(({ comparison, column, value }) => {
      if (comparison === 'igual a') {
        return setPlanets(data.filter((item) => +item[column] === +value));
      } if (comparison === 'maior que') {
        return setPlanets(data.filter((item) => +item[column] > +value));
      } if (comparison === 'menor que') {
        return setPlanets(data.filter((item) => +item[column] < +value));
      }
    });
  },
  [data, numFilter]);

  const value = {
    data,
    planets,
    isLoading,
    filters,
    setFilters,
    setNumFilter,
    numFilter,
    // filterName,
  };

  return (
    <PlanetContext.Provider value={ value }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
