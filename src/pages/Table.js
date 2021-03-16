import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Header from '../components/Header';
import TableCard from '../components/TableCard';
import SearchNameBar from '../components/SearchNameBar';

function Table() {

  const {data, isFetching } = useContext(StarWarsContext);

  // console.log(data);

  return data.length>0 && !isFetching ? (
    <div>
      <SearchNameBar />
      <Header />
      <table>
      {data.map((result, index)=><TableCard key={index} result={result}/>)}
      </table>
    </div>
  ) : <span>Carregando...</span>
}

export default Table;
