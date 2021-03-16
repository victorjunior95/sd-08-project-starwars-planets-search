import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([{ name: '' }]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{
      column: 'population',
      comparison: 'maior que',
      value: '0',
    }],
  });

  useEffect(() => {
    async function fetchData() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      results.map((object) => delete object.residents);
      setData(results);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   const params = filters.filterByNumericValues;
  //   if (params.length > 0) {
  //     // console.log(data);
  //     // console.log(typeof params[0].value);
  //     const { column, comparison, value } = params[0];
  //     let newData = [];
  //     if (comparison === 'more') {
  //       newData = data.filter((planet) => planet[column] > parseFloat(value));
  //     } else if (comparison === 'less') {
  //       newData = data.filter((planet) => planet[column] < parseFloat(value));
  //     } else if (comparison === 'equal') {
  //       newData = data.filter((planet) => planet[column] == parseFloat(value));
  //     }
  //     // console.log(newData);
  //     // setData(newData);
  //   }
  // }, [data, filters]);

  function handleChange({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
  }

  function handleClick() {
    const params = filters.filterByNumericValues;
    if (params.length > 0) {
      const { column, comparison, value } = params[0];
      let newData = [];
      if (comparison === 'maior que') {
        newData = data.filter((planet) => planet[column] > parseFloat(value));
      } else if (comparison === 'menor que') {
        newData = data.filter((planet) => planet[column] < parseFloat(value));
      } else if (comparison === 'igual a') {
        newData = data.filter((row) => parseFloat(row[column]) === parseFloat(value));
      }
      setData(newData);
    }
  }

  const context = {
    data,
    setData,
    filters,
    setFilters,
    handleChange,
    handleClick,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropType.node.isRequired,
};

export default Provider;
