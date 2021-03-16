// 1º crio a requisição para a api e exporto ela
async function requestApi() {
  const urlApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const fileJson = await urlApi.json();
  const data = fileJson.results;

  return data;
}

export default requestApi;
