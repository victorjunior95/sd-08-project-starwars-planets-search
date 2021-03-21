import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import { getPlanetKeys } from '../services/requests';

function PlanetsTable() {
  const [keys, setKeys] = useState([]);
  const { data } = useContext(PlanetsContext);

  useEffect(() => {
    const updateKeys = async () => {
      setKeys(await getPlanetKeys());
    };
    updateKeys();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          { keys.map((key) => (
            <th key={ key }>
              { key }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.map((planet, index) => (
          <tr key={ index }>
            { keys.map((key) => (
              <td key={ key }>
                {
                  // typeof planet[key] === 'string'
                  //   ? planet[key]
                  //   : console.log(`aqui ------------------------------- ${planet[key][0]}`)
                  planet[key]
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlanetsTable;
