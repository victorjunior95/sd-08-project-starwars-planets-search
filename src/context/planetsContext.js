import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import planetsFetch from '../services/Api';

const PlanetsContext = createContext();

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    planetsFetch().then((response) => setData(response));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setHeader(
        Object.keys(data[0]).filter((property) => property !== 'residents'),
      );
    }
  }, [data]);

  const provide = {
    data,
    header,
  };

  return (
    <PlanetsContext.Provider value={ provide }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetsContext, PlanetsProvider as Provider };
