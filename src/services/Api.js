export default async function planetsFetch() {
  console.log('teste');
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  console.log(request);
  const json = await request.json();
  return json.results;
}
