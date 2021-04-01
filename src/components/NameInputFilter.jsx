import React, { useContext } from 'react';
import Context from '../context/Context';

export default function NameInputFilter() {
  const { filters, handleFilterNameChange } = useContext(Context);
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filters.filterByName.name }
      name="name"
      onChange={ handleFilterNameChange }
      placeholder="Digite o nome do planeta"
    />
  );
}
