export default {
  filterByName: (arr = [], name) => {
    console.log(arr);
    console.log(name);
    return arr.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
  },
};
