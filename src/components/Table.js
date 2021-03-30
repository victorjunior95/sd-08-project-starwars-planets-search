import React, { useContext } from 'react';
import AppContext from '../context/Context';

function Table() {
  const { data } = useContext(AppContext);
  console.log(data);
  console.log(Object.keys(data));

  // keysTable = Object.keys(data[0]);

  return (
    <div>
      <table border="1">
        <thead>
          {/* {data.map((planet) => (
            <td key={ planet.name }>
              {planet.name}
            </td>
          ))} */}
          <tr>
            <th> Name </th>
            <th> Climate </th>
            <th> Created </th>
            <th> Diameter </th>
            <th> Edited </th>
            <th> Films </th>
            <th> Gravity </th>
            <th> Orbital Period </th>
            <th> Population </th>
            <th> Rotation Period </th>
            <th> Surface Water</th>
            <th> Terrain </th>
            <th> Url </th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              <td>
                {planet.name}
              </td>
              <td>
                {planet.climate}
              </td>
              <td>
                {planet.created}
              </td>
              <td>
                {planet.diameter}
              </td>
              <td>
                {planet.edited}
              </td>
              <td>
                {planet.films}
              </td>
              <td>
                {planet.gravity}
              </td>
              <td>
                {planet.orbital_period}
              </td>
              <td>
                {planet.population}
              </td>
              <td>
                {planet.rotation_period}
              </td>
              <td>
                {planet.surface_water}
              </td>
              <td>
                {planet.terrain}
              </td>
              <td>
                {planet.url}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default Table;
