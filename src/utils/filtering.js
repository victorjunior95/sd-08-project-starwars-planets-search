const filtering = async (data, filters, setFilteredData) => {
  const { filterByName } = filters;
  const { name: nameFilter } = filterByName;
  const newResults = data.filter(
    ({ name }) => name.toLowerCase()
      .includes(nameFilter.toLowerCase()),
  );
  await setFilteredData(newResults);
};

export default filtering;
