import React, { useContext, useEffect } from 'react';
import Table from '../components/table';
import Forms from '../components/forms';
import PlanetsStarWarsContext from '../context/PlanetsStarWarsContext';

const NUMBER_ONE_NEGATIVE = -1;

function Home() {
  const { planetsStarWars,
    filters, filterDeleteButton,
    setPlanetStarWars, setPlanetStarWarsAUX } = useContext(PlanetsStarWarsContext);

  useEffect(() => {
    const fetchAPI = async () => {
      const planetsStarWarsAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
      const planetsStarWarsJSON = await planetsStarWarsAPI.json();
      setPlanetStarWars(planetsStarWarsJSON.results.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return NUMBER_ONE_NEGATIVE;
        }
        return 0;
      }));
      setPlanetStarWarsAUX(planetsStarWarsJSON.results);
    };
    fetchAPI();
  }, [setPlanetStarWars, setPlanetStarWarsAUX]);

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
