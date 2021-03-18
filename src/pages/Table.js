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
      filterByNumericValues,
    },
  } = useContext(StarWarsContext);
  
  if(filterByNumericValues.length>0) {
    const result2 = filterByNumericValues.map((filtered)=> data.filter((element)=>element[filtered.column]>filtered.value)
    );

    console.log(filterByNumericValues);
    // console.log(data[0]);
    // console.log(filterByNumericValues[0].value);
    const newData = data.filter((element)=>element[filterByNumericValues[0].column]>filterByNumericValues[0].value)
    // console.log(newData)
  }
  

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
