import React, { useState, useContext } from 'react';
import AppContext from '../context/Context';
import PlanetsList from '../components/PlanetsList';

function TablePlanets() {
  const [searchName, setSearch] = useState('');
  console.log(searchName);
  const { loading } = useContext(AppContext);
  return (
    <div>
      <h1>Lista de Planetas</h1>
      <input
        type="text"
        onChange={ (e) => setSearch(e.target.value) }
      />
      {loading ? <h2>Loading...</h2> : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <PlanetsList />
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TablePlanets;
