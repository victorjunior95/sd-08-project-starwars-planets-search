import React, { useContext } from 'react';
import StarsAppContext from '../context/StarsAppContext';

function Table() {
  const { filteredPlanets } = useContext(StarsAppContext);
  const title = ['name', 'rotation_period', 'orbital_period',
    'diameter', 'climate', 'gravity', 'terrain', 'surface_water',
    'population', 'films', 'created', 'edited', 'url'];

  return (
    filteredPlanets.length > 0
    && (
      <table border="solid 1px">
        <thead>
          <tr>
            { title
              .map((i, index) => <th key={ index }>{i}</th>)}
          </tr>
        </thead>
        <tbody>
          {filteredPlanets
            .map((i, index) => (
              <tr key={ index }>
                {Object.values(i)
                  .map((valor) => <td key={ valor }>{valor}</td>)}
              </tr>
            ))}
        </tbody>
      </table>
    )

  );
}

export default Table;
