import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/getPlanets';

const filterPlanets = {
  filterByName: {
    name: '',
  },
};

const arrOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [selectColumns, setSelectColumns] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(filterPlanets);
  const [numFilter, setNumFilter] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const starWarsPlanets = await fetchPlanets();
      setData(starWarsPlanets);
      setIsLoading(true);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filtered = data.filter((item) => item.name.includes(name));
    setPlanets(filtered);
    if (selectColumns === undefined) {
      setSelectColumns(arrOptions);
    }
  }, [data, filters, selectColumns]);

  // function blabla(some) {
  //   const { comparison, column, value } = some;
  //   switch (comparison) {
  //   case 'igual a':
  //     return setPlanets(data.filter((item) => +item[column] === +value));
  //   case 'maior que':
  //     return setPlanets(data.filter((item) => +item[column] > +value));
  //   case 'menor que':
  //     return setPlanets(data.filter((item) => +item[column] < +value));
  //   default:
  //     break;
  //   }
  // }
  // console.log(numFilter[0]);

  useEffect(() => {
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
  [data, numFilter, selectColumns]);

  const value = {
    data,
    planets,
    isLoading,
    filters,
    setFilters,
    setNumFilter,
    numFilter,
    selectColumns,
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
