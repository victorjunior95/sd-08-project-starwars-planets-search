const filtering = (data, filters, setFilteredData) => {
  const { filterByName: { name } } = filters;
  const { filterByNumericValues } = filters;
  let newResults = data;
  filterByNumericValues.map((item) => {
    const { comparison, column, value } = item;
    newResults = newResults.filter(
      (planet) => {
        const flag = planet.name.toLowerCase().includes(name.toLowerCase());

        if (comparison === 'maior que') {
          return (parseInt(planet[column], 10) || flag) > parseInt(value, 10) && flag;
        }

        if (comparison === 'menor que') {
          return parseInt(planet[column], 10) < parseInt(value, 10) && flag;
        }

        if (comparison === 'igual a') {
          return parseInt(planet[column], 10) === parseInt(value, 10) && flag;
        }
        return flag;
      },
    );
    return newResults;
  });

  setFilteredData(newResults);
};

export default filtering;
