import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function PlanetsTable() {
  const { data } = useContext(PlanetsContext);

  return (
    <table>
      { console.log(data.length) }
      <thead>
        <tr>
          <th>header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>body</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PlanetsTable;
