import React, { useContext } from 'react';
import PlanetsProvider from '../context/PlanetsProvider';

function Table() {
  const planets = useContext(PlanetsProvider);
  console.log(planets);
  return (
    <table>
      <thead>
        <tr>
          Oi
        </tr>
      </thead>
    </table>
  );
}

export default Table;
