import React from 'react';
import PropTypes from 'prop-types';
import listPlanetsContext from './listPlanetsContext';

function listPlanetsProvider() {
  return <listPlanetsContext.Provider />;
}
export default listPlanetsProvider;

listPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
