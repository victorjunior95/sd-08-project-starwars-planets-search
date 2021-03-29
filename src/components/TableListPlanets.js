import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const HEADER_LIST_DESCRIPTIONS_PLANETS = ['Name', 'Rotation Period', 'Orbital Period',
  'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

const MIN_LENGTH = 3;

export default function TableListPlanets() {
  const { listPlanets, searchName } = useContext(PlanetsContext);
  const [data, setData] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });
  const [filter, setFilter] = useState({});

  let renderHere = [];
  if (typeof searchName === 'undefined') {
    renderHere = listPlanets;
  } else {
    renderHere = listPlanets.filter((element) => element.name
      .toUpperCase()
      .includes(searchName.toUpperCase()));
  }
  if (Object.keys(filter).length === MIN_LENGTH) {
    const { comparison, column, value } = filter;

    if (comparison === 'maior que') {
      renderHere = renderHere.filter((element) => Number(element[column])
       > Number(value));
    } else if (comparison === 'menor que') {
      renderHere = renderHere.filter((element) => element[column] < value
      || element[column] === 'unknown');
    } else {
      renderHere = renderHere.filter((element) => element[column] === value);
    }
  }

  const handleChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    setFilter({ ...data });
  };
  return (
    <>
      <div>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (event) => handleChange(event) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (event) => handleChange(event) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>

        </select>
        <input
          onChange={ (event) => handleChange(event) }
          data-testid="value-filter"
          type="number"
          name="value"
        />
        <button
          onClick={ handleSubmit }
          data-testid="button-filter"
          type="button"
          value="Filtrar"
        >
          Filtrar
        </button>
      </div>

      <table>
        <thead>
          <tr>
            {HEADER_LIST_DESCRIPTIONS_PLANETS.map((description, index) => (
              <th key={ index }>
                {description}
              </th>)) }
          </tr>
        </thead>
        <tbody>
          { renderHere.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
