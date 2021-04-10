import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/getPlanets';

const filterPlanets = {
  filterByName: {
    name: '',
  },
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const arrOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

const NEGATIVE = -1;
const POSITIVE = 1;

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [selectColumns, setSelectColumns] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(filterPlanets);
  const [numFilter, setNumFilter] = useState([]);

  // function sortBy() {
  //   names.sort((a, b) => {
  //     if (a.toLowerCase() < b.toLowerCase()) {
  //       return NEGATIVE;
  //     }
  //     if (a.toLowerCase() > b.toLowerCase()) {
  //       return POSITIVE;
  //     }
  //     return 0;
  //   });
  // }

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

  useEffect(() => {
    const arrOfPlanets = numFilter.forEach(({ comparison, column, value }) => {
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

  //   Solução para a classificação de strings

  // ```
  // names = ['Ana', 'ana', 'john', 'John']; // reset array original state

  // console.log(names.sort((a, b) => {
  //   if (a.toLowerCase() < b.toLowerCase()) {
  //     return -1;
  //   }
  //   if (a.toLowerCase() > b.toLowerCase()) {
  //     return 1;
  //   }
  //   return 0;
  // }));

  // Nesse caso, a função sort não terá nenhum efeito; ele obedecerá à ordem atual das letras maiúsculas e minúsculas.

  const value = {
    data,
    planets,
    isLoading,
    filters,
    setFilters,
    setNumFilter,
    numFilter,
    selectColumns,
    setSelectColumns,
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
