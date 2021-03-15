import React, { useEffect } from 'react';
import planetsAPI from '../services/planetsAPI';

function Table() {
  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await planetsAPI();
      console.log(response);
    };
    fetchPlanets();
  });

  return (
    <h2>Tabela de planetas!</h2>
  );
}

export default Table;
