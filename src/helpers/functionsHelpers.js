// Para Arquivo inputNumericForm
export const initialState = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

export const initialOptionsType = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

export const initialOptionsSize = ['maior que', 'menor que', 'igual a'];

// Para arquivo Table

export const columnsNames = ['names', 'rotation_period', 'orbital_period', 'diameter',
  'climate', 'gravity', 'terrain', 'surface_water',
  'population', 'films', 'created', 'edited', 'url'];

// Para o Provider

export const initialStateContext = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};
