import React, { useContext, useState, useEffect, useCallback } from 'react';
import Context from '../context/Context';

export default function TableData() {
  const { data, filters, setFilters } = useContext(Context);
  const [tableContent, setTableContent] = useState([]);
  const [temporaryOrderColumn, setTemporaryOrderColumn] = useState('Name');
  const [temporaryOrderDirection, setTemporaryOrderDirection] = useState('ASC');

  function renderTableHeader() {
    const columns = Object.keys(data[0]);
    return columns.map((item) => (
      <th key={ item } title={ item.charAt(0).toUpperCase() + item.slice(1) }>
        {item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')}
      </th>
    ));
  }

  const filteredPlanets = useCallback(() => {
    const planetsAfterNameFilter = (planetData) => {
      const {
        filterByName: { name },
      } = filters;
      const nameFilter = planetData
        .filter((item) => item.name.toLowerCase()
          .includes(name.toLowerCase()));
      return nameFilter;
    };
    const planetsAfterNumericFilter = () => {
      const { filterByNumericValues } = filters;
      if (filterByNumericValues.length) {
        const numericFilteredPlanets = filterByNumericValues.forEach((item) => {
          if (item.comparison === 'maior que') {
            return planetsAfterNameFilter(data).filter(
              (planet) => planet[item.column] > parseInt(item.value, 10),
            );
          }
          if (item.comparison === 'menor que') {
            return planetsAfterNameFilter(data).filter(
              (planet) => planet[item.column] < parseInt(item.value, 10),
            );
          }
          if (item.comparison === 'igual a') {
            return planetsAfterNameFilter(data).filter(
              (planet) => planet[item.column] === parseInt(item.value, 10),
            );
          }
        });
        return numericFilteredPlanets;
      }
      return planetsAfterNameFilter(data);
    };

    // const planetsAfterOrderFilter = () => {
    //   if (
    //     filters.order.sort === 'ASC'
    //     && (filters.order.column === 'Name'
    //       || filters.order.column === 'Climate'
    //       || filters.order.column === 'Terrain'
    //       || filters.order.column === 'Films'
    //       || filters.order.column === 'Url')
    //   ) planetsAfterNumericFilter().sort((a, b) => a.localeCompare(b));
    // };

    setTableContent(planetsAfterNumericFilter());
  }, [data, filters]);

  function isLoading() {
    return <td>Carregando...</td>;
  }

  useEffect(() => {
    if (data) {
      filteredPlanets();
    }
  }, [data, filteredPlanets]);

  function renderTableContent() {
    const columns = Object.keys(data[0]);
    const sendOrderFilter = () => {
      setFilters((prevState) => ({
        ...prevState,
        order: {
          column: temporaryOrderColumn,
          sort: temporaryOrderDirection,
        },
      }));
    };

    return (
      <>
        {tableContent.map((row, indexRow) => (
          <tr key={ indexRow }>
            {columns.map((item, indexCell) => {
              if (indexCell === 0) {
                return (
                  <td
                    key={ row[item] }
                    data-testid="planet-name"
                    style={ {
                      border: '1px solid black',
                      textAlign: 'center',
                      fontStyle: 'italic',
                      padding: '10px',
                    } }
                  >
                    {row[item]}
                  </td>
                );
              }
              return (
                <td
                  key={ row[item] }
                  style={ {
                    border: '1px solid black',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    padding: '10px',
                  } }
                >
                  {row[item]}
                </td>
              );
            })}
          </tr>
        ))}
        <select
          data-testid="column-sort"
          name="column-sort"
          onChange={ (e) => setTemporaryOrderColumn(e.target.value) }
        >
          {Object.keys(data[0]).map((column, index) => (
            <option
              key={ index }
              value={ column.charAt(0).toUpperCase() + column.slice(1) }
            >
              {column.charAt(0).toUpperCase() + column.slice(1)}
            </option>
          ))}
        </select>
        <label htmlFor="ASC">
          Filtrar por ordem Asc.
          <input
            type="radio"
            name="order"
            value="ASC"
            data-testid="column-sort-input-asc"
            id="ASC"
            onChange={ (e) => setTemporaryOrderDirection(e.target.value) }
            checked={ temporaryOrderDirection === 'ASC' }
          />
        </label>
        <label htmlFor="DESC">
          Filtrar por ordem Desc.
          <input
            type="radio"
            name="order"
            value="DESC"
            data-testid="column-sort-input-desc"
            id="DESC"
            onChange={ (e) => setTemporaryOrderDirection(e.target.value) }
            checked={ temporaryOrderDirection === 'DESC' }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ sendOrderFilter }
        >
          Ordenar
        </button>
      </>
      // .sort((a, b) => a.localeCompare(b))
    );
  }

  return (
    <table>
      <thead>
        <tr>{data[0] ? renderTableHeader() : isLoading()}</tr>
      </thead>
      <tbody>{data[0] ? renderTableContent() : null}</tbody>
    </table>
  );
}
