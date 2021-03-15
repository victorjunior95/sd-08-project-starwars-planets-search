import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

export default function Table() {
  const { setFilterByName } = useContext(StarWarsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ (e) => setFilterByName(e.target.value) }
      />
    </div>
  );
}
