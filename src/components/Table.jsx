import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

export default function Table() {
  const { planetList, filterByName, filterNumericColumns } = useContext(StarWarsContext);
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
          .filter((planet) => {
            const { column, comparison, value } = filterNumericColumns;
            if (column && comparison && value) {
              if (comparison === 'igual a') {
                return Number(planet[column]) === Number(value);
              }
              if (comparison === 'maior que') {
                return Number(planet[column]) > Number(value);
              }
              if (comparison === 'menor que') {
                return Number(planet[column]) < Number(value);
              }
            }
            return planet;
          })
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
