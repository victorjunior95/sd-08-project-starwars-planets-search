import React from 'react';
import NumericFilter from '../components/NumericFilter';
import TextFilter from '../components/TextFilter';
import PlanetsTable from '../components/PlanetsTable';
import starWarsLogo from '../images/starWarsLogo.svg';

function starWarsPlanets() {
  return (
    <div>
      <img
        className="star-wars-logo"
        alt="star wars logo"
        src={ starWarsLogo }
      />
      <h1>Planets</h1>
      <div className="filters">
        <TextFilter />
        <NumericFilter />
      </div>
      <PlanetsTable />
    </div>
  );
}

export default starWarsPlanets;
