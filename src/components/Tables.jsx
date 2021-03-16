import React, { useEffect, useState } from 'react';

import tableHeaders from '../common/tableHeaders';

export default function Tables() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await endpoint.json();
      setTables(data.results);
      console.log(data.results);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          { tableHeaders.map((item, index) => (
            <th key={ index } className="columnheader">
              { item }
            </th>
          )) }
        </tr>
      </thead>
      <tbody>
        { tables.map((item, index) => (
          <tr key={ index }>
            <td>{ item.name }</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter }</td>
            <td>{ item.climate }</td>
            <td>{ item.gravity }</td>
            <td>{ item.terrain }</td>
            <td>{ item.surface_water }</td>
            <td>{ item.population }</td>
            <td>{ item.films }</td>
            <td>{ item.created }</td>
            <td>{ item.edited }</td>
            <td>{ item.naurl }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
