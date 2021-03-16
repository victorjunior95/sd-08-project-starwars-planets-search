import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

export default function Table() {
  const { planetList, filterByName,
    filterNumericColumns, orderColumnBy } = useContext(StarWarsContext);
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
          .sort((a, b) => {
            const { orderColumn, orderType } = orderColumnBy;
            if (orderColumn !== null && orderType === 'Crescente') {
              if (a[orderColumn] - b[orderColumn]) {
                return Number(a[orderColumn]) - Number(b[orderColumn]);
              }
              return a[orderColumn].localeCompare(b[orderColumn]);
            }
            if (orderColumn !== null && orderType === 'Decrescente') {
              if (a[orderColumn] - b[orderColumn]) {
                return Number(b[orderColumn]) - Number(a[orderColumn]);
              }
              return b[orderColumn].localeCompare(a[orderColumn]);
            }
            return 1;
          })
          .map((planet) => (
            <tr key={ planet.name }>
              {Object.values(planet).map((item, i) => {
                if (item === planet.name) {
                  return (
                    <td key={ i } data-testid="planet-name">
                      {item}
                    </td>
                  );
                }
                return (
                  <td key={ i }>
                    {item}
                  </td>);
              })}
            </tr>))}
      </tbody>
    </table>
  );
}
