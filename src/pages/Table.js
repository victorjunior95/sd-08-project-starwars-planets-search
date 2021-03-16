import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Header from '../components/Header';
import TableCard from '../components/TableCard';
import SearchNameBar from '../components/SearchNameBar';

function Table() {
  const {fetchPlanetsApi} = useContext(StarWarsContext);
  
  useEffect( () => {
    async function returnedAPI() {
      await fetchPlanetsApi();
    }
    returnedAPI();
  }, [])

  const {data, isFetching } = useContext(StarWarsContext);
  console.log(data, isFetching);

  return data.length>0 && !isFetching ? (
    <div>
      <SearchNameBar />
      <Header />
      {data.map((result, index)=><TableCard key={index} result={result}/>)}
    </div>
  ) : <span>Carregando...</span>
}


export default Table;
