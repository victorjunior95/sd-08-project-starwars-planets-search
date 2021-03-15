import React, { useContext, useEffect } from 'react';
import PlanetContext from '../contexts/PlanetContext';

function Table() {
  const { fetchPlanetsList, planetsList } = useContext(PlanetContext);

  useEffect(() => {
    fetchPlanetsList();
  }, [fetchPlanetsList]);

  function getTableHeadInfo() {
    const planetKeys = Object.keys(planetsList[0]);
    return planetKeys.filter((key) => key !== 'residents');
  }

  if (planetsList.length) {
    const headInfo = getTableHeadInfo();
    return (
      <table>
        <thead>
          <tr>
            { headInfo.map((planetKey) => (
              <th key={ planetKey } className="table-head">{ planetKey }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { planetsList.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <span>table</span>
      <span>Loading...</span>
    </>
  );
}

export default Table;
