export default async function () {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const promise = await fetch(url);
    const data = promise.json();
    return data;
  } catch (error) {
    return error;
  }
}
