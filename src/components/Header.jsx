import React, { useState, useEffect, useContext } from 'react';

import starWarsContext from '../context/StarWarsContext';

const Header = () => {
  // fazer um custome hook pra todas as filtragens dps!
  const { filters, setFilters } = useContext(starWarsContext);

  const [name, setName] = useState('');

  const sendFilters = (value) => {
    setName(value);
    setFilters({ ...filters, filterByName: { name: value } });
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <div>
      <input
        type="text"
        value={ name }
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => sendFilters(value) }
      />
    </div>
  );
};

export default Header;
