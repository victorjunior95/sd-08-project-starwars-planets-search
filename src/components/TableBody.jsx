import React from 'react';

import Planets from '../context/PlanetsContext';

function TableBody() {
  const { store: { data, filters } } = React.useContext(Planets);
  const filterName = filters.filterByName.name;

  function filterPlanet(param) {
    const { name } = param;
    if (name.includes(filterName)) {
      return param;
    }
  }
  return (
    <>
      {
        data.filter(filterPlanet)
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.diameter}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.films.length}</td>
              <td>{planet.gravity}</td>
              <td>{planet.population}</td>
              <td>{planet.residents.length}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))
      }
    </>
  );
}

export default TableBody;
