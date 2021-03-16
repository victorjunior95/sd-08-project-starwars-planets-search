import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsAPI from '../services/StarwarsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [inputText, setInputText] = useState('');

  async function fetchData() {
    const { results } = await getPlanetsAPI();
    setData({ dataFromAPI: results, dataFiltered: results });
    setIsFetching(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData((d) => {
      if (d !== undefined) {
        const dataFiltered = d.dataFromAPI
          .filter((element) => element.name.toLowerCase()
            .includes(inputText.toLowerCase()));
        return { ...d, dataFiltered };
      }
    });
  }, [inputText]);

  return (
    <PlanetsContext.Provider
      value={
        { data, isFetching, setData, setIsFetching, inputText, setInputText }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
