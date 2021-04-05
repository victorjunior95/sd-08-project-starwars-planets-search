import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const {
    filters,
    setFilters,
  } = useContext(MyContext);

  function pesquisaPlanetas({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  }

  return (
    <form>
      <label htmlFor="input">
        {'Pesquisa: '}
        <input
          data-testid="name-filter"
          id="input"
          onChange={ pesquisaPlanetas }
          type="text"
        />
      </label>
    </form>
  );
}

export default Header;
