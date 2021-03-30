import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Context } from '../context';

const StarWarsTable = () => {
  const { dataObject } = useContext(Context);

  useEffect(() => {
    dataObject.set();
  }, []);
  console.log(dataObject.value);

  return (
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
          ? dataObject.value.map((planet) => (
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
  );
};

export default StarWarsTable;
