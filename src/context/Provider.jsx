import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import contextStarWarsApi from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      try {
        const fetchUrl = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
        const json = await fetchUrl.json();
        setData(json.results);
      } catch (error) {
        console.log(error);
      }
    };
    requestApi();
  }, []);

  return (
    <contextStarWarsApi.Provider value={ { data, setData } }>
      { children }
    </contextStarWarsApi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
