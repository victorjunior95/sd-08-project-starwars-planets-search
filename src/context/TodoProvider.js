import React, { useState, useEffect } from 'react';
import TodoContext from './TodoContext';
import starWarsApi from '../Data';

function TodoProvider({ children }) {
  const [table, setTable] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    async function getPlanet() {
      const result = await starWarsApi();
      setTable(result);
    }
    getPlanet();
  }, []);

  return (
    <div>
      <TodoContext.Provider value={ { table, filters, setTable, setFilters } }>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;
