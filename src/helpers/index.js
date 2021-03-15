// export default async function fetchAllPlanets(url = 'https://swapi-trybe.herokuapp.com/api/planets/', actualList = []) {
//   const allPlanets = await fetch(url)
//     .then((data) => data.json())
//     .then((data) => {
//       if (data.results) {
//         actualList = [...actualList, ...data.results];
//       }
//       if (data.next) {
//         return fetchAllPlanets(data.next, actualList);
//       }
//       return actualList;
//     });
//   return allPlanets;
// }

export default async function fetchAllPlanets() {
  const allPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((data) => data.json())
    .then((data) => data.results);
  return allPlanets;
}
