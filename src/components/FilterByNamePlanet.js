import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterByNamePlanet() {
  const { setSearchName } = useContext(PlanetsContext);
  const [nameLocal, setNameLocal] = useState('');

  useEffect(() => {
    setSearchName(nameLocal);
  }, [nameLocal, setSearchName]);

  return (
    <input
      data-testid="name-filter"
      value={ nameLocal }
      type="text"
      onChange={ ({ target: { value } }) => { setNameLocal(value); } }
    />
  );
}
