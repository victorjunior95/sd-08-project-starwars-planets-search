import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import planetsFetch from '../services/Api';

const PlanetsContext = createContext();

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [name, setName] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filter, setFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [currentFilters, setCurrentFilters] = useState([]);

  useEffect(() => {
    const filtered = data.filter((item) => item.name.toLowerCase().includes(name));
    setFilteredData(filtered);
  }, [data, name]);

  useEffect(() => {
    planetsFetch().then((response) => setData(response));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setHeader(
        Object.keys(data[0]).filter((property) => property !== 'residents'),
      );
    }
  }, [data]);

  const removeFilter = () => {
    setFilter([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setCurrentFilters([]);
    setFilteredData(data);
  };

  // const [filterData, setFilterData] = useState({
  //   column: 'population',
  //   comparison: 'maior que',
  //   value: '0',
  // });

  const handleFilterClick = () => {
    if (comparison === 'maior que') {
      setFilteredData(data.filter((item) => Number(item[column] > Number(valueFilter))));
    } else if (comparison === 'menor que') {
      setFilteredData(data.filter((item) => Number(item[column] < Number(valueFilter))));
    } else {
      console.log(data
        .filter((item) => Number(item[column] === valueFilter)));
      setFilteredData(data
        .filter((item) => Number(item[column] === valueFilter)));
    }
    // setFilterData({
    //   column,
    //   comparison,
    //   valueFilter,
    // });
    setFilter([...filter].filter((item) => item !== column));
  };

  const provide = {
    data,
    header,
    filteredData,
    name,
    setName,
    setColumn,
    setComparison,
    setValueFilter,
    handleFilterClick,
    filter,
    setFilter,
    currentFilters,
    setCurrentFilters,
    removeFilter,
  };

  return (
    <PlanetsContext.Provider value={ provide }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetsContext, PlanetsProvider as Provider };
