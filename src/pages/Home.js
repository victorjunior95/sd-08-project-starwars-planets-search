import React, { useState } from 'react';

import FilterSearch from '../components/FilterSearch';
import TableOfPlanets from '../components/TableOfPlanets';

export default function Home() {
  const [state, setState] = useState({
    results: [],
    filters: { filterByName: { name: '' } },
    fixResults: [],
  });
  return (
    <>
      <FilterSearch state={ state } setState={ setState } />
      <TableOfPlanets state={ state } setState={ setState } />
    </>
  );
}
