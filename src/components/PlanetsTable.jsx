import React from 'react';
// import PropTypes from 'prop-types';

import { PlanetsType } from '../common/Types';

const TABLE_HEADERS = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function PlanetsTable({ data }) {
  const builder = () => data.map((i, index) => (
    <tr role="row" key={ index }>
      <th>{i.name}</th>
      <th>{i.rotation_period}</th>
      <th>{i.orbital_period}</th>
      <th>{i.diameter}</th>
      <th>{i.climate}</th>
      <th>{i.gravity}</th>
      <th>{i.terrain}</th>
      <th>{i.surface_water}</th>
      <th>{i.population}</th>
      <th>{i.films}</th>
      <th>{i.created}</th>
      <th>{i.edited}</th>
      <th>{i.url}</th>
    </tr>));

  return (
    <table>
      <tbody>
        <tr role="row">
          { TABLE_HEADERS.map((i, index) => (
            <th key={ index } role="columnheader">
              {i}
            </th>)) }
        </tr>
        { builder()}
      </tbody>
    </table>
  );
}

PlanetsTable.propTypes = {
  data: PlanetsType.isRequired,
};

export default PlanetsTable;
