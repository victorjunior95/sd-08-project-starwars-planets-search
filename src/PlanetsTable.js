import React, { useContext, useState } from 'react';
import { planetsContext } from './PlanetsProvider';
import TableHead from './TableHead';

const PlanetsTable = () => {
  const { filteredPlanets, setName, setNumericFilter } = useContext(planetsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  // const { column, comparison, value } = filters.filterByNumericValues;

  const renderTableBody = () => (
    <tbody>
      {
        filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
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
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option value="" selected disabled>Column</option>
          <option value="population">Population</option>
          <option value="orbital_period">Orbiltal Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="" selected disabled>Comparison</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          value={ value }
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
        <TableHead />
        { renderTableBody() }
      </table>
    </>
  );
};

export default PlanetsTable;
