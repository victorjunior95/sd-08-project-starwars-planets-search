import React, { useContext } from 'react';
import MyContext from '../context';

function Table() {
  const { results } = useContext(MyContext);
  results.forEach((result) => delete result.residents);
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
        {results.map((planet) => (
          <tr key={ planet.name }>
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
