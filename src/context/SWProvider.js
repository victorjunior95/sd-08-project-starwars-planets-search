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
    filters: { filterByName: { name: '' }, filterByNumericValues: [] } });
  const [filterComparison, getFilterComparison] = useState('maior_que');
  const [filterColumn, getFilterColumn] = useState('population');
  const [filterNumber, getFilterNumber] = useState('');
  const [SWData, getSWData] = useState([]);
  const [FSWData, getFSWData] = useState([]);

  // const inputName = (e) => {
  //   getFilterbyName(e.target.value);
  //   Filter();
  // }

  const fetchData = async () => {
    const data = await FetchStarWars();
    getSWData(data);
    getFSWData(data);
    return data;
  };

  function Filter() {
    let data = SWData;
    const resultFilter = filter;
    if (filterByName !== '') {
      resultFilter.filters.filterByName.name = filterByName;
      const regex = new RegExp(filterByName);
      data = data.filter((planet) => regex.test(planet.name));
      // resultIsFilted.filterByName = true;
    }
    // console.log(filterColumn);
    if (filterNumber !== '') {
      // resultFilter.filters.filterByNumericValues.push({ column: filterColumn,
      //   comparison: filterComparison,
      //   value: filterNumber });
      resultFilter.filters.filterByNumericValues = [...resultFilter.filters.filterByNumericValues,
        { column: filterColumn,
          comparison: filterComparison,
          value: filterNumber }];
      // filterNumber.forEach((question) => {
      //       // const ComparisonFunction = (column, comparison, value) => {
      //       //   // console.log(` ${typeof column} ${comparison} ${typeof value}`);
      //       //   // console.log( column > value);
      //       //   switch (comparison) {
      //       //   case 'maior_que':
      //       //     // console.log(column > value);
      //       //     return column > value;
      //       //   case 'menor_que':
      //       //     // console.log(column < value);
      //       //     return column < value;
      //       //   case 'igual':
      //       //     // console.log(column === value);
      //       //     return column === value;
      //       //   default:
      //       //     console.log('erro na função');
      //       //   }
      //       // };
      // }
      getFilterColumn('');
    }
    console.log(resultFilter);
    getFilter(resultFilter);
    console.log(data);
    getFSWData(data);
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
