import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Table.css';

function Table() {
  const { data, isLoading } = useContext(PlanetsContext);

  return (isLoading ? 'Loading...'
    : (
      <table>
        <thead>
          <tr>
            { data[0]
            && Object.keys(data[0]).map((head, index) => (
              <th key={ index }>{ head.toUpperCase() }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { data[0] && data.map((infos) => (
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
