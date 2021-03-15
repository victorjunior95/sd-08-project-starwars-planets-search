import React, { useContext, useEffect } from 'react';
import tableContext from '../context/tableContext';

function Table() {
  const { data, fetchStarWarsData, loading, handleChange, filters: { filterByName: { name } } } = useContext(tableContext);

  useEffect(() => {
    async function getPlanets() {
      await fetchStarWarsData();
    }
    getPlanets();
  }, []); // eslint-disable-line 

  const renderPlanet = (planet, key) => (
    <tr key={ key }>
      { Object.values(planet).map((info, index) => (
        <td key={ index }>
          { info }
        </td>
      )) }
    </tr>
  );

  if (loading === true) return <div>LOADING</div>;
  return (
    <table>
      <input data-testid="name-filter" type="text" value={ name } onChange={ handleChange } />
      <thead>
        <tr>
          { Object.keys(data[0]).map((header, index) => (
            <th key={ index }>{header}</th>)) }
        </tr>
      </thead>
      <tbody>
        { data
          .filter((planet) => (name ? planet.name.includes(name) : true))
          .map((planet, key) => renderPlanet(planet, key)) }
      </tbody>
    </table>
  );
}

export default Table;
