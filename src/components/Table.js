import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

import styles from '../styles/components/Table.module.css';

const Table = () => {
  const { planets } = useContext(StarWarsContext);
  const headers = Object.keys(planets[0] || []);

  function renderPlanetRow(planet, key) {
    return (
      <tr key={ key }>
        { Object.values(planet).map((info, index) => (
          <td key={ index }>
            { Array.isArray(info) ? info.join('\n') : info.toString() }
          </td>
        )) }
      </tr>
    );
  }

  return (
    <table className={ styles.table }>
      <thead>
        <tr>
          { headers.map((header, index) => (
            <th key={ index }>{header}</th>)) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet, key) => renderPlanetRow(planet, key)) }
      </tbody>
    </table>
  );
};

export default Table;
