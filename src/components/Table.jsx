import React from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';

function Table() {
  return (
    <table border="1">
      <TableHead />
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
}

export default Table;
