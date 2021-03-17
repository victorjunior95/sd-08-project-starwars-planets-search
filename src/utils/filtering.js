const filtering = (data, filters, setFilteredData) => {
  const { filterByName: { name: nameFilter } } = filters;
  const newResults = data.filter(
    ({ name }) => name.toLowerCase()
      .includes(nameFilter.toLowerCase()),
  );
  setFilteredData(newResults);
};

export default filtering;
