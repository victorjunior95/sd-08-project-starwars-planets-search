import React from 'react';

function Select({ testid, options }) {
  return (
    <select
      data-testid={ testid }
    >
      { options.map((option) => <option
            key={ option }
            value={ option }
          >
            { option }
          </option> 
        )}
    </select>
  );
}

export default Select;
