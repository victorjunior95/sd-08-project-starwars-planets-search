import React, { createContext } from 'react';

export const planetsContext = createContext([]);

const PlanetsProvider = ({ children }) => (
  <planetsContext.Provider>
    {
      children
    }
  </planetsContext.Provider>
);

export default PlanetsProvider;
