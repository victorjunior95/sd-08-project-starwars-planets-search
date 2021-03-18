import React, { useEffect, useState } from 'react';
// import MyContext from '../context/Context';
import getPlanetsApi from '../services/getApi';

function Table() {
  const [state, setState] = useState({
    planetsTable: [],
  });
  async function getPlanetsApiAndSetState() {
    const getPlanets = await getPlanetsApi();
    setState({
      ...state,
      planetsTable: getPlanets,
    });
  }
  useEffect(() => {
    getPlanetsApiAndSetState();
  }, []);
  // const context = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Periodo rotacional</th>
          <th>Periodo orbital</th>
          <th>Diametro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água da superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          state.planetsTable.map((planet) => (
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
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
