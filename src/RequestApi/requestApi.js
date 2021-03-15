async function requestApi() {
  const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const jsonApi = await fetchApi.json();
  return await jsonApi;
}

export default requestApi;
