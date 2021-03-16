import React, { useContext, useState } from 'react';
import { planetsContext } from './PlanetsProvider';

const PlanetsTable = () => {
  const { filteredPlanets, setName, setNumericFilter } = useContext(planetsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  // const { column, comparison, value } = filters.filterByNumericValues;
  const renderTableHeader = () => (
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
  );
  const renderTableBody = () => (
    <tbody>
      {
        filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{parseInt(planet.rotation_period, 10)}</td>
            <td>{parseInt(planet.orbital_period, 10)}</td>
            <td>{parseInt(planet.diameter, 10)}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{parseInt(planet.surface_water, 10)}</td>
            <td>{planet.population}</td>
            <td>
              {
                planet.films.map((film) => `${film}, `)
              }
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))
      }
    </tbody>
  );

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <>
      <div>
        <p>Digite um nome:</p>
        <input data-testid="name-filter" type="text" onChange={ handleChange } />
      </div>
      <div>
        <select data-testid="column-filter" onChange={ (e) => setColumn(e.target.value) }>
          <option value="population">Population</option>
          <option value="orbital_period">Orbiltal Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          step="1"
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => setNumericFilter(column, comparison, value) }
        >
          Adicionar filtro
        </button>
      </div>

      <table>
        { renderTableHeader()}
        { renderTableBody() }
      </table>
    </>
  );
};

export default PlanetsTable;
