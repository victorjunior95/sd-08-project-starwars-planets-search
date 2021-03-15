export default getData = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
  const response = await fetch(endpoint);
  let data = await response.json();
  data = data.results;
  delete (data.residents);
  return data;
};
