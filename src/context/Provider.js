import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import getAPI from '../services';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);

  useEffect(() => {
    getAPI()
      .then((response) => setData(response));
  }, [data]);

  console.log(data);

  const context = { planets, setPlanets, filters, setFilters };
  return (
    <SWContext.Provider value={ context }>
      {children}
    </SWContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
