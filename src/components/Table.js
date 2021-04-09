import React, { useContext } from 'react';
import { APIContext } from '../services/context';

export default function Table() {
  const { applyFilter } = useContext(APIContext);
  const renderDataAfterNumericFilter = applyFilter();

  // function sortData(dataTable) {
  //   const sortColumn = filters.order.column;
  //   const isString = !parseInt(dataTable[0][sortColumn], 10);
  //   const isAscending = filters.order.sort === 'ASC';
  //   const DECRESCENT = -1;
  //   const order = isAscending ? 1 : DECRESCENT;

  //   return dataTable.sort((a, b) => (isString
  //     ? (a[sortColumn].localeCompare(b[sortColumn])) * order
  //     : (a[sortColumn] - b[sortColumn]) * order));
  // }
  // sortData(renderDataAfterNumericFilter);
  return (
    <table>
      {console.log(renderDataAfterNumericFilter)}
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {renderDataAfterNumericFilter.map((array) => (
          <tr key={ array.name }>
            <td>{array.name}</td>
            <td>{array.rotation_period}</td>
            <td>{array.orbital_period}</td>
            <td>{array.diameter}</td>
            <td>{array.climate}</td>
            <td>{array.gravity}</td>
            <td>{array.terrain}</td>
            <td>{array.surface_water}</td>
            <td>{array.population}</td>
            <td>{array.films}</td>
            <td>{array.created}</td>
            <td>{array.edited}</td>
            <td>{array.url}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
}
