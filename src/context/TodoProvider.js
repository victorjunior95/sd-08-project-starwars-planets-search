import React, { useState, useEffect } from 'react';
import TodoContext from './TodoContext';
import starWarsApi from '../Data';

function TodoProvider({ children }) {
  const [table, setTable] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState('');

  useEffect(() => {
    async function getPlanet() {
      const result = await starWarsApi();
      setTable(result);
    }
    getPlanet();
  }, []);

  const getFilters = {
    ...filters,
    filterByName: { name },
  };

  const contextValue = {
    filters: getFilters,
    table,
    setName,
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
