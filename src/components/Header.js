import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import { Context } from '../context';
import InputText from './inputs/InputText';

const Header = () => {
  const { filters: { filterByName } } = useContext(Context);

  return (
    <header>
      <InputText
        name="name-filter"
        label="Busque pelo nome: "
        stateUpdater={ filterByName.setFilter }
      />
    </header>
  );
};

// Header.propTypes = {

// };

export default Header;
