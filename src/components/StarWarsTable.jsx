import React from 'react';
import Select from './Select';
import SWTableHead from './SWTableHead';
import SWTableBody from './SWTableBody';

const StarWarsPlanetsTable = () => (
  <main>
    <Select />
    <table>
      <SWTableHead />
      <SWTableBody />
    </table>
  </main>
);

export default StarWarsPlanetsTable;
