import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

const initialValue = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

function Table() {
  const [filterValues, setFilterValues] = useState([]);
  const { data, setFilters } = useContext(AppContext);
  const [values, setValues] = useState(initialValue);
  const { filterByNumericValues, setFilterByNumericValues } = useContext(AppContext);

  useEffect(() => {
    setFilterValues(data);
  }, [data]);

  function handleChange(e) {
    setFilters({ filters: { filterByName: { name: e.target.value } } });
    const resp = data
      .filter((value) => value.name.toLocaleLowerCase().includes(e.target.value));
    setFilterValues(resp);
  }

  function handleChange2(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleClick() {
    setFilterByNumericValues([...filterByNumericValues, values]);
    const { column, comparison, value } = values;
    if (value === '') return;
    if (comparison === 'maior que') {
      const resp = data.filter((values2) => Number(values2[column]) > values.value);
      document.getElementById(column).remove();
      document.getElementById('filtros').innerHTML = column;
      return setFilterValues(resp);
    }

    if (comparison === 'menor que') {
      const resp = data.filter((values2) => Number(values2[column]) < values.value);
      document.getElementById(column).remove();
      return setFilterValues(resp);
    }
    if (comparison === 'igual a') {
      const resp = data.filter((values2) => Number(values2[column]) === Number(value));
      document.getElementById(column).remove();
      return setFilterValues(resp);
    }
  }

  const renderPlanets = (planets) => (
    <tr key={ planets.name }>
      <td>{planets.name}</td>
      <td>{planets.rotation_period}</td>
      <td>{planets.orbital_period}</td>
      <td>{planets.diameter}</td>
      <td>{planets.climate}</td>
      <td>{planets.gravity}</td>
      <td>{planets.terrain}</td>
      <td>{planets.surface_water}</td>
      <td>{planets.population}</td>
      <td>{planets.films}</td>
      <td>{planets.created}</td>
      <td>{planets.edited}</td>
      <td>{planets.url}</td>
    </tr>
  );

  return (
    <>
      <div>
        <label htmlFor="input-name">
          Pesquisar por nome
          <input
            type="text"
            id="input-name"
            onChange={ handleChange }
            data-testid="name-filter"
          />
        </label>
        <select data-testid="column-filter" onChange={ handleChange2 } name="column">
          <option id="population">population</option>
          <option id="orbital_period">orbital_period</option>
          <option id="diameter">diameter</option>
          <option id="rotation_period">rotation_period</option>
          <option id="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleChange2 }
          name="comparison"
        >
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ handleChange2 }
          name="value"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Adicionar Filtro
        </button>
        <section>
          <h3>Filtros Utilizados</h3>
          <div id="filtros" />
        </section>
      </div>
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
          {filterValues.map((planets) => renderPlanets(planets))}
        </tbody>
      </table>
    </>

  );
}

export default Table;
