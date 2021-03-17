export const INITIAL_COLUMN = {
  rotation_period: 'rotation_period',
  orbital_period: 'orbital_period',
  diameter: 'diameter',
  surface_water: 'surface_water',
  population: 'population',
};

export const INITIAL_COMPARATORS = {
  greater: 'maior que',
  equal: 'igual a',
  smaller: 'menor que',
  // greaterEqual: 'Surface Water',
  // smallerEqual: 'Population',
};

export const INITIAL_HEADER_FORM = {
  nameFilter: '',
  columnFilter: 'rotation_period',
  comparisonFilter: 'greater',
  valueFilter: '0',
};

export const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};
