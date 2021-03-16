import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import { Context } from '../context';

const tableHeaderContent = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
  'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created',
  'Edited', 'Url'];

const Table = () => {
  const { data, isLoading } = useContext(Context);

  return (!isLoading
    && (
      <table>
        <thead>
          <tr>
            { tableHeaderContent.map((value) => <th key={ value }>{value}</th>) }
          </tr>
        </thead>
        <tbody>
          { data.map((planet) => (
            <tr key={ planet.name }>
              { Object.entries(planet)
                .filter(([key]) => key !== 'residents')
                .map(([, value]) => (<td key={ value }>{ value }</td>)) }
            </tr>)) }
        </tbody>
      </table>)
  );
};

// Table.propTypes = {

// };

export default Table;
