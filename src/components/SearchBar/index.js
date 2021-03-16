import React from 'react';
import InputNamePlanet from '../InputNamePlanet';
import SelectNumericValues from '../SelectNumericValues';
import ShowFilterScreen from '../ShowFilterScreen';

function SearchBar() {
  return (
    <div>
      <InputNamePlanet />
      <SelectNumericValues />
      <ShowFilterScreen />
    </div>
  );
}

export default SearchBar;
