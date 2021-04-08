import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { isLoading, planets } = useContext(PlanetContext);

  const title = ['name', 'rotation_period', 'orbital_period',
    'diameter', 'climate', 'gravity', 'terrain', 'surface_water',
    'population', 'films', 'created', 'edited', 'url'];

  // console.log(planets);

  return (
    isLoading
      && (
        <table border="solid">
          <thead>
            <tr>
              {title.map((item, i) => <th key={ i }>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {
              planets.map((planet, i) => (
                <tr key={ i }>
                  { Object.values(planet)
                    .map((info) => <td key={ info }>{ info }</td>) }
                </tr>))
            }
          </tbody>
        </table>
      )
  );
}

export default Table;
