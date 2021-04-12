import React, { useContext } from 'react';
import { ContextFromStarWars } from '../contexts/ContextFromStarWars';

function SwHeader() {
  const { inputName, setInputName } = useContext(ContextFromStarWars);
  const handleChange = ({ value }) => {
    setInputName(value);
  };

  return (
    <div className="swHeaderContainer">
      <input
        type="text"
        data-testid="name-filter"
        id="search-name"
        placeholder="search name"
        value={ inputName }
        onChange={ ({ target }) => handleChange(target) }
      />
    </div>
  );
}

export default SwHeader;
