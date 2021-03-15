import React, { useEffect, useState } from 'react';

const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Table() {
  const [ApiDATA, setApiData] = useState([]);

  useEffect(() => {
    async function getApi() {
      try {
        const response = await fetch(STARWARS_API);
        const DATA = await response.json();
        setApiData(DATA.results);
      } catch (e) {
        console.error(e);
      }
    }
    getApi();
  }, []);

  const tableHeader = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'residents', 'films', 'created',
    'edited', 'url'];

  return (
    <div>
      <table>
        <tr>
          {tableHeader.map((item) => (
            <td key={ item.value }>
              {item}
            </td>
          ))}
        </tr>
        {ApiDATA.map((line) => (
          <tr key={ line.name }>
            {tableHeader.map((item) => (<td key={ item.value }>{line[item]}</td>))}
          </tr>
        ))}
      </table>
    </div>
  );
}
