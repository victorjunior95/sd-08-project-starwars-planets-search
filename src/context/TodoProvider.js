import React, { useState, useEffect } from 'react';
import TodoContext from './TodoContext';
import starWarsApi from '../Data';

function TodoProvider({ children }) {
  const [table, setTable] = useState([]);

  useEffect(() => {
    async function getPlanet() {
      const result = await starWarsApi();
      setTable(result);
    }
    getPlanet();
  }, []);

  const contextValue = {
    table,
  };

  return (
    <div>
      <TodoContext.Provider value={ contextValue }>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;
