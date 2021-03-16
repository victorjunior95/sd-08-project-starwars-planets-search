import React, { createContext, useState, useEffect } from 'react';

export const PlanetsContext = createContext([]);

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanetes] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
      const { results } = await fetch(endpoint).then((response) => response.json());
      results.map((only) => delete only.residents);
      setPlanetes(results);
    };
    fetchPlants();
  }, []);

  return (
    <PlanetsContext.Provider value={ planets }>
      {
        children
      }
    </PlanetsContext.Provider>
  );
};

export default PlanetsProvider;
