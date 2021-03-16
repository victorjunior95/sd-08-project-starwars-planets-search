import React, { useContext } from 'react';
import Context from '../context/Context';

import '../styles/PlanetsTable.css';

function PlanetsTable() {
  const { isFetching, data, filters } = useContext(Context);
  const dataAfterFilter = data
    .filter((planetData) => planetData.name.includes(filters.filterByName.name));
  const renderData = dataAfterFilter.map((planetData) => Object.entries(planetData)
    .filter((planetInfo) => planetInfo[0] !== 'residents'));

  function renderTable() {
    return (
      renderData.length
        ? (
          <table>
            <thead>
              <tr>
                { renderData[0]
                  .map((dataHeader) => <th key={ dataHeader[0] }>{ dataHeader[0] }</th>) }
              </tr>
            </thead>
            <tbody>
              { renderData.map((dataRow, indexR) => (
                <tr key={ indexR }>
                  { dataRow.map((dataCell, indexC) => (
                    <td key={ indexC }>{ dataCell[1] }</td>
                  ))}
                </tr>))}
            </tbody>
          </table>
        )
        : <p>No Results</p>
    );
  }

  return (
    isFetching
      ? 'Carregando'
      : renderTable()
  );
}

export default PlanetsTable;
