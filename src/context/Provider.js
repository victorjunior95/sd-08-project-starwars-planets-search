import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/index';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function importPlanets() {
    const planetsList = await getPlanets();
    setData(planetsList);
    setLoading(true);
  }

  useEffect(() => {
    importPlanets();
  }, []);

  const globalState = {
    data,
    loading,
  };
  return (
    <StarWarsContext.Provider value={ globalState }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
