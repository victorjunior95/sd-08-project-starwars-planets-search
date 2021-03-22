const services = {
  getPlanetsFromApi: async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const data = await fetch(url);
    const dataJSON = await data.json();
    const planets = await dataJSON.results
      .map((planet) => {
        delete planet.residents;
        return planet;
      });
    return planets;
  },
};

export default services;
