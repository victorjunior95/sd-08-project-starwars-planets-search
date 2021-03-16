import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Table.css';

function Table() {
  const { dataFiltered: { dataByName }, isLoading } = useContext(PlanetsContext);

  return (isLoading ? 'Loading...'
    : (
      <table>
        <thead>
          <tr>
            { dataByName[0]
            && Object.keys(dataByName[0]).map((head, index) => (
              <th key={ index }>{ head.toUpperCase() }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { dataByName[0] && dataByName.map((infos) => (
            <tr key={ infos.name }>
              { Object.values(infos).map((info, idx) => (
                <td key={ idx }>{ info }</td>
              )) }
            </tr>
          )) }
        </tbody>
      </table>
    ));
}

export default Table;
