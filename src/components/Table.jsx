import React, { useEffect, useContext } from 'react';
import tableContext from '../context/tableContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Table() {
  const {
    filteredData,
    setFilteredData,
    isFetching,
    setData,
    setIsFetching,
  } = useContext(tableContext);

  useEffect(() => {
    const getData = async () => {
      await setIsFetching(true);
      const content = await fetch(URL).then((res) => res.json()
        .then((obj) => obj)
        .catch((err) => err));
      await setData(content.results);
      await setFilteredData(content.results);
      await setIsFetching(false);
    };
    getData();
  }, []);

  return (
    <div className="table-container">
      {isFetching ? <span>Loading</span> : null}
      <table>
        <thead className="thead">
          <tr>
            <th>name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {isFetching ? null : filteredData && filteredData.map((item, index) => (
            <tr key={ index }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
