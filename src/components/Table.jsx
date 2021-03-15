import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

export default function Table() {
  const { planetList, filterByName } = useContext(StarWarsContext);
  console.log(planetList);
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
        {planetList
          .filter((planet) => planet.name.toLowerCase()
            .includes(filterByName.toLowerCase()))
          .map((planet) => (
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
