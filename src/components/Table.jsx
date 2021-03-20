import React, { useContext, useEffect } from 'react';
import ContextStars from '../context/ContextStar';

function Table() {
  const contexto = useContext(ContextStars);
  const { planets, setplanets, filters, setfilters } = contexto;

  const filteringByName = (e) => {
    const valueOfEvent = e.target.value;
    const prevState = { ...filters };
    prevState.filterByName.name = valueOfEvent;
    setfilters(prevState);
  };
  useEffect(() => {
    let filteredPlanets = planets;
    const planetname = filters.filterByName.name;
    filteredPlanets = planets.filter(
      (planet) => (planet.name.includes(planetname)),
    );
    setplanets(filteredPlanets);
  }, []);

  return (
    <div>
      <header>
        <label htmlFor="filterbyname">
          Filtro por nome:
          <br />
          <input
            type="text"
            name="filterbyname"
            value={ filters.filterByName.name }
            data-testid="name-filter"
            onChange={ filteringByName }
          />
        </label>
        <input type="text" data-testid="value-filter" />

        <select name="column" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
        </select>

        <select name="comparison" data-testid="comparison-filter">
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="===">igual a</option>
        </select>

        <input type="number" data-testid="value-filter" />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => console.log('clicked') }
        >
          Filtrar
        </button>
      </header>
      <table border="1px solid black">
        <thead>
          <tr>
            {Object.keys(planets[0] || []).filter(
              (i) => (i !== 'residents'),
            ).map((item, i) => (
              <th key={ i }>{item}</th>
            ))}

          </tr>
        </thead>
        <tbody>
          {planets.map((item, i) => (
            <tr key={ i.name }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films.map((f) => (f))}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
