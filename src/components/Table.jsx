import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

export default function Table() {
  const { planetList } = useContext(StarWarsContext);
  if (!planetList) {
    return <div>Loading...</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planetList[0]).map((header) => (
            <th key={ header }>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planetList.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((item, i) => (
              <td key={ i }>
                {item}
              </td>
            ))}
          </tr>))}
      </tbody>
    </table>
  );
}
