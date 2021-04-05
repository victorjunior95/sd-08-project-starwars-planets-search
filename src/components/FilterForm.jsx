import React, { useContext } from 'react';
import { PlanetContext } from '../context/PlanetProvider';

export default function FilterForm() {
  const { saveFilter } = useContext(PlanetContext);

  return (
    <form>
      <label
        htmlFor="name"
      >
        <input
          id="name"
          name="name"
          type="text"
          data-testid="name-filter"
          placeholder="Search by name"
          onChange={ (e) => saveFilter(e) }
        />
      </label>
    </form>
  );
}
