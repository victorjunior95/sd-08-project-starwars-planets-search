import React, { useContext } from 'react';
import StarsAppContext from '../context/StarsAppContext';

function Forms() {
  const { setByName, byName } = useContext(StarsAppContext);
  const { filterByName: { name } } = byName;

  const handleChange = (e) => {
    setByName({ filterByName: { name: e.target.value } });
  };

  return (
    <form>
      <label htmlFor="name-filter">
        Nome do Planeta:
        <input
          type="search"
          name="name-filter"
          data-testid="name-filter"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}
export default Forms;
