import React, { useContext } from 'react';
import MyContext from '../context';

function Table() {
  const {
    data: { results },
    filters: { filterByName, filterByNumericValues },
  } = useContext(MyContext);
  results.forEach((result) => delete result.residents);
  const filteredResults = results
    .filter((planet) => {
      const { name } = planet || { name: null };
      return name ? name.toLowerCase().includes(filterByName.toLowerCase()) : true;
    })
    .filter((planet) => filterByNumericValues.reduce(((acc, val) => {
      const { column, comparison, value } = val;
      if ((comparison === 'maior que' && Number(planet[column]) <= value)
      || (comparison === 'menor que' && Number(planet[column]) >= value)
      || (comparison === 'igual a' && planet[column] !== value)
      || (planet[column] === 'unknown')) {
        return false;
      }
      return acc;
    }), true));

  const tableData = Object.keys(results[0]);

  return (
    <table>
      <thead>
        <tr>
          {tableData.map((property) => (
            <th key={ property }>
              {property.replace('_', ' ')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredResults.map((planet) => (
          <tr key={ planet.name || 'loading' }>
            {tableData.map((property) => (
              <td key={ `${planet.name}-${property}` }>
                {planet[property]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
