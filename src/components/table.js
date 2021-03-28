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
