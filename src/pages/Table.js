import React, { useContext } from "react";
import StarWarsContext from "../context/StarWarsContext";
import Header from "../components/Header";
import TableCard from "../components/TableCard";
import SearchNameBar from "../components/SearchNameBar";

function Table() {
  const {
    data,
    isFetching,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
    allFilteredNumbers,
  } = useContext(StarWarsContext);

  const filteredData = data.filter((value) =>
    value.name.toLowerCase().includes(name.toLowerCase())
  );

  
  if (filterByNumericValues.length > 0) {
    const result2 = filterByNumericValues.map((filtered) =>
      data.filter((element) => element[filtered.column] > filtered.value)
    );
    console.log(filterByNumericValues);
    // filterByNumericValues.forEach((element) => {
    //   const { column, comparison, value } = element;
    //   switch(comparison) {
    //     case 'maior que':
    //       const greaterThan = (data
    //       .filter((planet) => planet[column] > value)
    //       .filter((word) => word.name.toLowerCase().includes(name.toLowerCase())));
    //       setAllFilteredNumbers(greaterThan);
    //       return greaterThan;
    //     case 'menor que':
    //       const smallerThan = (data
    //       .filter((planet) => planet[column] < value)
    //       .filter((word) => word.name.toLowerCase().includes(name.toLowerCase())));
    //       setAllFilteredNumbers(smallerThan);
    //       return smallerThan;
    //     case 'igual a':
    //       const equalTo = (data
    //       .filter((planet) => planet[column] === value)
    //       .filter((word) => word.name.toLowerCase().includes(name.toLowerCase())));
    //       setAllFilteredNumbers(equalTo);
    //       return equalTo;
    //     default:
    //       const defaulResult = filteredData;
    //       setAllFilteredNumbers(defaulResult);
    //       return defaulResult;
    //   }
    // });
  }


  return data.length > 0 && !isFetching ? (
    <div>
      <SearchNameBar />
      <table>
        <Header />
        {allFilteredNumbers.map((result, index) => (
          <TableCard key={index} result={result} />
        ))}
      </table>
    </div>
  ) : (
    <span>Carregando...</span>
  );
}

export default Table;
