import React, { useContext, useEffect } from 'react';
import Table from '../components/table';
import Forms from '../components/forms';
import PlanetsStarWarsContext from '../context/PlanetsStarWarsContext';

function Home() {
  const { fetchAPI, planetsStarWars } = useContext(PlanetsStarWarsContext);

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Forms />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>residents</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
          </tr>
        </thead>
        <Table planets={ planetsStarWars } />
      </table>
    </>
  );
}

export default Home;
