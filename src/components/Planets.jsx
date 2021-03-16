import React, { useContext } from 'react';
import { PlanetsContext } from '../context/planetsContext';
import PlanetTbody from './PlanetTbody';
import PlanetThead from './PlanetThead';

function Planets() {
  const value = useContext(PlanetsContext);

  return (
    <div>
      <table>
        <PlanetThead />
        <PlanetTbody value={ value } />
      </table>
    </div>
  );
}
export default Planets;
