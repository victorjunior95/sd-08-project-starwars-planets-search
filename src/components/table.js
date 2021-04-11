import React, { useContext } from 'react';
import { PlanetsContext } from '../context/planetsContext';

const Table = () => {
  const { data, header, filteredData } = useContext(PlanetsContext);
  if (data.length !== 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {header.map((property) => <th key={ property }>{property}</th>)}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((planet, index) => (
              <tr key={ index }>
                {header.map((property, index2) => (
                  <td key={ index2 }>{planet[property]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>Carregando...</div>
  );
};

export default Table;
