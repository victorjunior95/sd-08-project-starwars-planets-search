async function getPlanetsAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const dataJSON = await fetch(url);
  const data = await dataJSON.json();
  return data.results;
}

export default getPlanetsAPI;
