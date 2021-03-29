import React from 'react';
import PlanetContext from '../context/PlanetContext';

class FilterFrom extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: {}
    }
  }
  
  render() {
    return (
      <PlanetContext.Provider data={}>
      <span>Hello, App!</span>
      </PlanetContext.Provider>
    )
  }
}