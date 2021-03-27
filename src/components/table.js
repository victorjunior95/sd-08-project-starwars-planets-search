import React, { useEffect/* useState */, useContext } from 'react';
import SWContext from '../context/SWContext';
// import FetchStarWars from '../helpers/API';

// const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
export default function Table() {
  // const filtredData = [];
  const { fetchData, FSWData } = useContext(SWContext);
  // const [ApiDATA, setApiData] = useState([]);
  useEffect(() => {
    async function FetchSW() {
      // console.log(SWData);
      fetchData();
      // console.log(SWData);
    }
    FetchSW();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   async function getApi() {
  //     try {
  //       const response = await fetch(STARWARS_API);
  //       const DATA = await response.json();
  //       setApiData(DATA.results);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   getApi();
  // if (!FetchStarWars) {
  //   console.log(FetchStarWars);
  //   filtredData = FetchStarWars;
  // }
  // filtredData = FetchStarWars();
  // const filtredData = ApiDATA;
  // const Filtering = () => {
  //   console.log(filter.filters.filterByName.name);
  //   if (isFilted.filterByName) {
  //     const regex = new RegExp(filter.filters.filterByName);
  //     filtredData = filtredData.filter((planet) => regex.test(planet.name));
  //   }
  // if (filter.filters.filterByNumericValues.length > 0) {
  //   filter.filters.filterByNumericValues.forEach((question) => {
  //     const ComparisonFunction = (column, comparison, value) => {
  //       // console.log(` ${typeof column} ${comparison} ${typeof value}`);
  //       // console.log( column > value);
  //       switch (comparison) {
  //       case 'maior_que':
  //         // console.log(column > value);
  //         return column > value;
  //       case 'menor_que':
  //         // console.log(column < value);
  //         return column < value;
  //       case 'igual':
  //         // console.log(column === value);
  //         return column === value;
  //       default:
  //         console.log('erro na função');
  //       }
  //     };
  //     filtredData = filtredData.filter((planet) => ComparisonFunction(
  //       planet[question.column],
  //       question.comparison,
  //       question.value,
  //     ));
  //     console.log(filtredData);
  //   });
  // }
  // };
  // useEffect(() => {
  //   Filtering();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filter]);
  const tableHeader = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created',
    'edited', 'url'];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeader.map((item) => (
              <th key={ item }>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>

          {FSWData.map((line) => (
            <tr key={ line.diameter }>
              {tableHeader.map((item) => (<td key={ item }>{line[item]}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
