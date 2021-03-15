import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';
import './Table.css';

function mapData(planetsParam) {
  return planetsParam.map((planet) => (
    <tr key={ `ReactKeyTr${planet.name}` }>
      { delete planet.residents }
      {
        Object.values(planet).map((value) => (
          <td key={ `reactKeyTd${value}` }>{value}</td>
        ))
      }
    </tr>
  ));
}

export default function Table() {
  const { planets } = useContext(PlanetsContext);
  const tableHeaderInfo = Object.keys(planets[0]).filter((e) => e !== 'residents' && e);

  return (
    <table>
      <thead>
        <tr>
          {
            tableHeaderInfo.map((title) => <th key={ `ReactKeyTh${title}` }>{title}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {mapData(planets)}
      </tbody>
    </table>
  );
}
