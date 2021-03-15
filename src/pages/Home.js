import React from 'react';

import FilterSearch from '../components/FilterSearch';
import TableOfPlanets from '../components/TableOfPlanets';

export default function Home() {
  return (
    <>
      <FilterSearch />
      <TableOfPlanets />
    </>
  );
}
