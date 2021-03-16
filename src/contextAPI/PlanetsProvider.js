import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import { asyncSetter, fetchPlanets } from '../services/asyncFunctions';
import { filterArrayObjByString, filterArrayObjByNumber } from '../services/filterFunctions';
import { INITIAL_COLUMN, INITIAL_HEADER_FORM, INITIAL_FILTERS,
} from '../services/INITIAL';

function filter(arrToFilter, { filterByName, filterByNumericValues }) {
  const { name } = filterByName;
  const filteredName = filterArrayObjByString(arrToFilter, 'name', name);
  const filteredNumber = filterByNumericValues.reduce((acc, cur) => {
    console.log(cur);
    console.log(acc);
    const { column, comparison, value } = cur;
    return filterArrayObjByNumber(acc, column, comparison, value);
  }, filteredName);
  return filteredNumber;
}

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();
  const [loadingPlanets, setloadingPlanets] = useState(true);
  // const [filteredPlanets, setFilteredPlanets] = useState();
  const [columnFilter, setColumnFilter] = useState(INITIAL_COLUMN);
  const [filtersApplied, setFiltersApplied] = useState({});
  const [headerForm, setHeaderForm] = useState(INITIAL_HEADER_FORM);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  if (!loadingPlanets) { console.log(filter(planets.results, filters)); }

  useEffect(() => {
    asyncSetter(fetchPlanets, setPlanets, setloadingPlanets);
  }, []);

  const ProviderObject = {
    planets,
    loadingPlanets,
    columnFilter,
    setColumnFilter,
    filtersApplied,
    setFiltersApplied,
    headerForm,
    setHeaderForm,
    filters,
    setFilters,
  };
  return (
    <PlanetsContext.Provider value={ ProviderObject }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
