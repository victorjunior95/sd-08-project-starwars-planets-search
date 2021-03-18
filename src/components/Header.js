import React, { useContext } from 'react';
import MyContext from '../context/Context';

export default function Header() {
  const { state, setState } = useContext(MyContext);
  function handleChange({ target }) {
    const newTable = state.fetchPlanets
      .filter((planets) => planets.name.includes(target.value));
    setState({
      ...state,
      planetsTable: newTable,
    });
  }
  return (
    <header>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </header>
  );
}
