import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import getPlanetsApi from '../../services/getPlanetsAPI';

import '../../styles/table-of-planets.css';

export default function TableOfPlanets(props) {
  const { state, setState } = props;

  const getPlanetsApiAndSetState = async () => {
    const data = await getPlanetsApi();
    setState({ ...state, results: data });
  };

  useEffect(() => {
    getPlanetsApiAndSetState();
  }, []);

  return (
    <table width="100%">
      <tr className="header-table">
        <th role="columnheader">Nome</th>
        <th role="columnheader">Periodo rotacional</th>
        <th role="columnheader">Periodo orbital</th>
        <th role="columnheader">Diametro</th>
        <th role="columnheader">Clima</th>
        <th role="columnheader">Gravidade</th>
        <th role="columnheader">Terreno</th>
        <th role="columnheader">Água da superfície</th>
        <th role="columnheader">População</th>
        <th role="columnheader">Filmes</th>
        <th role="columnheader">Criado</th>
        <th role="columnheader">Editado</th>
        <th role="columnheader">URL</th>
      </tr>
      { state.results.map((planet) => (
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
      )) }
    </table>
  );
}

TableOfPlanets.propTypes = {
  state: PropTypes.arrayOf.isRequired,
  setState: PropTypes.func.isRequired,
};
