import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import FetchStarWars from '../helpers/API';

// {
//     filters: {
//       filterByName: {
//         name: 'Tatoo'
//       }
//     }
//   }

export default function SWProvider({ children }) {
  // const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  // const { isFilted, filter } = useContext(SWContext);
  // const [ApiDATA, setApiData] = useState([]);
  // useEffect(() => {
  //   async function getApi() {
  //     try {
  //       const response = await fetch(STARWARS_API);
  //       const DATA = await response.json();
  //       setApiData(DATA.results);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   getApi();
  // }, []);
  // let filtredData = ApiDATA;
  // const Filtering = () => {
  //   console.log(filter.filters.filterByName.name);
  //   if (isFilted.filterByName) {
  //     const regex = new RegExp(filter.filters.filterByName);
  //     filtredData = filtredData.filter((planet) => regex.test(planet.name));
  //   }
  // if (filter.filters.filterByNumericValues.length > 0) {
  //   filter.filters.filterByNumericValues.forEach((question) => {
  //     const ComparisonFunction = (column, comparison, value) => {
  //       // console.log(` ${typeof column} ${comparison} ${typeof value}`);
  //       // console.log( column > value);
  //       switch (comparison) {
  //       case 'maior_que':
  //         // console.log(column > value);
  //         return column > value;
  //       case 'menor_que':
  //         // console.log(column < value);
  //         return column < value;
  //       case 'igual':
  //         // console.log(column === value);
  //         return column === value;
  //       default:
  //         console.log('erro na função');
  //       }
  //     };
  //     filtredData = filtredData.filter((planet) => ComparisonFunction(
  //       planet[question.column],
  //       question.comparison,
  //       question.value,
  //     ));
  //     console.log(filtredData);
  //   });
  // }
  // };
  // useEffect(() => {
  //   Filtering();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filter]);
  // const tableHeader = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
  //   'gravity', 'terrain', 'surface_water', 'population', 'films', 'created',
  //   'edited', 'url'];

  // getFilterComparison, getFilterColumn, getFilterNumber;
  const [filterByName, getFilterbyName] = useState('');
  const [filter, getFilter] = useState({
    filters: { filterByName: { name: '' }, filterByNumericValues: [], order: { column: 'Name', sort: 'ASC' } } });
  const [filterComparison, getFilterComparison] = useState('maior que');
  const [filterColumn, getFilterColumn] = useState('population');
  const [filterNumber, getFilterNumber] = useState('');
  const [SWData, getSWData] = useState([]);
  const [FSWData, getFSWData] = useState([]);

  // const inputName = (e) => {
  //   getFilterbyName(e.target.value);
  //   Filter();
  // }

  const ComparisonFunction = (column, comparison, value) => {
    value = parseInt(value, 10);
    column = parseInt(column, 10);
    // console.log(`  ${value} ${comparison} ${column} result ${value < column}`);
    switch (comparison) {
    case 'maior que':
      // console.log(column > value);
      return value > column;
    case 'menor que':
      // console.log(value < column);
      return value < column;
    case 'igual a':
      // console.log(column === value);
      return column === value;
    default:
      console.log(`erro na função ${comparison}`);
    }
  };

  const fetchData = async () => {
    const data = await FetchStarWars();
    getSWData(data);
    getFSWData(data);
    return data;
  };

  function Filter() {
    let data = SWData;
    const resultFilter = filter;
    // console.log(filter.filters.filterByNumericValues);
    if (filterByName !== '') {
      resultFilter.filters.filterByName.name = filterByName;
      const regex = new RegExp(filterByName);
      data = data.filter((planet) => regex.test(planet.name));
    }
    if (filterNumber !== '' && filterColumn !== '') {
      resultFilter.filters.filterByNumericValues = [
        ...resultFilter.filters.filterByNumericValues,
        { column: filterColumn,
          comparison: filterComparison,
          value: filterNumber }];
      let result = '';
      data = data.filter((planet) => {
        result = resultFilter.filters.filterByNumericValues.map(
          (question) => (ComparisonFunction(
            question.value, question.comparison, planet[question.column],
          )),
        );
        return result.every((e) => e);
      });
      // console.log(data);
      getFilterColumn('');
    }
    // console.log(resultFilter.filters.filterByNumericValues);
    getFilter(resultFilter);
    console.log(data.length);
    getFSWData(data);
  }

  function deleteFilter(e) {
    let data = SWData;
    let result = filter.filters.filterByNumericValues.filter((_, index) => (index !== e));
    // console.log(`${index}  ${e}  ${index !== e}`);
    result = { filters:
      { filterByName: filter.filters.filterByName,
        filterByNumericValues: result } };
    // console.log(result);
    getFilter(result);
    let resultList = '';
    data = data.filter((planet) => {
      resultList = result.filters.filterByNumericValues.map(
        (quest) => (ComparisonFunction(
          quest.value, quest.comparison, planet[quest.column],
        )),

      );
      return resultList.every((a) => a);
    });
    console.log(data.length);
    getFSWData(data);
    // console.log(filter.filters.filterByNumericValues);
    // console.log(filter.filters.filterByNumericValues);
    // Filter();
  }

  useEffect(() => {
    Filter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByName]);
  const context = {
    filterByName,
    getFilterbyName,
    filter,
    Filter,
    getFilterComparison,
    getFilterColumn,
    getFilterNumber,
    FSWData,
    fetchData,
    deleteFilter,
  };

  return (
    <SWContext.Provider value={ context }>
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};