import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';

export default function Table() {
  const { planets } = useContext(PlanetsContext);
  return (
    <table>
      {
        planets.map((e) => {
          console.log(e);
        })
      }
    </table>
  );
}
