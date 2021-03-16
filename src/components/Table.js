import React, { useEffect, useState, useContext } from 'react';
import fetchPlanets from '../services/API_STAR_WARS';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const [planets, setPlanets] = useState([]);
  const {
    filters: { filterByName: { name } },
  } = useContext(PlanetsContext);

  useEffect(() => {
    const getPlanets = async () => {
      const results = await fetchPlanets();
      const filterPlanets = await results.filter((planet) => planet.name.includes(name));
      setPlanets(filterPlanets);
    };
    getPlanets();
  }, [name]);

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {
          planets.map((item) => (
            <tr key={ item.name }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films[0]}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
