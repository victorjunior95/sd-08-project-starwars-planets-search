import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Header from '../components/Header';
import TableCard from '../components/TableCard';
import SearchNameBar from '../components/SearchNameBar';

function Table() {
  const {
    data,
    isFetching,
    filters: {
      filterByName: { name },
    },
  } = useContext(StarWarsContext);

  const filteredData = data
    .filter((value) => value.name.toLowerCase().includes(name.toLowerCase()));
  return data.length > 0 && !isFetching ? (
    <div>
      <SearchNameBar />
      <table>
        <Header />
        {filteredData.map((result, index) => (
          <TableCard key={ index } result={ result } />
        ))}
      </table>
    </div>
  ) : (
    <span>Carregando...</span>
  );
}

export default Table;
