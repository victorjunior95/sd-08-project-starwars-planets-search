import React, { useEffect, useContext } from 'react';
import SWContext from '../context/SWContext';

export default function Table() {
  const { fetchData, FSWData, UseFilter, filter } = useContext(SWContext);
  useEffect(() => {
    async function FetchSW() {
      await fetchData();
    }
    FetchSW();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // console.log('Filtro mudou');
    UseFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const tableHeader = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created',
    'edited', 'url'];

  return (

    <table>
      <thead>
        <tr>
          {tableHeader.map((item) => (
            <th key={ item }>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {FSWData.map((line) => (
          <tr key={ line.name }>
            {tableHeader.map((item) => (
              <td
                key={ item }
                data-testid={ item === 'name' ? 'planet-name' : '' }
              >
                {line[item]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

  );
}
