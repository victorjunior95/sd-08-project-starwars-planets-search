const SORT_ORDER_ASC = 1;
const SORT_ORDER_DESC = -1;

export const sortOrderAsc = (a, b, column) => {
  const columnOrderA = a[column];
  const columnOrderB = b[column];

  if (column !== 'orbital_period') {
    if (columnOrderA > columnOrderB) return SORT_ORDER_ASC;
    if (columnOrderA < columnOrderB) return SORT_ORDER_DESC;
  }
  return +columnOrderA - +columnOrderB;
};

export const sortOrderDesc = (a, b, column) => {
  const columnOrderA = a[column];
  const columnOrderB = b[column];

  if (column !== 'orbital_period') {
    if (columnOrderA < columnOrderB) return SORT_ORDER_ASC;
    if (columnOrderA > columnOrderB) return SORT_ORDER_DESC;
  }
  return +columnOrderB - +columnOrderA;
};

export const createSortPlanets = (column) => ({
  ASC: (a, b) => sortOrderAsc(a, b, column),
  DESC: (a, b) => sortOrderDesc(a, b, column),
}) || 0;
