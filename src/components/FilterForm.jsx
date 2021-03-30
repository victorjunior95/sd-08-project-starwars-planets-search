import React from 'react';
import PlanetProvider from '../context/PlanetProvider';

export default function FilterFrom() {
  return (
    <PlanetProvider>
      <span>Hello, App!</span>
    </PlanetProvider>
  );
}
