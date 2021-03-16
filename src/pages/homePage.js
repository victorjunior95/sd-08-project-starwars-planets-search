import React, { useContext, useEffect } from 'react';
import Table from '../components/table';
import Forms from '../components/forms';
import PlanetsStarWarsContext from '../context/PlanetsStarWarsContext';

function Home() {
  const { fetchAPI, planetsStarWars,
    filters, filterDeleteButton } = useContext(PlanetsStarWarsContext);

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Forms />
      { !filters.filterByNumericValues.length ? <span>{}</span>
        : filters.filterByNumericValues
          .map((filter, index) => (
            <div key={ index } data-testid="filter">
              <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
              <button type="button" onClick={ () => filterDeleteButton(index) }>x</button>
            </div>
          )) }
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
