/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import {
  Table,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import NumericFilterInputs from './NumericFilterInputs';
import { Context } from '../context';

const StarWarsTable = () => {
  const { dataObject, filterObject } = useContext(Context);

  useEffect(() => {
    dataObject.handleData();
  }, []);

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
      <NumericFilterInputs />
      <section>
        { filterObject.filters.filterByNumericValues.length
          ? filterObject.filters.filterByNumericValues.map((numericFilter) => (
            <div key={ numericFilter.column } data-testid="filter">
              <span>{ numericFilter.column }</span>
              <span>{ numericFilter.comparison }</span>
              <span>{ numericFilter.value }</span>
              <Button
                variant="danger"
                onClick={ () => filterObject.removeNumericFilter(numericFilter.column) }
              >
                X
              </Button>
            </div>
          ))
          : <p>No filters</p> }
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
          { dataObject.planets
            ? dataObject.planets
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
