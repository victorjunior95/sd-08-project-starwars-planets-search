export function removeKeysArrayObj(planets, key) {
  const toRemove = [...planets];
  toRemove.forEach((planet) => {
    delete planet[key];
  });
  return toRemove;
}

export function filterArrayObjByString(arrToFilter, key, expression) {
  arrToFilter.filter((element) => element[key].includes(expression));
}

export function filterArrayObjByNumber(arrToFilter, key, comparator, value) {
  const replaceComma = value.replace(',', '.');
  const numberValue = parseFloat(replaceComma);
  return arrToFilter.filter((element) => {
    const replaceCommaElement = element[key].replace(',', '.');
    const numberValueElement = parseFloat(replaceCommaElement);
    switch (comparator) {
    case 'greater':
      return numberValueElement > numberValue;
    case 'smaller':
      return numberValueElement < numberValue;
    case 'equal':
      return numberValueElement === numberValue;
    default:
      return false;
    }
  });
}
