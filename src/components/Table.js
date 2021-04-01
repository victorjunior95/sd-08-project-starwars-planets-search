import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import filterDataByNumericValues from '../helpers/filterDataByNumericValues';
import { getPlanetKeys } from '../services/requests';

function PlanetsTable() {
  const [keys, setKeys] = useState([]);
  const { data, filters } = useContext(PlanetsContext);
  const { name } = filters.filterByName;
  const { filterByNumericValues } = filters;
  const filtredDataByName = data.filter((planet) => planet.name.includes(name)) || [];
  const filtredData = filterDataByNumericValues(filtredDataByName, filterByNumericValues);

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
        { filtredData.map((planet, index) => (
          <tr key={ index }>
            { keys.map((key) => (
              <td key={ key }>
                {
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
