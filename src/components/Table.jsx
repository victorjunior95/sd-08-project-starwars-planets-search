import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';

const Table = () => {
  const { data } = useContext(Context);

  function renderRow(planet, index) {
    return (
      <tr key={ index }>
        {Object.values(planet).map((info, key) => (
          <td key={ key }>
            { Array.isArray(info) ? info.join('\n') : info.toString() }
          </td>
        ))}
      </tr>
    );
  }

  return (
    <>
      <h1>Star Wars Planets</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0] || []).map((info, index) => (
              <th scope="col" key={ index }>
                { info }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{ data.map((planet, index) => renderRow(planet, index)) }</tbody>
      </table>
    </>
  );
};

export default Table;
