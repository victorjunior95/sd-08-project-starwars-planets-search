import React, { useContext } from 'react';
import { DataContext } from '../data/DataContext';

const Table = () => {
  const { data, loading } = useContext(DataContext);
  const { headers } = data;

  if (loading) return <h1>Carregando ...</h1>;

  return (
    <div>
      <table>
        <tr>
          {headers.map((header) => <td key={ header }>{header}</td>)}
        </tr>
        {data.state.map((planet) => (
          <tr key="1">
            <td
              key={ planet.name }
            >
              {Object.values(planet.name)}
            </td>
            <td
              key={ planet.rotation_period }
            >
              {Object.values(planet.rotation_period)}
            </td>
            <td
              key={ planet.orbital_period }
            >
              {Object.values(planet.orbital_period)}
            </td>
            <td
              key={ planet.diameter }
            >
              {Object.values(planet.diameter)}
            </td>
            <td
              key={ planet.climate }
            >
              {Object.values(planet.climate)}
            </td>
            <td
              key={ planet.gravity }
            >
              {Object.values(planet.gravity)}
            </td>
            <td
              key={ planet.terrain }
            >
              {Object.values(planet.terrain)}
            </td>
            <td
              key={ planet.surface_water }
            >
              {Object.values(planet.surface_water)}
            </td>
            <td
              key={ planet.population }
            >
              {Object.values(planet.population)}
            </td>
            <td
              key={ planet.films }
            >
              {Object.values(planet.films)}
            </td>
            <td
              key={ planet.created }
            >
              {Object.values(planet.created)}
            </td>
            <td
              key={ planet.edited }
            >
              {Object.values(planet.edited)}
            </td>
            <td
              key={ planet.url }
            >
              {Object.values(planet.url)}
            </td>
          </tr>
        ))}
      </table>
    </div>

  );
};

export default Table;
