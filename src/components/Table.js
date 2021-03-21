import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const [fill, setFill] = useState('');
  return (
    <>
      <input
        type="text"
        name="filter"
        value={ fill }
        onChange={ ({ target }) => setFill(target.value) }
        data-testid="name-filter"
      />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Periodo de rotação </th>
            <th>Periodo Orbital</th>
            <th>Diametro</th>
            <th>Clima</th>
            <th>Grvidade</th>
            <th>Terreno</th>
            <th>Agua na Superficie</th>
            <th>População</th>
            <th>Filmes</th>
            <th>Creado no</th>
            <th>Editado no</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((planets) => {
            if (fill.length === 0) return planets;

            return planets.name.toLowerCase().includes(fill.toLowerCase());
          }).map((planet, index) => (
            <tr key={ index }>
              <th>{ planet.name }</th>
              <th>{ planet.rotation_period }</th>
              <th>{ planet.orbital_period }</th>
              <th>{ planet.diameter }</th>
              <th>{ planet.climate }</th>
              <th>{ planet.gravity }</th>
              <th>{ planet.terrain }</th>
              <th>{ planet.surface_water }</th>
              <th>{ planet.population }</th>
              <th>{ planet.films }</th>
              <th>{ planet.created }</th>
              <th>{ planet.edited }</th>
              <th>{ planet.url }</th>
            </tr>
          ))}

        </tbody>

      </table>
    </>
  );
}

export default Table;
