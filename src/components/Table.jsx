import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  const { filters } = useContext(FilterContext);
  const [dataToBeRendered, setDataToBeRendered] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    if (data.length !== 0) {
      setDataToBeRendered(data.map((result) => {
        delete result.residents;
        return result;
      }));
    }
  }, [data]);

  useEffect(() => {
    if (dataToBeRendered.length !== 0) {
      setTableHeaders(Object.keys(dataToBeRendered[0]));
    }
  }, [dataToBeRendered]);

  const filterName = (name) => {
    setDataToBeRendered([...data].filter((row) => row.name.includes(name)));
  };

  const filterNumericValue = (column, comparison, value) => {
    setDataToBeRendered([...data].filter((row) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(row[column], 10) > value;
      case 'menor que':
        return parseInt(row[column], 10) < value;
      case 'igual a':
        return parseInt(row[column], 10) === value;
      default:
        return true;
      }
    }));
  };

  useEffect(() => {
    filterName(filters.filterByName.name);
    filters.filterByNumericValues
      .forEach(({ column, comparison, value }) => {
        filterNumericValue(column, comparison, parseInt(value, 10));
      });
  }, [filters]);

  return (
    <table>
      <thead>
        <tr>
          { tableHeaders.map((header) => <th key={ header }>{ header }</th>) }
        </tr>
      </thead>
      <tbody>
        { dataToBeRendered.map((row) => (
          <tr key={ row.name }>
            { tableHeaders.map((objKey, index) => (
              <td key={ row.name + index }>{ row[objKey] }</td>
            ))}
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
