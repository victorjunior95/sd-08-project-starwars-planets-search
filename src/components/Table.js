import React, { useContext } from 'react';
import ContextStarWars from '../Context/ContextStarWars';

function Table() {
  const { planets } = useContext(ContextStarWars);
  console.log(planets);
  return (
    <div>
      <h1>Tabela</h1>
      {/* <span>{planets[0].name}</span> */}
    </div>
  );
}

export default Table;
