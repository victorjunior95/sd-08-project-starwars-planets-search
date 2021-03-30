/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Table, InputGroup, FormControl } from 'react-bootstrap';
import { Context } from '../context';

const StarWarsTable = () => {
  const { dataObject, filterObject } = useContext(Context);

  useEffect(() => {
    dataObject.set();
    console.log('1');
  }, []);
  console.log(filterObject);

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Filter by name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          data-testid="name-filter"
          placeholder="Planet name"
          aria-describedby="basic-addon1"
          value={ filterObject.value.filters.filterByName.name }
          onChange={ ({ target }) => {
            filterObject.set(target.value);
          } }
        />
      </InputGroup>
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
          { dataObject.value
            ? dataObject.value
              .filter((result) => result.name.includes(
                filterObject.value.filters.filterByName.name,
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
