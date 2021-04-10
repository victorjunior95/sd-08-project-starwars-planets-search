import React from 'react';
import NameInput from './NameInput';
import NumericValues from './NumericValues';

export default function FilterForm() {
  return (
    <form>
      <NameInput />
      <NumericValues />
    </form>
  );
}
