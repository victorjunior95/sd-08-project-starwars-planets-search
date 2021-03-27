import React, { useContext } from 'react';
import TableHeader from './sub-comps/TableHeader';
import TableData from './sub-comps/TableData';
import SWContext from '../context/SWContext';

const Table = () => {
  const context = useContext(SWContext);
  const { data } = context;
  return (
    <table>
      <TableHeader />
      <TableData results={ data.results } />
    </table>
  );
};

export default Table;
