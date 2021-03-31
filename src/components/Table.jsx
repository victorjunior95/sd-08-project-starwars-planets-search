/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import {
  Table,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Context } from '../context';

const StarWarsTable = () => {
  const { dataObject, filterObject } = useContext(Context);
  const [
    filteredPlanets,
    setFilteredPlanets,
  ] = useState([]);

  useEffect(() => {
    dataObject.handleData(setFilteredPlanets);
  }, []);

  const applyNumericFilters = ({ column, comparison, value }) => {
    const { data } = dataObject;
    switch (comparison) {
    case 'maior que':
      setFilteredPlanets(data.filter((planet) => Number(planet[column]) > Number(value)));
      break;
    case 'menor que':
      setFilteredPlanets(data.filter((planet) => Number(planet[column]) < Number(value)));
      break;
    case 'igual a':
      setFilteredPlanets(data.filter((planet) => planet[column] === value));
      break;
    default:
      setFilteredPlanets(data);
    }
  };

  return (
    <div>
      <InputGroup className="mb-3 p-2">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Filter by name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          data-testid="name-filter"
          placeholder="Planet name"
          aria-describedby="basic-addon1"
          value={ filterObject.filters.filterByName.name }
          onChange={ ({ target }) => {
            filterObject.handleFilterByName(target.value);
          } }
        />
      </InputGroup>
      <section className="p-2 mb-3">
        <select
          data-testid="column-filter"
          className="browser-default custom-select mb-2"
          value={ filterObject.filters.filterByNumericValues.column }
          onChange={ ({ target }) => {
            filterObject.handleFilterByNumericValues('column', target.value);
          } }
        >
          <option selected value="">Select the parameter</option>
          <option value="population">Population</option>
          <option value="orbital_period">Orbital period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation period</option>
          <option value="surface_water">Surface water</option>
        </select>
        <select
          data-testid="comparison-filter"
          className="browser-default custom-select mb-2"
          value={ filterObject.filters.filterByNumericValues.comparison }
          onChange={ ({ target }) => {
            filterObject.handleFilterByNumericValues('comparison', target.value);
          } }
        >
          <option selected>Select the comparison</option>
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
        <InputGroup className="mb-2">
          <FormControl
            data-testid="name-filter"
            placeholder="Number"
            aria-describedby="basic-addon1"
            value={ filterObject.filters.filterByNumericValues.value }
            onChange={ ({ target }) => {
              filterObject.handleFilterByNumericValues('value', target.value);
            } }
          />
        </InputGroup>
        <Button
          disabled={ !filterObject.filters.filterByNumericValues[0].column
            || !filterObject.filters.filterByNumericValues[0].comparison
            || !filterObject.filters.filterByNumericValues[0].value }
          variant="secondary"
          size="sm"
          block
          onClick={ () => {
            applyNumericFilters(filterObject.filters.filterByNumericValues[0]);
          } }
        >
          Apply filters
        </Button>
      </section>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Films</th>
            <th>Created at</th>
            <th>Edited at</th>
          </tr>
        </thead>
        <tbody>
          { filteredPlanets
            ? filteredPlanets
              .filter((result) => result.name.includes(
                filterObject.filters.filterByName.name,
              ))
              .map((planet) => (
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
                  <td>{ planet.residents }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                </tr>
              ))
            : (
              <tr>
                <td colSpan="13">Loading</td>
              </tr>) }
        </tbody>
      </Table>
    </div>
  );
};

export default StarWarsTable;
